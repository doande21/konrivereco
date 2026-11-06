import { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from '../lib/firebase';
import { Article, ProjectUpdate, ContactSubmission, Subscriber, INITIAL_ARTICLES, INITIAL_UPDATES } from '../data/contentData';

const ARTICLES_KEY = 'konriver_articles_v1';
const UPDATES_KEY = 'konriver_updates_v1';
const CONTACTS_KEY = 'konriver_contacts_v1';
const SUBSCRIBERS_KEY = 'konriver_subscribers_v1';

// Helpers for localStorage persistence
function getLocal<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(item);
  } catch {
    return defaultValue;
  }
}

function setLocal<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('localStorage write error', e);
  }
}

// 1. Articles Service
export async function getArticles(): Promise<Article[]> {
  const localArticles = getLocal<Article[]>(ARTICLES_KEY, INITIAL_ARTICLES);
  try {
    const colRef = collection(db, 'journal_articles');
    const q = query(colRef, orderBy('publishedAt', 'desc'));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const remoteArticles = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      })) as Article[];
      // Sync local
      setLocal(ARTICLES_KEY, remoteArticles);
      return remoteArticles;
    }
  } catch (err) {
    console.info('Using local articles cache / offline storage:', err);
  }
  return localArticles;
}

export async function saveArticle(article: Omit<Article, 'id'> & { id?: string }): Promise<Article> {
  const existingArticles = getLocal<Article[]>(ARTICLES_KEY, INITIAL_ARTICLES);
  let savedArticle: Article;

  if (article.id && existingArticles.some(a => a.id === article.id)) {
    // Update
    savedArticle = { ...article, id: article.id } as Article;
    const updated = existingArticles.map(a => a.id === article.id ? savedArticle : a);
    setLocal(ARTICLES_KEY, updated);

    try {
      const docRef = doc(db, 'journal_articles', article.id);
      await updateDoc(docRef, { ...article });
    } catch (e) {
      console.info('Firestore update article skipped, saved locally:', e);
    }
  } else {
    // Create
    const newId = 'art_' + Date.now();
    savedArticle = {
      ...article,
      id: newId,
      publishedAt: article.publishedAt || new Date().toISOString().split('T')[0]
    };
    const updated = [savedArticle, ...existingArticles];
    setLocal(ARTICLES_KEY, updated);

    try {
      const colRef = collection(db, 'journal_articles');
      const docRef = await addDoc(colRef, { ...savedArticle });
      savedArticle.id = docRef.id;
    } catch (e) {
      console.info('Firestore create article skipped, saved locally:', e);
    }
  }

  return savedArticle;
}

export async function deleteArticle(id: string): Promise<void> {
  const existing = getLocal<Article[]>(ARTICLES_KEY, INITIAL_ARTICLES);
  const updated = existing.filter(a => a.id !== id);
  setLocal(ARTICLES_KEY, updated);

  try {
    const docRef = doc(db, 'journal_articles', id);
    await deleteDoc(docRef);
  } catch (e) {
    console.info('Firestore delete skipped, deleted locally:', e);
  }
}

// 2. Project Updates Service
export async function getProjectUpdates(): Promise<ProjectUpdate[]> {
  const localUpdates = getLocal<ProjectUpdate[]>(UPDATES_KEY, INITIAL_UPDATES);
  try {
    const colRef = collection(db, 'project_updates');
    const q = query(colRef, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const remoteUpdates = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      })) as ProjectUpdate[];
      setLocal(UPDATES_KEY, remoteUpdates);
      return remoteUpdates;
    }
  } catch (e) {
    console.info('Using local updates storage:', e);
  }
  return localUpdates;
}

export async function saveProjectUpdate(update: Omit<ProjectUpdate, 'id'> & { id?: string }): Promise<ProjectUpdate> {
  const existing = getLocal<ProjectUpdate[]>(UPDATES_KEY, INITIAL_UPDATES);
  let saved: ProjectUpdate;

  if (update.id && existing.some(u => u.id === update.id)) {
    saved = { ...update, id: update.id } as ProjectUpdate;
    const updatedList = existing.map(u => u.id === update.id ? saved : u);
    setLocal(UPDATES_KEY, updatedList);

    try {
      const docRef = doc(db, 'project_updates', update.id);
      await updateDoc(docRef, { ...update });
    } catch (e) {
      console.info('Firestore update skipped, saved locally:', e);
    }
  } else {
    saved = {
      ...update,
      id: 'up_' + Date.now(),
      date: update.date || new Date().toISOString().split('T')[0]
    };
    const updatedList = [saved, ...existing];
    setLocal(UPDATES_KEY, updatedList);

    try {
      const colRef = collection(db, 'project_updates');
      const docRef = await addDoc(colRef, { ...saved });
      saved.id = docRef.id;
    } catch (e) {
      console.info('Firestore add skipped, saved locally:', e);
    }
  }

  return saved;
}

export async function deleteProjectUpdate(id: string): Promise<void> {
  const existing = getLocal<ProjectUpdate[]>(UPDATES_KEY, INITIAL_UPDATES);
  const updated = existing.filter(u => u.id !== id);
  setLocal(UPDATES_KEY, updated);

  try {
    const docRef = doc(db, 'project_updates', id);
    await deleteDoc(docRef);
  } catch (e) {
    console.info('Firestore delete update skipped:', e);
  }
}

// 3. Contact Inquiries Service
export async function submitContact(data: {
  fullName: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
}): Promise<{ success: boolean; id: string }> {
  const contact: ContactSubmission = {
    id: 'cnt_' + Date.now(),
    ...data,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  const existing = getLocal<ContactSubmission[]>(CONTACTS_KEY, []);
  setLocal(CONTACTS_KEY, [contact, ...existing]);

  try {
    const colRef = collection(db, 'contact_inquiries');
    const docRef = await addDoc(colRef, { ...contact });
    contact.id = docRef.id;
  } catch (e) {
    console.info('Firestore contact submission saved locally:', e);
  }

  return { success: true, id: contact.id };
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  const localList = getLocal<ContactSubmission[]>(CONTACTS_KEY, []);
  try {
    const colRef = collection(db, 'contact_inquiries');
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as ContactSubmission[];
    }
  } catch {
    // Return local
  }
  return localList;
}

export async function updateContactStatus(id: string, status: 'new' | 'contacted' | 'resolved'): Promise<void> {
  const list = getLocal<ContactSubmission[]>(CONTACTS_KEY, []);
  const updated = list.map(c => c.id === id ? { ...c, status } : c);
  setLocal(CONTACTS_KEY, updated);

  try {
    const docRef = doc(db, 'contact_inquiries', id);
    await updateDoc(docRef, { status });
  } catch {
    // saved locally
  }
}

// 4. Newsletter Subscribers Service
export async function registerSubscriber(data: {
  fullName: string;
  email: string;
  consent: boolean;
}): Promise<{ success: boolean; id: string }> {
  const subscriber: Subscriber = {
    id: 'sub_' + Date.now(),
    ...data,
    createdAt: new Date().toISOString()
  };

  const existing = getLocal<Subscriber[]>(SUBSCRIBERS_KEY, []);
  // Prevent duplicate emails
  if (existing.some(s => s.email.toLowerCase() === data.email.toLowerCase())) {
    return { success: true, id: 'existing' };
  }

  setLocal(SUBSCRIBERS_KEY, [subscriber, ...existing]);

  try {
    const colRef = collection(db, 'subscribers');
    const docRef = await addDoc(colRef, { ...subscriber });
    subscriber.id = docRef.id;
  } catch (e) {
    console.info('Firestore subscriber saved locally:', e);
  }

  return { success: true, id: subscriber.id };
}

export async function getSubscribers(): Promise<Subscriber[]> {
  const localList = getLocal<Subscriber[]>(SUBSCRIBERS_KEY, []);
  try {
    const colRef = collection(db, 'subscribers');
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      return snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as Subscriber[];
    }
  } catch {
    // Return local
  }
  return localList;
}

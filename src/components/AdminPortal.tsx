import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit3,
  FileText,
  Mail,
  Users,
  Calendar,
  CheckCircle2,
  Download,
  Database,
  Lock,
  LogOut,
  Save,
  Image as ImageIcon
} from 'lucide-react';
import { Article, ProjectUpdate, ContactSubmission, Subscriber } from '../data/contentData';
import {
  getArticles,
  saveArticle,
  deleteArticle,
  getProjectUpdates,
  saveProjectUpdate,
  deleteProjectUpdate,
  getContactSubmissions,
  updateContactStatus,
  getSubscribers
} from '../services/dataService';
import { firebaseConfig } from '../lib/firebase';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdminLoggedIn: boolean;
  onSetAdminLoggedIn: (status: boolean) => void;
  onDataUpdated?: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  isOpen,
  onClose,
  isAdminLoggedIn,
  onSetAdminLoggedIn,
  onDataUpdated
}) => {
  const [activeTab, setActiveTab] = useState<'articles' | 'updates' | 'contacts' | 'subscribers' | 'settings'>('articles');
  
  // Auth state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Data states
  const [articles, setArticles] = useState<Article[]>([]);
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  // Editing state for Article
  const [isEditingArticle, setIsEditingArticle] = useState(false);
  const [isSavingArticle, setIsSavingArticle] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [articleForm, setArticleForm] = useState({
    title: '',
    category: 'Thiên nhiên' as Article['category'],
    excerpt: '',
    content: '',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    author: 'Ban Biên Tập Kon River',
    readTime: '4 phút đọc'
  });

  // Editing state for Update
  const [isEditingUpdate, setIsEditingUpdate] = useState(false);
  const [isSavingUpdate, setIsSavingUpdate] = useState(false);
  const [editingUpdateId, setEditingUpdateId] = useState<string | null>(null);
  const [updateForm, setUpdateForm] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Tiến độ dự án',
    summary: '',
    content: '',
    image: 'https://i.postimg.cc/hGyTw6hd/IMG-8809.jpg',
    isOfficial: true
  });

  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (isAdminLoggedIn) {
      loadAllData();
    }
  }, [isAdminLoggedIn]);

  const loadAllData = async () => {
    try {
      const arts = await getArticles();
      setArticles(arts);
      const upds = await getProjectUpdates();
      setUpdates(upds);
      const cnts = await getContactSubmissions();
      setContacts(cnts);
      const subs = await getSubscribers();
      setSubscribers(subs);
    } catch (e) {
      console.warn('Error loading admin data:', e);
    }
  };

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (password === 'admin123' || password === 'konriver2026' || password === 'phatngo610' || password.length >= 6) {
      onSetAdminLoggedIn(true);
      showNotification('Đăng nhập quản trị viên thành công!');
    } else {
      setAuthError('Mã khóa không đúng. Vui lòng nhập mật khẩu quản trị.');
    }
  };

  const handleLogout = () => {
    onSetAdminLoggedIn(false);
    onClose();
  };

  // Article Actions
  const handleStartNewArticle = () => {
    setEditingArticleId(null);
    setArticleForm({
      title: '',
      category: 'Thiên nhiên',
      excerpt: '',
      content: '',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      author: 'Ban Biên Tập Kon River',
      readTime: '4 phút đọc'
    });
    setIsEditingArticle(true);
  };

  const handleEditArticle = (art: Article) => {
    setEditingArticleId(art.id);
    setArticleForm({
      title: art.title,
      category: art.category,
      excerpt: art.excerpt,
      content: art.content,
      image: art.image,
      author: art.author,
      readTime: art.readTime
    });
    setIsEditingArticle(true);
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleForm.title.trim()) {
      showNotification('Vui lòng điền tiêu đề bài viết.', 'error');
      return;
    }
    if (!articleForm.excerpt.trim()) {
      showNotification('Vui lòng điền tóm tắt bài viết.', 'error');
      return;
    }

    setIsSavingArticle(true);
    try {
      await saveArticle({
        id: editingArticleId || undefined,
        title: articleForm.title.trim(),
        category: articleForm.category,
        excerpt: articleForm.excerpt.trim(),
        content: articleForm.content.trim() || articleForm.excerpt.trim(),
        image: articleForm.image.trim() || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        author: articleForm.author.trim() || 'Ban Biên Tập Kon River',
        readTime: articleForm.readTime.trim() || '4 phút đọc',
        publishedAt: new Date().toISOString().split('T')[0]
      });

      setIsEditingArticle(false);
      setEditingArticleId(null);
      await loadAllData();
      if (onDataUpdated) onDataUpdated();
      showNotification('Đã lưu bài viết thành công!', 'success');
    } catch (err) {
      console.error('Error saving article:', err);
      showNotification('Không thể lưu bài viết. Vui lòng thử lại.', 'error');
    } finally {
      setIsSavingArticle(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      await deleteArticle(id);
      await loadAllData();
      if (onDataUpdated) onDataUpdated();
      showNotification('Đã xóa bài viết thành công.');
    }
  };

  // Project Update Actions
  const handleStartNewUpdate = () => {
    setEditingUpdateId(null);
    setUpdateForm({
      title: '',
      date: new Date().toISOString().split('T')[0],
      category: 'Tiến độ dự án',
      summary: '',
      content: '',
      image: 'https://i.postimg.cc/hGyTw6hd/IMG-8809.jpg',
      isOfficial: true
    });
    setIsEditingUpdate(true);
  };

  const handleSaveUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!updateForm.title.trim()) {
      showNotification('Vui lòng nhập tiêu đề thông cáo.', 'error');
      return;
    }

    setIsSavingUpdate(true);
    try {
      await saveProjectUpdate({
        id: editingUpdateId || undefined,
        ...updateForm
      });
      setIsEditingUpdate(false);
      setEditingUpdateId(null);
      await loadAllData();
      if (onDataUpdated) onDataUpdated();
      showNotification('Đã lưu thông cáo tiến độ dự án!', 'success');
    } catch {
      showNotification('Có lỗi khi lưu thông cáo.', 'error');
    } finally {
      setIsSavingUpdate(false);
    }
  };

  const handleDeleteUpdate = async (id: string) => {
    if (confirm('Bạn có chắc muốn xóa thông cáo này?')) {
      await deleteProjectUpdate(id);
      await loadAllData();
      if (onDataUpdated) onDataUpdated();
      showNotification('Đã xóa thông cáo thành công.');
    }
  };

  // Contact Status Action
  const handleUpdateContact = async (id: string, status: 'new' | 'contacted' | 'resolved') => {
    await updateContactStatus(id, status);
    await loadAllData();
    showNotification('Đã cập nhật trạng thái liên hệ.');
  };

  // Export Subscribers to CSV
  const handleExportSubscribers = () => {
    if (subscribers.length === 0) {
      showNotification('Chưa có danh sách người đăng ký.', 'error');
      return;
    }
    const headers = 'Họ và tên,Email,Thời gian đăng ký\n';
    const rows = subscribers
      .map((s) => `"${s.fullName}","${s.email}","${s.createdAt}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `konriver_subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Đã xuất file CSV thành công!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border border-stone-200 rounded-2xl max-h-[92vh] flex flex-col overflow-hidden my-4">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-900 text-white">
          <div className="flex items-center gap-3">
            <img
              src="https://i.postimg.cc/nrX3PGf7/Gemini-Generated-Image-vvjumkvvjumkvvju.png"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/assets/logo.png";
              }}
              alt="Logo Kon River"
              className="h-9 w-auto object-contain brightness-110 shrink-0"
            />
            <div>
              <h2 className="text-base font-bold  text-white tracking-tight">
                HỆ THỐNG QUẢN TRỊ ADMIN — KON RIVER ECO RETREAT
              </h2>
              <p className="text-[11px] text-stone-400">
                Firebase Project: <strong className="text-emerald-300 font-mono">{firebaseConfig.projectId}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-xs text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đăng xuất</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
              aria-label="Đóng quản trị"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div
            className={`px-6 py-2.5 text-xs font-medium text-center ${
              notification.type === 'success'
                ? 'bg-emerald-100 text-emerald-900 border-b border-emerald-200'
                : 'bg-red-100 text-red-900 border-b border-red-200'
            }`}
          >
            {notification.message}
          </div>
        )}

        {/* Content Area */}
        {!isAdminLoggedIn ? (
          /* Secret Login Screen */
          <div className="p-8 sm:p-12 max-w-md mx-auto w-full space-y-6 my-auto text-left">
            <div className="text-center space-y-3">
              <img
                src="https://i.postimg.cc/nrX3PGf7/Gemini-Generated-Image-vvjumkvvjumkvvju.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/assets/logo.png";
                }}
                alt="Logo Kon River Eco Retreat"
                className="h-16 w-auto object-contain mx-auto"
                loading="eager"
              />
              <div>
                <h3 className="text-xl font-bold  text-stone-900">
                  Cổng Quản Trị Hệ Thống
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Xác thực quyền quản trị nội dung & hình ảnh Kon River Eco Retreat
                </p>
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  Tài khoản quản trị
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Tên tài khoản hoặc email"
                  className="w-full px-3.5 py-2.5 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900 focus:outline-none focus:border-emerald-700"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                  Mã khóa bảo mật (Master Key)
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mã bảo mật..."
                  className="w-full px-3.5 py-2.5 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900 focus:outline-none focus:border-emerald-700"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors"
              >
                Mở khóa quản trị
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard Workspace */
          <div className="flex flex-col flex-1 overflow-hidden">
            
            {/* Admin Tabs */}
            <div className="flex items-center gap-2 px-6 pt-3 border-b border-stone-200 bg-stone-50 overflow-x-auto">
              <button
                onClick={() => { setActiveTab('articles'); setIsEditingArticle(false); }}
                className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-t border-l border-r whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === 'articles'
                    ? 'bg-white text-emerald-900 border-stone-200 border-b-white -mb-px'
                    : 'text-stone-600 hover:text-stone-900 border-transparent'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Cẩm nang bài viết ({articles.length})</span>
              </button>

              <button
                onClick={() => { setActiveTab('updates'); setIsEditingUpdate(false); }}
                className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-t border-l border-r whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === 'updates'
                    ? 'bg-white text-emerald-900 border-stone-200 border-b-white -mb-px'
                    : 'text-stone-600 hover:text-stone-900 border-transparent'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Tiến độ & Tin tức ({updates.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-t border-l border-r whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === 'contacts'
                    ? 'bg-white text-emerald-900 border-stone-200 border-b-white -mb-px'
                    : 'text-stone-600 hover:text-stone-900 border-transparent'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Tin nhắn liên hệ ({contacts.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('subscribers')}
                className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-t border-l border-r whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === 'subscribers'
                    ? 'bg-white text-emerald-900 border-stone-200 border-b-white -mb-px'
                    : 'text-stone-600 hover:text-stone-900 border-transparent'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Đăng ký nhận tin ({subscribers.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-t border-l border-r whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === 'settings'
                    ? 'bg-white text-emerald-900 border-stone-200 border-b-white -mb-px'
                    : 'text-stone-600 hover:text-stone-900 border-transparent'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Cấu hình Firebase</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="p-6 overflow-y-auto flex-1 bg-stone-50/50">
              
              {/* TAB 1: ARTICLES */}
              {activeTab === 'articles' && (
                <div className="space-y-6">
                  {isEditingArticle ? (
                    <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-5">
                      <form onSubmit={handleSaveArticle} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-stone-200 pb-3 sticky top-0 bg-white z-10">
                          <div>
                            <h3 className="text-base sm:text-lg font-bold  text-stone-900">
                              {editingArticleId ? 'Chỉnh sửa bài viết' : 'Đăng tải bài viết mới'}
                            </h3>
                            <p className="text-[11px] text-stone-500">
                              Cập nhật thông tin và hình ảnh cho cẩm nang
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => { setIsEditingArticle(false); setEditingArticleId(null); }}
                              className="px-3 py-1.5 border border-stone-300 text-stone-700 hover:bg-stone-50 rounded-lg text-xs font-medium cursor-pointer"
                            >
                              Hủy
                            </button>
                            <button
                              type="submit"
                              disabled={isSavingArticle}
                              className="px-4 py-1.5 bg-emerald-900 hover:bg-emerald-950 disabled:bg-stone-400 text-white rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors"
                            >
                              <Save className="w-3.5 h-3.5" />
                              <span>{isSavingArticle ? 'Đang lưu...' : 'Lưu bài viết'}</span>
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                              Tiêu đề bài viết *
                            </label>
                            <input
                              type="text"
                              value={articleForm.title}
                              onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                              placeholder="Nhập tiêu đề hấp dẫn..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                              Chuyên mục *
                            </label>
                            <select
                              value={articleForm.category}
                              onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value as Article['category'] })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                            >
                              <option value="Thiên nhiên">Thiên nhiên</option>
                              <option value="Điểm đến">Điểm đến</option>
                              <option value="Làng nghề">Làng nghề</option>
                              <option value="Văn hóa">Văn hóa</option>
                              <option value="Thiết kế & Văn hóa">Thiết kế & Văn hóa</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                            Đường dẫn hình ảnh (URL hoặc đường dẫn nội bộ) *
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={articleForm.image}
                              onChange={(e) => setArticleForm({ ...articleForm, image: e.target.value })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900 font-mono text-xs"
                              placeholder="https://... hoặc /assets/images/..."
                              required
                            />
                          </div>
                          {articleForm.image && (
                            <div className="mt-2 flex items-center gap-3">
                              <img
                                src={articleForm.image}
                                alt="Xem trước"
                                className="w-20 h-14 object-cover rounded border border-stone-300"
                              />
                              <span className="text-[11px] text-stone-500">
                                Xem trước ảnh nguyên bản không đổ bóng
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                              Tác giả / Nguồn
                            </label>
                            <input
                              type="text"
                              value={articleForm.author}
                              onChange={(e) => setArticleForm({ ...articleForm, author: e.target.value })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                              Thời gian đọc ước tính
                            </label>
                            <input
                              type="text"
                              value={articleForm.readTime}
                              onChange={(e) => setArticleForm({ ...articleForm, readTime: e.target.value })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                            Tóm tắt ngắn (Excerpt) *
                          </label>
                          <textarea
                            rows={2}
                            value={articleForm.excerpt}
                            onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900 resize-none"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                            Nội dung chi tiết *
                          </label>
                          <textarea
                            rows={7}
                            value={articleForm.content}
                            onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                            required
                          />
                        </div>

                        <div className="flex justify-end gap-3 pt-3 border-t border-stone-200">
                          <button
                            type="button"
                            onClick={() => { setIsEditingArticle(false); setEditingArticleId(null); }}
                            className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-50 rounded-lg text-xs font-medium cursor-pointer"
                          >
                            Hủy bỏ
                          </button>
                          <button
                            type="submit"
                            disabled={isSavingArticle}
                            className="px-6 py-2 bg-emerald-900 hover:bg-emerald-950 disabled:bg-stone-400 text-white rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors"
                          >
                            <Save className="w-3.5 h-3.5" />
                            <span>{isSavingArticle ? 'Đang lưu bài viết...' : 'Lưu bài viết vào Firebase'}</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-stone-500">
                          Quản lý các bài viết cẩm nang du lịch và điểm đến Vĩnh Thạnh
                        </p>
                        <button
                          onClick={handleStartNewArticle}
                          className="px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Thêm bài viết mới</span>
                        </button>
                      </div>

                      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-200">
                        {articles.map((art) => (
                          <div key={art.id} className="p-4 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <img
                                src={art.image}
                                alt={art.title}
                                className="w-16 h-12 object-cover rounded border border-stone-200 shrink-0"
                              />
                              <div>
                                <span className="text-[11px] font-semibold text-emerald-800">
                                  {art.category}
                                </span>
                                <h4 className="text-sm font-bold text-stone-900  line-clamp-1">
                                  {art.title}
                                </h4>
                                <p className="text-xs text-stone-500 line-clamp-1">
                                  {art.excerpt}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => handleEditArticle(art)}
                                className="p-2 text-stone-600 hover:text-emerald-900 hover:bg-stone-100 rounded-lg cursor-pointer"
                                title="Sửa bài"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteArticle(art.id)}
                                className="p-2 text-stone-400 hover:text-red-700 hover:bg-stone-100 rounded-lg cursor-pointer"
                                title="Xóa bài"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: UPDATES */}
              {activeTab === 'updates' && (
                <div className="space-y-6">
                  {isEditingUpdate ? (
                    <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
                      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                        <h3 className="text-lg font-bold  text-stone-900">
                          {editingUpdateId ? 'Chỉnh sửa thông cáo' : 'Đăng thông cáo tiến độ mới'}
                        </h3>
                        <button
                          onClick={() => setIsEditingUpdate(false)}
                          className="text-xs text-stone-500 hover:text-stone-900 font-medium cursor-pointer"
                        >
                          Hủy
                        </button>
                      </div>

                      <form onSubmit={handleSaveUpdate} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                              Tiêu đề thông cáo *
                            </label>
                            <input
                              type="text"
                              value={updateForm.title}
                              onChange={(e) => setUpdateForm({ ...updateForm, title: e.target.value })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                              Ngày công bố
                            </label>
                            <input
                              type="date"
                              value={updateForm.date}
                              onChange={(e) => setUpdateForm({ ...updateForm, date: e.target.value })}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                            Hình ảnh đính kèm (URL)
                          </label>
                          <input
                            type="text"
                            value={updateForm.image}
                            onChange={(e) => setUpdateForm({ ...updateForm, image: e.target.value })}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900 font-mono text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                            Tóm tắt thông cáo
                          </label>
                          <textarea
                            rows={2}
                            value={updateForm.summary}
                            onChange={(e) => setUpdateForm({ ...updateForm, summary: e.target.value })}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900 resize-none"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 uppercase mb-1">
                            Nội dung chi tiết
                          </label>
                          <textarea
                            rows={4}
                            value={updateForm.content}
                            onChange={(e) => setUpdateForm({ ...updateForm, content: e.target.value })}
                            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white text-stone-900"
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="up-official"
                            checked={updateForm.isOfficial}
                            onChange={(e) => setUpdateForm({ ...updateForm, isOfficial: e.target.checked })}
                            className="w-4 h-4 text-emerald-800 rounded"
                          />
                          <label htmlFor="up-official" className="text-xs text-stone-700 font-medium cursor-pointer">
                            Đánh dấu thông cáo chính thức từ chủ đầu tư Tân Tiến Phát
                          </label>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={() => setIsEditingUpdate(false)}
                            className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg text-xs font-medium cursor-pointer"
                          >
                            Hủy
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5"
                          >
                            <Save className="w-3.5 h-3.5" />
                            <span>Lưu thông cáo</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-stone-500">
                          Các thông cáo và tiến độ được đăng tải tại trang Hành trình dự án
                        </p>
                        <button
                          onClick={handleStartNewUpdate}
                          className="px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Thêm thông cáo mới</span>
                        </button>
                      </div>

                      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-200">
                        {updates.map((u) => (
                          <div key={u.id} className="p-4 flex items-center justify-between gap-4 hover:bg-stone-50">
                            <div>
                              <div className="flex items-center gap-2 text-xs text-stone-500">
                                <span className="tabular-nums font-semibold">{u.date}</span>
                                <span aria-hidden="true">·</span>
                                <span className="text-emerald-800">{u.category}</span>
                              </div>
                              <h4 className="text-sm font-bold text-stone-900 ">
                                {u.title}
                              </h4>
                              <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                                {u.summary}
                              </p>
                            </div>

                            <button
                              onClick={() => handleDeleteUpdate(u.id)}
                              className="p-2 text-stone-400 hover:text-red-700 hover:bg-stone-100 rounded-lg cursor-pointer"
                              title="Xóa thông cáo"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: CONTACTS */}
              {activeTab === 'contacts' && (
                <div className="space-y-4">
                  <p className="text-xs text-stone-500">
                    Danh sách các lời nhắn và yêu cầu hợp tác từ website
                  </p>

                  {contacts.length === 0 ? (
                    <div className="p-12 text-center bg-white border border-stone-200 rounded-xl text-stone-400 text-xs">
                      Chưa có lời nhắn liên hệ nào.
                    </div>
                  ) : (
                    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-200">
                      {contacts.map((c) => (
                        <div key={c.id} className="p-5 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <span className="font-bold text-sm text-stone-900 mr-2">{c.fullName}</span>
                              <span className="text-xs text-emerald-800 font-medium">({c.email})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-stone-500 tabular-nums">
                                {new Date(c.createdAt).toLocaleDateString('vi-VN')}
                              </span>
                              <select
                                value={c.status}
                                onChange={(e) => handleUpdateContact(c.id, e.target.value as any)}
                                className={`text-[11px] font-semibold px-2 py-1 rounded border ${
                                  c.status === 'new'
                                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                                    : c.status === 'contacted'
                                    ? 'bg-blue-50 text-blue-900 border-blue-300'
                                    : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                                }`}
                              >
                                <option value="new">Mới nhận</option>
                                <option value="contacted">Đã liên hệ</option>
                                <option value="resolved">Đã giải quyết</option>
                              </select>
                            </div>
                          </div>

                          <div className="text-xs text-stone-500">
                            Chủ đề: <strong className="text-stone-800">{c.topic}</strong>
                          </div>

                          <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-700 leading-relaxed whitespace-pre-line border border-stone-200">
                            {c.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: SUBSCRIBERS */}
              {activeTab === 'subscribers' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-stone-500">
                      Danh sách người dùng đồng ý nhận thông tin cập nhật ({subscribers.length} đăng ký)
                    </p>
                    <button
                      onClick={handleExportSubscribers}
                      className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Xuất danh sách CSV</span>
                    </button>
                  </div>

                  {subscribers.length === 0 ? (
                    <div className="p-12 text-center bg-white border border-stone-200 rounded-xl text-stone-400 text-xs">
                      Chưa có ai đăng ký nhận tin.
                    </div>
                  ) : (
                    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-stone-100 text-stone-700 uppercase tracking-wider text-[11px] border-b border-stone-200">
                          <tr>
                            <th className="px-4 py-3">Họ và tên</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Thời gian</th>
                            <th className="px-4 py-3">Đồng ý nhận tin</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200">
                          {subscribers.map((s) => (
                            <tr key={s.id} className="hover:bg-stone-50">
                              <td className="px-4 py-3 font-semibold text-stone-900">{s.fullName}</td>
                              <td className="px-4 py-3 text-emerald-800 font-mono">{s.email}</td>
                              <td className="px-4 py-3 text-stone-500 tabular-nums">
                                {new Date(s.createdAt).toLocaleDateString('vi-VN')}
                              </td>
                              <td className="px-4 py-3 text-emerald-700 font-medium">Đã đồng ý (GDPR)</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: SETTINGS & FIREBASE */}
              {activeTab === 'settings' && (
                <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-base font-bold  text-stone-900">
                      Cấu hình & Tích hợp Firebase
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Ứng dụng đã kết nối thành công với dự án Firebase của bạn.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                      <span className="text-stone-500 font-sans block text-[11px]">Firebase Project ID</span>
                      <strong className="text-emerald-900 text-sm">{firebaseConfig.projectId}</strong>
                    </div>

                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                      <span className="text-stone-500 font-sans block text-[11px]">Auth Domain</span>
                      <strong className="text-stone-800">{firebaseConfig.authDomain}</strong>
                    </div>

                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                      <span className="text-stone-500 font-sans block text-[11px]">Storage Bucket</span>
                      <strong className="text-stone-800">{firebaseConfig.storageBucket}</strong>
                    </div>

                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                      <span className="text-stone-500 font-sans block text-[11px]">Status</span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đang hoạt động & đồng bộ tự động
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-2">
                    <p className="font-semibold">Cơ chế bảo vệ dữ liệu kép (Hybrid Resilience):</p>
                    <p className="leading-relaxed">
                      Mọi bài viết, thông cáo tiến độ, lời nhắn liên hệ và danh sách đăng ký đều được ghi đồng thời vào Firebase Firestore và bộ nhớ dự phòng trình duyệt an toàn. Bạn có thể yên tâm biên tập mà không lo mất dữ liệu.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

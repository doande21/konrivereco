import React, { useState, useEffect } from 'react';
import { Shield, LogOut } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageHome } from './components/PageHome';
import { PageDiscover } from './components/PageDiscover';
import { PageExperiences } from './components/PageExperiences';
import { PageRetreat } from './components/PageRetreat';
import { PageJourney } from './components/PageJourney';
import { PageJournal } from './components/PageJournal';
import { PageContact } from './components/PageContact';
import { AdminPortal } from './components/AdminPortal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('konriver_admin_session') === 'true';
  });
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Secret Listeners: Keyboard shortcut (Ctrl+Shift+A or Cmd+Shift+A) & URL Hash (#admin)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setAdminOpen(true);
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#quantri') {
        setAdminOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHashChange);

    // Initial hash check
    if (window.location.hash === '#admin' || window.location.hash === '#quantri') {
      setAdminOpen(true);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleAdminAuthChange = (status: boolean) => {
    setIsAdminLoggedIn(status);
    if (status) {
      localStorage.setItem('konriver_admin_session', 'true');
    } else {
      localStorage.removeItem('konriver_admin_session');
    }
  };

  const handleOpenArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentPage('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-stone-900 selection:bg-emerald-900 selection:text-white">
      {/* Top Bar Navigation (Hidden Admin Button) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <PageHome
            onNavigate={handleNavigate}
            onOpenArticleModal={handleOpenArticle}
          />
        )}
        {currentPage === 'discover' && (
          <PageDiscover onNavigate={handleNavigate} />
        )}
        {currentPage === 'experiences' && (
          <PageExperiences
            onNavigate={handleNavigate}
            onOpenArticleModal={handleOpenArticle}
          />
        )}
        {currentPage === 'retreat' && (
          <PageRetreat
            onNavigate={handleNavigate}
            onOpenArticleModal={handleOpenArticle}
          />
        )}
        {currentPage === 'journey' && (
          <PageJourney onNavigate={handleNavigate} />
        )}
        {currentPage === 'journal' && (
          <PageJournal
            selectedArticleId={selectedArticleId}
            onClearSelectedArticle={() => setSelectedArticleId(null)}
          />
        )}
        {currentPage === 'contact' && (
          <PageContact />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Secret Floating Admin Pill (Only visible when already authenticated as Admin) */}
      {isAdminLoggedIn && !adminOpen && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 p-1.5 bg-stone-900/90 text-white rounded-full border border-emerald-500/40 backdrop-blur-md shadow-none text-xs">
          <button
            onClick={() => setAdminOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1 bg-emerald-900/80 hover:bg-emerald-800 rounded-full font-medium cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mở Bảng Admin</span>
          </button>
          <button
            onClick={() => handleAdminAuthChange(false)}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full cursor-pointer"
            title="Đăng xuất quản trị"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Admin CMS Portal Modal */}
      <AdminPortal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        isAdminLoggedIn={isAdminLoggedIn}
        onSetAdminLoggedIn={handleAdminAuthChange}
        onDataUpdated={() => {
          setCurrentPage((prev) => prev);
        }}
      />
    </div>
  );
}

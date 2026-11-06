import React, { useState } from 'react';
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
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

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
      {/* Top Bar Contract Navigation */}
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

      {/* Admin CMS Portal Modal */}
      <AdminPortal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        isAdminLoggedIn={isAdminLoggedIn}
        onSetAdminLoggedIn={setIsAdminLoggedIn}
        onDataUpdated={() => {
          // Trigger re-render of current views if needed
          setCurrentPage((prev) => prev);
        }}
      />
    </div>
  );
}

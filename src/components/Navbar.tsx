import React, { useState } from 'react';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAdmin,
  isAdminLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'discover', label: 'Khám phá' },
    { id: 'experiences', label: 'Trải nghiệm' },
    { id: 'retreat', label: 'Khu nghỉ dưỡng' },
    { id: 'journey', label: 'Hành trình' },
    { id: 'journal', label: 'Cẩm nang' },
  ];

  const handlePageChange = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handlePageChange('home')}
            className="text-left group cursor-pointer focus:outline-none"
            title="Trang chủ Kon River Eco Retreat"
          >
            <span className="text-lg md:text-xl font-bold tracking-tight text-stone-900 group-hover:text-emerald-900 transition-colors uppercase font-serif whitespace-nowrap shrink-0 block">
              CHẠM VĨNH THẠNH
            </span>
            <span className="text-[10px] tracking-widest text-stone-600 block uppercase font-medium">
              Kon River Eco Retreat
            </span>
          </button>

          {/* Zone 2: 5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handlePageChange(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-emerald-900 font-semibold'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-800 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action button + subtle admin affordance */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmin}
              className={`p-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1.5 ${
                isAdminLoggedIn
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-stone-100 text-stone-600 border-stone-200 hover:text-stone-900 hover:bg-stone-200'
              }`}
              title="Quản trị nội dung & hình ảnh (Admin Firebase)"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">Admin</span>
            </button>

            <button
              onClick={() => handlePageChange('contact')}
              className="px-4 py-2 text-xs md:text-sm font-medium text-white bg-emerald-900 rounded-lg hover:bg-emerald-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
            >
              <span>Liên hệ & Kết nối</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 cursor-pointer"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handlePageChange(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => handlePageChange('contact')}
              className="w-full text-center py-2.5 bg-emerald-900 text-white rounded-lg text-sm font-medium cursor-pointer"
            >
              Liên hệ & Kết nối
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Clock, X, User } from 'lucide-react';
import { Article } from '../data/contentData';
import { getArticles } from '../services/dataService';

interface PageJournalProps {
  selectedArticleId?: string | null;
  onClearSelectedArticle?: () => void;
}

export const PageJournal: React.FC<PageJournalProps> = ({
  selectedArticleId,
  onClearSelectedArticle
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const [modalArticle, setModalArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      if (selectedArticleId) {
        const found = data.find((a) => a.id === selectedArticleId);
        if (found) setModalArticle(found);
      }
    });
  }, [selectedArticleId]);

  const categories = [
    'Tất cả',
    'Thiên nhiên',
    'Điểm đến',
    'Làng nghề',
    'Văn hóa',
    'Thiết kế & Văn hóa'
  ];

  const filteredArticles = activeCategory === 'Tất cả'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const handleOpenArticle = (article: Article) => {
    setModalArticle(article);
  };

  const handleCloseModal = () => {
    setModalArticle(null);
    if (onClearSelectedArticle) {
      onClearSelectedArticle();
    }
  };

  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-stone-900 text-stone-100 py-20 lg:py-24 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
            TRAVEL JOURNAL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            Những câu chuyện từ Vĩnh Thạnh
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Mỗi hành trình có thể bắt đầu từ một câu hỏi, một bức ảnh hay một câu chuyện nhỏ. Cùng Kon River tìm hiểu thêm về cảnh quan, nghề truyền thống và di sản văn hóa của Vĩnh Thạnh qua những nội dung được chọn lọc và cập nhật.
          </p>
        </div>
      </section>

      {/* FILTER & ARTICLE GRID */}
      <section className="py-16 lg:py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Controls */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-900 text-white'
                      : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-stone-400 transition-colors"
              >
                <div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-52 object-cover border-b border-stone-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-semibold text-emerald-800">{article.category}</span>
                      <span className="flex items-center gap-1 tabular-nums">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold font-serif text-stone-900 leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4 text-xs">
                  <span className="text-stone-500 tabular-nums">{article.publishedAt}</span>
                  <button
                    onClick={() => handleOpenArticle(article)}
                    className="font-semibold text-emerald-900 hover:text-emerald-950 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Đọc chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Editorial Note */}
          <div className="p-6 bg-white border border-stone-200 rounded-xl max-w-3xl mx-auto text-xs text-stone-500 text-center leading-relaxed">
            Để nhóm triển khai nhanh, sáu đoạn trên có thể dùng ngay làm mô tả thẻ bài viết (article excerpts). Nội dung bài viết dài cần được biên tập thêm với tư liệu cụ thể và xác minh từ địa phương trước khi xuất bản.
          </div>

        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {modalArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-2xl max-h-[90vh] flex flex-col overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-stone-50">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <BookOpen className="w-4 h-4" />
                <span>{modalArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-500 font-normal">{modalArticle.readTime}</span>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 cursor-pointer"
                aria-label="Đóng bài viết"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
                {modalArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-stone-500 pb-4 border-b border-stone-200">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  {modalArticle.author}
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">Ngày đăng: {modalArticle.publishedAt}</span>
              </div>

              {/* Original image without drop-shadow */}
              <div className="border border-stone-200 rounded-xl overflow-hidden bg-stone-100 p-1">
                <img
                  src={modalArticle.image}
                  alt={modalArticle.title}
                  className="w-full h-72 sm:h-80 object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-stone-50 border-l-2 border-emerald-800 text-sm text-stone-700 leading-relaxed font-medium">
                {modalArticle.excerpt}
              </div>

              <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                {modalArticle.content}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg cursor-pointer"
              >
                Đóng bài đọc
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronUp, Bell, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ProjectUpdate, INITIAL_FAQS } from '../data/contentData';
import { getProjectUpdates } from '../services/dataService';

interface PageJourneyProps {
  onNavigate: (page: string) => void;
}

export const PageJourney: React.FC<PageJourneyProps> = ({ onNavigate }) => {
  const [updates, setUpdates] = useState<ProjectUpdate[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    getProjectUpdates().then(setUpdates);
  }, []);

  const timelineMilestones = [
    {
      period: '09/2026',
      title: 'Khởi công dự kiến',
      desc: 'Mốc khởi công dự kiến theo kế hoạch ban đầu, chuẩn bị mặt bằng và phương án kiến trúc sinh thái.',
      status: 'upcoming'
    },
    {
      period: '10/2026 – 03/2027',
      title: 'Phát triển & chuẩn bị truyền thông',
      desc: 'Giai đoạn phát triển xây dựng và chuẩn bị truyền thông theo kế hoạch, kết nối với làng nghề địa phương.',
      status: 'planned'
    },
    {
      period: '04 – 06/2027',
      title: 'Chiến dịch "Chạm Vĩnh Thạnh"',
      desc: 'Dự kiến triển khai các hoạt động truyền thông khám phá thiên nhiên, làng nghề và văn hóa bản địa.',
      status: 'planned'
    },
    {
      period: '07/2027',
      title: 'Khai trương dự kiến',
      desc: 'Mốc khai trương dự kiến theo kế hoạch ban đầu, phụ thuộc tiến độ thi công và điều kiện vận hành thực tế.',
      status: 'planned'
    },
    {
      period: 'Sau khai trương',
      title: 'Vận hành trải nghiệm thực tế',
      desc: 'Cập nhật thông tin dịch vụ, đón tiếp khách lưu trú và các tour trải nghiệm bản địa thực tế khi có xác nhận.',
      status: 'future'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO */}
      <section className="bg-stone-900 text-stone-100 py-20 lg:py-24 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
            PROJECT JOURNEY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            Từng bước hình thành một điểm đến mới
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Mỗi công trình đều bắt đầu từ một ý tưởng. Với Kon River Eco Retreat, ý tưởng ấy là xây dựng một không gian nghỉ dưỡng sinh thái có sự kết nối với thiên nhiên và bản sắc văn hóa Vĩnh Thạnh.
          </p>
          <p className="text-stone-400 text-sm">
            Tại đây, bạn có thể theo dõi những thông tin được xác nhận về quá trình phát triển dự án, từ định hướng ban đầu đến những cột mốc tiếp theo.
          </p>
        </div>
      </section>

      {/* SECTION 2: CÁC CỘT MỐC PHÁT TRIỂN */}
      <section className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              LỘ TRÌNH DỰ KIẾN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Các cột mốc phát triển dự án
            </h2>
          </div>

          {/* Timeline Table / Cards */}
          <div className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50">
            <div className="hidden md:grid grid-cols-12 bg-stone-100 px-6 py-4 border-b border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700">
              <div className="col-span-3">Giai đoạn</div>
              <div className="col-span-4">Cột mốc dự kiến</div>
              <div className="col-span-5">Nội dung chi tiết</div>
            </div>

            <div className="divide-y divide-stone-200">
              {timelineMilestones.map((m, idx) => (
                <div key={idx} className="p-6 md:grid md:grid-cols-12 gap-4 items-center bg-white hover:bg-stone-50 transition-colors">
                  <div className="col-span-3 mb-2 md:mb-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded-md text-xs font-semibold text-stone-800 tabular-nums">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      {m.period}
                    </span>
                  </div>
                  <div className="col-span-4 mb-2 md:mb-0">
                    <h3 className="text-base font-bold text-stone-900 font-serif">
                      {m.title}
                    </h3>
                  </div>
                  <div className="col-span-5 text-xs text-stone-600 leading-relaxed">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dòng lưu ý bắt buộc dưới timeline */}
          <div className="p-5 bg-stone-100 border border-stone-200 rounded-xl text-center">
            <p className="text-xs text-stone-600 font-medium leading-relaxed">
              Các mốc trên thể hiện kế hoạch dự kiến. Tiến độ thi công và khai trương chính thức sẽ được thông báo dựa trên xác nhận từ chủ đầu tư.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: TIN TỨC VÀ CẬP NHẬT */}
      <section className="py-20 lg:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
                THÔNG CÁO CHÍNH THỨC
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                Thông tin mới nhất từ Kon River
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Khu vực dành cho những thông báo được doanh nghiệp phê duyệt: cập nhật tiến độ, hình ảnh thi công thực tế và những thông tin chuẩn bị cho giai đoạn vận hành.
              </p>
            </div>

            <button
              onClick={() => onNavigate('home')}
              className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold cursor-pointer shrink-0 flex items-center gap-2 self-start md:self-auto"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Nhận thông báo mới</span>
            </button>
          </div>

          {/* News Cards */}
          {updates.length === 0 ? (
            <div className="p-12 text-center bg-white border border-stone-200 rounded-xl">
              <p className="text-stone-500 text-sm">
                Các cập nhật chính thức về Kon River Eco Retreat sẽ được đăng tải tại đây khi có thông tin xác nhận từ chủ đầu tư.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {updates.map((item) => (
                <div key={item.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between">
                  <div>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover border-b border-stone-100"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="tabular-nums font-medium">{item.date}</span>
                        {item.isOfficial && (
                          <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold text-[11px]">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                            Đã phê duyệt
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold font-serif text-stone-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {item.summary}
                      </p>
                      <p className="text-xs text-stone-500 pt-2 border-t border-stone-100 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0 text-[11px] text-stone-400">
                    Phân loại: {item.category}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4: CÂU HỎI THƯỜNG GẶP (FAQ) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              HỎI ĐÁP MINH BẠCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Câu hỏi thường gặp (FAQ)
            </h2>
            <p className="text-stone-600 text-sm">
              Những thắc mắc phổ biến về vị trí, tiến độ, tiện ích và kế hoạch của Kon River Eco Retreat.
            </p>
          </div>

          <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
            {INITIAL_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-base font-semibold text-stone-900 font-serif">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-md text-stone-500 hover:text-stone-900 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-sm text-stone-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl text-center space-y-3">
            <p className="text-xs text-stone-600">
              Bạn vẫn còn câu hỏi khác về dự án hoặc các cơ hội hợp tác địa phương?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Gửi câu hỏi tới đội ngũ dự án
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

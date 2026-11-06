import React from 'react';
import { ArrowRight, Trees, Sparkles, Compass, CheckCircle2, AlertCircle } from 'lucide-react';

interface PageExperiencesProps {
  onNavigate: (page: string) => void;
  onOpenArticleModal?: (articleId: string) => void;
}

export const PageExperiences: React.FC<PageExperiencesProps> = ({ onNavigate, onOpenArticleModal }) => {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-stone-900 text-stone-100 py-20 lg:py-24 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
            LOCAL EXPERIENCES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-white tracking-tight">
            Ba cách chạm, một hành trình khám phá
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Mỗi vùng đất có một cách kể chuyện riêng. Với Vĩnh Thạnh, câu chuyện ấy được thể hiện qua vẻ đẹp thiên nhiên, sự bền bỉ của những nghề truyền thống và di sản văn hóa bản địa.
          </p>
          <p className="text-emerald-300 font-medium text-sm">
            Hãy bắt đầu với điều khiến bạn tò mò nhất.
          </p>
        </div>
      </section>

      {/* TRẢI NGHIỆM 1 – CHẠM THIÊN NHIÊN */}
      <section id="nature" className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="border border-stone-200 bg-stone-100 p-2 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/kon_river_landscape_1793979505469.jpg";
                  }}
                  alt="Chạm Thiên Nhiên Vĩnh Thạnh"
                  className="w-full h-[380px] object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <p className="mt-2 text-xs text-stone-500 px-1">
                  Cảnh sắc sông Kôn uốn lượn giữa núi rừng
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                <Trees className="w-4 h-4 text-emerald-700" />
                <span>Trải nghiệm 1</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold  text-stone-900 leading-snug">
                Chạm vào khoảng xanh, tìm lại những phút giây bình yên
              </h2>

              <div className="text-stone-600 text-base leading-relaxed space-y-4">
                <p>
                  Có những khoảnh khắc đáng nhớ không đến từ lịch trình dày đặc, mà từ việc dành thời gian quan sát và cảm nhận thiên nhiên.
                </p>
                <p>
                  Đó có thể là khung cảnh dòng sông Kôn, khoảng trời rộng bên hồ Định Bình hay những nét hoang sơ của các điểm đến tự nhiên trong vùng.
                </p>
                <p>
                  Hành trình Chạm Thiên Nhiên mời bạn khám phá Vĩnh Thạnh bằng sự tò mò và một nhịp điệu thư thả hơn.
                </p>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
                <span className="text-xs uppercase tracking-wider text-stone-700 font-semibold block">
                  Khám phá trong hành trình:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Cảnh quan ven sông Kôn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Hồ Định Bình mênh mông</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Suối Tà Má mát trong</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Các điểm đến thiên nhiên phù hợp điều kiện</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  onClick={() => onOpenArticleModal ? onOpenArticleModal('art-1') : onNavigate('journal')}
                  className="px-6 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Tìm hiểu những điểm đến thiên nhiên</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRẢI NGHIỆM 2 – CHẠM LÀNG NGHỀ */}
      <section id="craft" className="py-20 lg:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-800 font-semibold">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Trải nghiệm 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold  text-stone-900">
              Có những giá trị được tạo nên từ đôi bàn tay
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Một sản phẩm truyền thống không chỉ là thành quả của nguyên liệu và kỹ thuật. Đằng sau đó còn là kinh nghiệm, sự kiên nhẫn và những câu chuyện được trao truyền qua thời gian. Vĩnh Thạnh được định hướng giới thiệu thông qua các hoạt động tìm hiểu nghề làm bánh tráng và nghề nấu rượu truyền thống.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Câu chuyện 01: Nghề làm bánh tráng */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/traditional_rice_paper_1793979507277.jpg";
                  }}
                  alt="Nghề làm bánh tráng truyền thống"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold block">
                    Câu chuyện 01
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 tracking-tight">
  Nghề làm bánh tráng
</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Từ những công đoạn chế biến nguyên liệu đến việc tráng và phơi bánh, nghề làm bánh tráng cho thấy sự khéo léo và kinh nghiệm tích lũy của người làm nghề. Mỗi công đoạn có thể trở thành một lát cắt giàu hình ảnh để giới thiệu giá trị của lao động thủ công.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onOpenArticleModal ? onOpenArticleModal('art-3') : onNavigate('journal')}
                  className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Đọc ký sự nghề bánh tráng</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Câu chuyện 02: Nghề nấu rượu truyền thống */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-full h-64 bg-stone-200 flex items-center justify-center p-8 text-center text-stone-600">
                  <div className="space-y-2">
                    <Sparkles className="w-8 h-8 text-amber-800 mx-auto" />
                    <p className="text-sm font-semibold text-stone-800">Nghệ thuật chưng cất dân gian</p>
                    <p className="text-xs text-stone-500">Chắt lọc hương thơm thảo mộc và nguồn nước ngọt mát</p>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold block">
                    Câu chuyện 02
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 tracking-tight">
  Nghề nấu rượu truyền thống
</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Nghề nấu rượu là một chủ đề để tìm hiểu phương pháp sản xuất, kinh nghiệm và câu chuyện gắn với sản vật địa phương. Nội dung website tập trung vào giá trị văn hóa và quy trình làm nghề, thay vì khuyến khích tiêu thụ đồ uống có cồn.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onOpenArticleModal ? onOpenArticleModal('art-4') : onNavigate('journal')}
                  className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Đọc ký sự nghề nấu rượu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('journal')}
              className="px-6 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Xem những câu chuyện làng nghề</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* TRẢI NGHIỆM 3 – CHẠM VĂN HÓA */}
      <section id="culture" className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="border border-stone-200 bg-stone-100 p-2 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/bana_rong_culture_1793979506607.jpg";
                  }}
                  alt="Dệt thổ cẩm Hà Ri và nhà Rông Ba Na"
                  className="w-full h-[400px] object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <p className="mt-2 text-xs text-stone-500 px-1">
                  Khung cửi dệt thổ cẩm Hà Ri và kiến trúc nhà Rông truyền thống
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>Trải nghiệm 3</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug tracking-tight">
  Chạm vào hoa văn, lắng nghe câu chuyện văn hóa
</h2>

              <div className="text-stone-600 text-base leading-relaxed space-y-4">
                <p>
                  Mỗi hoa văn, chất liệu và hình thức kiến trúc truyền thống đều có thể gợi mở những câu chuyện về đời sống và bản sắc cộng đồng.
                </p>
                <p>
                  Hành trình Chạm Văn Hóa hướng người xem đến việc tìm hiểu nghệ thuật dệt thổ cẩm làng Hà Ri, kiến trúc nhà Rông và các giá trị văn hóa gắn với cộng đồng Ba Na.
                </p>
                <p>
                  Đây không chỉ là nguồn cảm hứng trong định hướng thiết kế Kon River Eco Retreat, mà còn là một phần quan trọng trong câu chuyện về vùng đất Vĩnh Thạnh.
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600 leading-relaxed">
                Hoạt động truyền thông sẽ ưu tiên tư liệu chính xác, sự tham gia phù hợp của người đại diện cộng đồng và cách kể chuyện tôn trọng văn hóa bản địa.
              </div>

              <div>
                <button
                  onClick={() => onOpenArticleModal ? onOpenArticleModal('art-5') : onNavigate('journal')}
                  className="px-6 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Tìm hiểu văn hóa Ba Na</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION CUỐI – KHÁM PHÁ THEO CÁCH CỦA BẠN */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
  Bạn muốn bắt đầu bằng trải nghiệm nào?
</h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto">
            Thiên nhiên, làng nghề hay văn hóa — mỗi lựa chọn mở ra một câu chuyện khác nhau. Không có một cách duy nhất để cảm nhận một vùng đất. Hãy chọn điều khiến bạn tò mò, tìm hiểu những câu chuyện phía sau và để Vĩnh Thạnh trở nên gần gũi hơn qua từng khám phá.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              Bắt đầu hành trình Chạm Vĩnh Thạnh
            </button>
          </div>

          <div className="mt-8 p-4 bg-white border border-stone-200 rounded-xl max-w-2xl mx-auto flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
            <p className="text-xs text-stone-500 leading-relaxed">
              Các nội dung trên giới thiệu chủ đề khám phá điểm đến, không phải danh mục tour đã được Kon River mở bán. Các hoạt động thực tế cần được xác nhận với đối tác địa phương trước khi công bố lịch trình hoặc giá.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

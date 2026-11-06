import React from 'react';
import { ArrowRight, Waves, Mountain, Compass, ShieldAlert } from 'lucide-react';

interface PageDiscoverProps {
  onNavigate: (page: string) => void;
}

export const PageDiscover: React.FC<PageDiscoverProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="relative bg-stone-900 text-stone-100 py-20 lg:py-28 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
                DISCOVER VINH THANH
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-white tracking-tight leading-tight">
                Vĩnh Thạnh – Nơi thiên nhiên và văn hóa cùng kể chuyện
              </h1>
              <div className="text-stone-300 text-base sm:text-lg leading-relaxed space-y-4 max-w-2xl font-normal">
                <p>
                  Giữa không gian núi rừng và những dòng chảy tự nhiên, Vĩnh Thạnh mang đến những góc nhìn khác về hành trình khám phá một vùng đất.
                </p>
                <p>
                  Ở đây, thiên nhiên hiện diện trong cảnh quan sông, suối, hồ và núi rừng. Những nghề thủ công, câu chuyện cộng đồng và giá trị văn hóa bản địa góp phần tạo nên chiều sâu cho trải nghiệm.
                </p>
                <p className="text-emerald-300 font-medium">
                  Khám phá Vĩnh Thạnh không chỉ là đi đến một nơi mới, mà còn là tìm hiểu điều gì khiến nơi ấy trở nên riêng biệt.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-stone-800 bg-stone-950 p-2 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/kon_river_landscape_1793979505469.jpg";
                  }}
                  alt="Thiên nhiên Vĩnh Thạnh Bình Định"
                  className="w-full h-[360px] lg:h-[420px] object-cover rounded-lg"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-xs text-stone-400 flex justify-between">
                  <span>Vùng trung du & núi rừng Vĩnh Thạnh</span>
                  <span className="text-stone-500">Bình Định</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: THIÊN NHIÊN VĨNH THẠNH */}
      <section className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              CẢNH SẮC NGUYÊN SƠ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-stone-900">
              Đi theo dòng nước, khám phá những khoảng xanh
            </h2>
            <p className="text-stone-600 text-base">
              Hệ thống thủy văn và địa hình núi đồi trùng điệp tạo nên một không gian thiên nhiên trong lành, thanh bình và giàu sức sống.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Sông Kôn */}
            <div className="border border-stone-200 rounded-xl p-8 bg-stone-50 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold uppercase">Điểm nhấn số 01</span>
                    <h3 className="text-xl font-bold text-stone-900 tracking-tight">
  Sông Kôn – Dòng chảy kết nối vùng đất
</h3>
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/kon_river_landscape_1793979505469.jpg";
                  }}
                  alt="Dòng sông Kôn kết nối Vĩnh Thạnh"
                  className="w-full h-56 object-cover rounded-lg border border-stone-200"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <p className="text-sm text-stone-600 leading-relaxed">
                  Sông Kôn là một phần quan trọng trong cảnh quan tự nhiên gắn với tên gọi Kon River Eco Retreat. Hình ảnh dòng sông tạo cảm hứng cho một không gian nghỉ dưỡng hướng về thiên nhiên, đồng thời mở đầu câu chuyện khám phá Vĩnh Thạnh.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs text-emerald-950 font-medium">
                Thông điệp: Lắng nghe nhịp chảy của thiên nhiên.
              </div>
            </div>

            {/* 2. Hồ Định Bình */}
            <div className="border border-stone-200 rounded-xl p-8 bg-stone-50 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Mountain className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold uppercase">Điểm nhấn số 02</span>
                    <h3 className="text-xl font-bold  text-stone-900">
                      Hồ Định Bình – Khoảng xanh giữa núi rừng
                    </h3>
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/dinh_binh_lake_1793979505731.jpg";
                  }}
                  alt="Hồ Định Bình Vĩnh Thạnh"
                  className="w-full h-56 object-cover rounded-lg border border-stone-200"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <p className="text-sm text-stone-600 leading-relaxed">
                  Hồ Định Bình là một địa danh thiên nhiên được đề cập trong định hướng giới thiệu điểm đến của dự án. Cảnh quan mặt nước và núi rừng tạo thêm một góc khám phá dành cho những người yêu thiên nhiên và thích tìm hiểu vùng đất mới.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs text-emerald-950 font-medium">
                Thông điệp: Tìm một khoảng lặng giữa trời và nước.
              </div>
            </div>

            {/* 3. Suối Tà Má */}
            <div className="border border-stone-200 rounded-xl p-8 bg-stone-50 space-y-4">
              <span className="text-xs text-stone-500 font-semibold uppercase">Điểm đến sinh thái</span>
              <h3 className="text-xl font-bold text-stone-900 tracking-tight">
  Suối Tà Má – Vẻ đẹp gần gũi thiên nhiên
</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Trong câu chuyện về Vĩnh Thạnh, suối Tà Má là một trong những địa danh được lựa chọn để gợi mở trải nghiệm khám phá cảnh quan địa phương. Nước suối trong vắt len lỏi qua các ghềnh đá, bao quanh bởi rừng cây râm mát bốn mùa.
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                Du khách quan tâm đến thiên nhiên có thể tìm hiểu thêm về đặc điểm điểm đến, tuyến đường và các điều kiện tham quan trước khi lên kế hoạch.
              </p>
            </div>

            {/* 4. Thác Hang Dơi & Nguồn nước nóng */}
            <div className="border border-stone-200 rounded-xl p-8 bg-stone-50 space-y-4">
              <span className="text-xs text-stone-500 font-semibold uppercase">Điểm đến lân cận</span>
              <h3 className="text-xl font-bold  text-stone-900">
                Thác Hang Dơi và những điểm đến thiên nhiên lân cận
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Ngoài sông và hồ, khu vực còn được giới thiệu với những địa danh thác nước hùng vĩ và các nguồn suối khoáng nước nóng trong định hướng phát triển trải nghiệm của dự án.
              </p>
              <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  Các điểm đến này gợi mở những hành trình tìm hiểu thiên nhiên phong phú hơn, nhưng việc tham quan thực tế cần được kiểm tra theo điều kiện tiếp cận, an toàn và tổ chức tại địa phương.
                </span>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('journal')}
              className="px-6 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Khám phá thêm những câu chuyện thiên nhiên</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION: CON NGƯỜI VÀ VĂN HÓA */}
      <section className="py-20 lg:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="border border-stone-200 bg-white p-2 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/bana_rong_culture_1793979506607.jpg";
                  }}
                  alt="Văn hóa Ba Na tại Vĩnh Thạnh"
                  className="w-full h-[400px] object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-xs text-stone-500 flex justify-between">
                  <span>Cộng đồng Ba Na — Vĩnh Thạnh</span>
                  <span>Bảo tồn di sản</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                <Compass className="w-4 h-4" />
                <span>BẢN SẮC CỘNG ĐỒNG</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug tracking-tight">
  Một vùng đất được gìn giữ qua những câu chuyện
</h2>

              <div className="text-stone-600 text-base leading-relaxed space-y-4">
                <p>
                  Bên cạnh cảnh sắc thiên nhiên, Vĩnh Thạnh còn mang dấu ấn của cộng đồng và những giá trị văn hóa được lưu truyền qua nhiều thế hệ.
                </p>
                <p>
                  Văn hóa Ba Na là một phần trong bản sắc địa phương, thể hiện qua những hình thức sinh hoạt cộng đồng, nghề thủ công, nghệ thuật tạo hoa văn và kiến trúc truyền thống.
                </p>
                <p>
                  Trong hành trình khám phá Vĩnh Thạnh, tìm hiểu văn hóa không chỉ là quan sát những hình ảnh đẹp, mà còn là lắng nghe câu chuyện của người gìn giữ và thực hành các giá trị ấy.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('experiences')}
                  className="px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Khám phá văn hóa bản địa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LỜI KẾT CỦA TRANG */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
  Vĩnh Thạnh không chỉ có một điều để nhớ.
</h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto">
            Có người nhớ về dòng sông, có người ấn tượng với những sản phẩm thủ công, cũng có người muốn tìm hiểu sâu hơn về văn hóa địa phương. Và chính sự đa dạng ấy tạo nên tinh thần của hành trình:
          </p>
          <p className="text-base sm:text-lg md:text-xl text-emerald-900 font-medium">
  Nghỉ một nơi, cảm nhận cả một vùng đất.
</p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('experiences')}
              className="px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              Xem các trải nghiệm bản địa
            </button>
            <button
              onClick={() => onNavigate('retreat')}
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              Khu nghỉ dưỡng Kon River
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

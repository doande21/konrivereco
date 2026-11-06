import React from 'react';
import { ArrowRight, Trees, Users, Home, Layers, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

interface PageRetreatProps {
  onNavigate: (page: string) => void;
  onOpenArticleModal?: (articleId: string) => void;
}

export const PageRetreat: React.FC<PageRetreatProps> = ({ onNavigate, onOpenArticleModal }) => {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="bg-stone-900 text-stone-100 py-20 lg:py-28 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
                THE RETREAT — KON RIVER ECO RETREAT
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
  Một chốn nghỉ ven sông, kết nối cùng bản sắc vùng đất
</h1>
              <div className="text-stone-300 text-base sm:text-lg leading-relaxed space-y-4 max-w-2xl font-normal">
                <p>
                  Kon River Eco Retreat là dự án khu du lịch nghỉ dưỡng ven sông Kôn do Tân Tiến Phát phát triển, được định hướng kết hợp không gian nghỉ dưỡng sinh thái với các hoạt động khám phá thiên nhiên và văn hóa địa phương.
                </p>
                <p>
                  Với quy hoạch gần 2 ha và hai phân khu chức năng, dự án hướng đến những trải nghiệm vừa riêng tư, thư thái, vừa có cơ hội kết nối với các hoạt động cộng đồng và điểm đến lân cận.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#zones"
                  className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Khám phá quy hoạch dự án</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-stone-800 bg-stone-950 p-2 rounded-xl">
                <img
                  src="https://i.postimg.cc/hGyTw6hd/IMG-8809.jpg"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/IMG-8809.jpg";
                  }}
                  alt="Kon River Eco Retreat ven sông Kôn"
                  className="w-full h-[380px] object-cover rounded-lg"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 text-xs text-stone-400 flex justify-between">
                  <span>Toàn cảnh bungalow sinh thái</span>
                  <span className="text-stone-500">Quy hoạch ~2 ha</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRIẾT LÝ PHÁT TRIỂN */}
      <section className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
            TRIẾT LÝ PHÁT TRIỂN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
  Nghỉ dưỡng không tách rời vùng đất
</h2>
          <div className="text-stone-600 text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl mx-auto font-normal">
            <p>
              Kon River được phát triển từ ý tưởng rằng một chuyến nghỉ dưỡng có thể trở nên ý nghĩa hơn khi du khách hiểu và kết nối với nơi mình đến.
            </p>
            <p>
              Bên cạnh những không gian nghỉ ngơi dự kiến, dự án hướng đến việc giới thiệu cảnh quan Vĩnh Thạnh, nghề thủ công truyền thống, sản phẩm địa phương và các giá trị văn hóa bản địa.
            </p>
          </div>
          <div className="pt-4">
            <p className="text-xl sm:text-2xl text-emerald-900 font-bold tracking-tight">
  Một nơi để nghỉ. Một vùng đất để cảm nhận.
</p>
          </div>
        </div>
      </section>

      {/* HAI KHÔNG GIAN, MỘT TRẢI NGHIỆM */}
      <section id="zones" className="py-20 lg:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              QUY HOẠCH GẦN 2 HA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-stone-900">
              Hai không gian, một trải nghiệm
            </h2>
            <p className="text-stone-600 text-base">
              Hai phân khu chức năng được thiết kế bổ trợ hài hòa giữa nhịp sống sôi nổi kết nối cộng đồng và những khoảng lặng riêng tư tĩnh tại.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Phân khu A */}
            <div className="bg-white border border-stone-200 rounded-xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold block">
                      Phân khu A
                    </span>
                    <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
  Khu A – Gặp gỡ và kết nối
</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Theo quy hoạch, Khu A dự kiến bao gồm trung tâm tổ chức sự kiện và tiệc cưới sức chứa khoảng 800 khách, hồ bơi cộng đồng, khu thể thao, quán cà phê và không gian giới thiệu sản phẩm OCOP.
                </p>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-semibold block">
                    Tiện ích quy hoạch dự kiến:
                  </span>
                  <div className="space-y-2 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Trung tâm tổ chức sự kiện & tiệc cưới (~800 khách)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Hồ bơi cộng đồng ngoài trời</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Sân thể thao pickleball & bóng chuyền</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Quán cà phê ven sông ngắm cảnh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Không gian trưng bày & giới thiệu sản phẩm OCOP Bình Định</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-500 pt-4 border-t border-stone-100">
                Khu vực hướng đến các hoạt động giao lưu, giải trí và kết nối với các sản vật địa phương.
              </p>
            </div>

            {/* Phân khu B */}
            <div className="bg-white border border-stone-200 rounded-xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold block">
                      Phân khu B
                    </span>
                    <h3 className="text-2xl font-bold  text-stone-900">
                      Khu B – Riêng tư và thư thái
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  Khu B dự kiến có 10 bungalow, mỗi bungalow gồm hai phòng ngủ cùng hồ bơi mini riêng. Không gian được định hướng phù hợp với những chuyến nghỉ ngơi cùng gia đình hoặc nhóm nhỏ, chú trọng sự riêng tư và kết nối với cảnh quan thiên nhiên.
                </p>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-stone-800 font-semibold block">
                    Đặc điểm thiết kế bungalow:
                  </span>
                  <div className="space-y-2 text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Số lượng giới hạn: 10 bungalow biệt lập</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Cấu trúc 02 phòng ngủ rộng thoáng, đón gió trời</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Hồ bơi mini riêng biệt từng căn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Hiên tắm nắng hướng nhìn ra khoảng xanh hoặc bờ sông</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Nội thất tinh giản sử dụng gỗ, mây tre tự nhiên</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-500 pt-4 border-t border-stone-100">
                Thiết kế mang lại sự tĩnh tại, an yên cho những kỳ nghỉ dưỡng chất lượng.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* KIẾN TRÚC MANG CẢM HỨNG BẢN ĐỊA */}
      <section className="py-20 lg:py-24 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="border border-stone-200 bg-stone-100 p-2 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/bana_rong_culture_1793979506607.jpg";
                  }}
                  alt="Kiến trúc nhà Rông cảm hứng thiết kế Kon River"
                  className="w-full h-[400px] object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <p className="mt-2 text-xs text-stone-500 px-1">
                  Kiến trúc nhà Rông truyền thống của đồng bào Ba Na
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>NGÔN NGỮ THIẾT KẾ</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug tracking-tight">
  Cảm hứng từ kiến trúc và chất liệu địa phương
</h2>

              <div className="text-stone-600 text-base leading-relaxed space-y-4">
                <p>
                  Thiết kế Kon River hướng đến việc sử dụng các chất liệu tự nhiên và khai thác cảm hứng từ kiến trúc nhà Rông truyền thống của người Ba Na.
                </p>
                <p>
                  Sự kết hợp này nhằm tạo nên một ngôn ngữ kiến trúc có mối liên hệ với bối cảnh văn hóa và thiên nhiên của Vĩnh Thạnh, đồng thời đáp ứng định hướng nghỉ dưỡng sinh thái của dự án.
                </p>
                <p>
                  Mái vút cao thanh thoát, cột gỗ tự nhiên và đá thô mộc hòa quyện trong tổng thể cảnh quan bờ sông Kôn, mang lại trải nghiệm vừa quen vừa mới cho du khách.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onOpenArticleModal ? onOpenArticleModal('art-6') : onNavigate('journal')}
                  className="px-6 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Tìm hiểu câu chuyện thiết kế</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRẢI NGHIỆM VƯỢT RA NGOÀI KHU NGHỈ DƯỠNG */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
            KẾT NỐI ĐỊA PHƯƠNG
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold  text-stone-900">
            Từ Kon River, mở ra hành trình khám phá Vĩnh Thạnh
          </h2>
          <p className="text-stone-600 text-base leading-relaxed max-w-2xl mx-auto">
            Không dừng lại ở các không gian bên trong dự án, Kon River hướng đến việc kết nối du khách với những câu chuyện và trải nghiệm địa phương: nghề làm bánh tráng, nghề nấu rượu truyền thống, nghệ thuật dệt thổ cẩm Ba Na và khám phá những cảnh quan thiên nhiên lân cận.
          </p>
          <p className="text-xs text-stone-500 max-w-xl mx-auto">
            Việc tổ chức những trải nghiệm này trong tương lai sẽ phụ thuộc vào điều kiện thực tế và sự phối hợp với các đối tác địa phương.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('experiences')}
              className="px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Khám phá trải nghiệm bản địa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* TRẠNG THÁI DỰ ÁN */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-stone-100 border border-stone-200 rounded-2xl space-y-5">
            <div className="flex items-center gap-2 text-stone-800 text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-stone-600" />
              <span>Thông tin minh bạch dự án</span>
            </div>
            <h3 className="text-xl font-bold  text-stone-900">
              Kon River Eco Retreat đang trong quá trình phát triển.
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Những hình ảnh phối cảnh, quy hoạch tiện ích và định hướng trải nghiệm trên website nhằm giới thiệu tầm nhìn của dự án. Thông tin chính thức về tình trạng hoàn thiện, lịch khai trương, giá dịch vụ và khả năng nhận đặt phòng sẽ được cập nhật khi có xác nhận từ chủ đầu tư Tân Tiến Phát.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('journey')}
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                Theo dõi tiến độ dự án
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

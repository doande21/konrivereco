import React, { useState } from 'react';
import { ArrowRight, Trees, Sparkles, Compass, CheckCircle2, Play, Calendar, Users, Home } from 'lucide-react';
import { registerSubscriber } from '../services/dataService';

interface PageHomeProps {
  onNavigate: (page: string) => void;
  onOpenArticleModal?: (articleId: string) => void;
}

export const PageHome: React.FC<PageHomeProps> = ({ onNavigate }) => {
  // Newsletter Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    if (!consent) {
      setErrorMessage('Vui lòng đồng ý với điều khoản nhận thông tin cập nhật.');
      return;
    }

    setIsSubmitting(true);
    try {
      await registerSubscriber({
        fullName: fullName.trim(),
        email: email.trim(),
        consent: true
      });
      setSubmittedSuccess(true);
      setFullName('');
      setEmail('');
      setConsent(false);
    } catch {
      setErrorMessage('Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO BANNER – Lời mời chạm vào Vĩnh Thạnh */}
      <section className="relative w-full bg-stone-900 text-stone-100 overflow-hidden">
        {/* Full visual position with IMG-8809 */}
        <div className="relative w-full min-h-[500px] lg:min-h-[620px] flex items-center justify-center">
          <img
            src="https://i.postimg.cc/hGyTw6hd/IMG-8809.jpg"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/assets/IMG-8809.jpg";
            }}
            alt="Toàn cảnh Kon River Eco Retreat ven sông Kôn"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle measured scrim for contrast and legibility */}
          <div className="absolute inset-0 bg-stone-950/45 backdrop-brightness-95" />

          {/* Centered compact title & tagline */}
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 py-16">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-emerald-300 font-semibold px-3 py-1 bg-black/40 backdrop-blur-sm rounded border border-white/15">
              <span>Vĩnh Thạnh, Bình Định</span>
              <span aria-hidden="true">·</span>
              <span>Sinh Thái Ven Sông Kôn</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  text-white tracking-wider uppercase leading-snug text-balance">
              CHẠM VĨNH THẠNH — KON RIVER ECO RETREAT
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100 font-medium">
              Nghỉ một nơi, cảm nhận cả một vùng đất.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('discover')}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg font-medium text-xs sm:text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Khám phá Vĩnh Thạnh</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('retreat')}
                className="px-5 py-2.5 bg-stone-900/80 hover:bg-stone-900 text-stone-200 border border-white/20 rounded-lg font-medium text-xs sm:text-sm transition-colors cursor-pointer backdrop-blur-sm"
              >
                Tìm hiểu Kon River
              </button>
            </div>
          </div>
        </div>

        {/* Narrative Intro directly below full hero */}
        <div className="bg-stone-900 border-t border-stone-800 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
              Có những chuyến đi không chỉ để tìm một nơi nghỉ ngơi, mà còn để lắng nghe câu chuyện của vùng đất mình đặt chân đến.
            </p>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
              Bên dòng sông Kôn, Vĩnh Thạnh mở ra một hành trình của thiên nhiên, làng nghề và những giá trị văn hóa bản địa. Từ cảm hứng ấy, Kon River Eco Retreat được phát triển với mong muốn trở thành điểm kết nối giữa không gian nghỉ dưỡng sinh thái và những trải nghiệm mang dấu ấn địa phương.
            </p>
            <p className="font-semibold text-emerald-300 text-sm sm:text-base pt-2">
              Một nơi để nghỉ. Một vùng đất để khám phá.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DISCOVER VINH THANH – Một vùng đất, nhiều điều để cảm nhận */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="border border-stone-200 bg-stone-100 p-2 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/dinh_binh_lake_1793979505731.jpg";
                  }}
                  alt="Hồ Định Bình giữa núi rừng Vĩnh Thạnh"
                  className="w-full h-[380px] object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <p className="mt-2 text-xs text-stone-500 px-1">
                  Khoảng lặng giữa trời và nước tại Hồ Định Bình
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
                DISCOVER VINH THANH
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-stone-900 leading-snug">
                Có một Vĩnh Thạnh đang chờ bạn khám phá
              </h2>

              <div className="text-stone-600 text-base leading-relaxed space-y-4">
                <p>
                  Không chỉ hiện diện qua những cảnh quan thiên nhiên, Vĩnh Thạnh còn mang trong mình những câu chuyện về con người, nghề thủ công và di sản văn hóa được gìn giữ qua nhiều thế hệ.
                </p>
                <p>
                  Tại đây, hành trình khám phá có thể bắt đầu bằng khung cảnh bình yên bên dòng sông Kôn, tiếp nối qua những làng nghề truyền thống và những nét văn hóa gắn với cộng đồng Ba Na.
                </p>
                <p>
                  Mỗi cảnh sắc, mỗi sản vật và mỗi câu chuyện đều góp phần tạo nên bản sắc riêng của vùng đất này.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('discover')}
                  className="px-6 py-3 bg-stone-900 hover:bg-emerald-900 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Khám phá vùng đất Vĩnh Thạnh</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THREE WAYS TO FEEL THE LAND – Ba cách chạm Vĩnh Thạnh */}
      <section className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              THREE WAYS TO FEEL THE LAND
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-stone-900">
              Ba cách chạm Vĩnh Thạnh
            </h2>
            <p className="text-stone-600 text-base">
              Mỗi cách chạm là một góc nhìn khác nhau về Vĩnh Thạnh. Có thể là một khoảnh khắc giữa thiên nhiên, một câu chuyện từ làng nghề hay một cuộc gặp gỡ với văn hóa bản địa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Trụ cột 1: Chạm Thiên Nhiên */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/kon_river_landscape_1793979505469.jpg";
                  }}
                  alt="Chạm Thiên Nhiên Vĩnh Thạnh"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                    <Trees className="w-4 h-4 text-emerald-700" />
                    <span>Trụ cột 01</span>
                  </div>
                  <h3 className="text-xl font-bold  text-stone-900">
                    Chạm Thiên Nhiên
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Lắng nghe nhịp chảy của dòng sông, tìm về những khoảng xanh và khám phá vẻ đẹp của núi rừng Vĩnh Thạnh.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('experiences')}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Tìm hiểu thiên nhiên</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Trụ cột 2: Chạm Làng Nghề */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/traditional_rice_paper_1793979507277.jpg";
                  }}
                  alt="Chạm Làng Nghề truyền thống"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Trụ cột 02</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl text-stone-900 font-medium">
                    Chạm Làng Nghề
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Tìm hiểu những nghề thủ công truyền thống, nơi sự khéo léo và kinh nghiệm của người làm nghề được trao truyền qua thời gian.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('experiences')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Tìm hiểu làng nghề</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Trụ cột 3: Chạm Văn Hóa */}
            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/bana_rong_culture_1793979506607.jpg";
                  }}
                  alt="Chạm Văn Hóa Ba Na"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-stone-800 text-xs font-semibold">
                    <Compass className="w-4 h-4 text-stone-700" />
                    <span>Trụ cột 03</span>
                  </div>
                  <h3 className="text-xl font-bold  text-stone-900">
                    Chạm Văn Hóa
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Khám phá những hoa văn thổ cẩm, câu chuyện cộng đồng và nét văn hóa đặc trưng của người Ba Na.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('experiences')}
                  className="text-xs font-semibold text-stone-800 hover:text-stone-950 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Tìm hiểu văn hóa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Connecting paragraph and CTA */}
          <div className="mt-14 p-8 bg-stone-100 border border-stone-200 rounded-xl text-center max-w-3xl mx-auto space-y-4">
            <p className="text-stone-700 text-base leading-relaxed">
              Mỗi cách chạm là một góc nhìn khác nhau về Vĩnh Thạnh. Có thể là một khoảnh khắc giữa thiên nhiên, một câu chuyện từ làng nghề hay một cuộc gặp gỡ với văn hóa bản địa. Tất cả cùng tạo nên một hành trình khám phá vượt ra ngoài khuôn viên của một điểm lưu trú.
            </p>
            <button
              onClick={() => onNavigate('experiences')}
              className="px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Chọn hành trình của bạn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4: DISCOVER KON RIVER – Một nơi để nghỉ (THE RETREAT CONCEPT) */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              THE RETREAT CONCEPT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug tracking-tight">
  Từ một vùng đất giàu bản sắc, hình thành một chốn nghỉ dưỡng ven sông
</h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Lấy cảm hứng từ thiên nhiên và văn hóa Vĩnh Thạnh, Kon River Eco Retreat được định hướng trở thành khu nghỉ dưỡng sinh thái ven sông Kôn, nơi du khách có thể tìm thấy sự riêng tư, thư thái và cơ hội khám phá đời sống địa phương.
            </p>
            <p className="text-stone-500 text-sm">
              Dự án được quy hoạch trên diện tích gần 2 ha, gồm hai phân khu với những chức năng bổ trợ cho nhau.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Khu A */}
            <div className="border border-stone-200 rounded-xl p-8 bg-stone-50 space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold block">
                    Phân khu quy hoạch
                  </span>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
  Khu A – Không gian kết nối
</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Theo quy hoạch dự kiến, Khu A bao gồm trung tâm tổ chức sự kiện và tiệc cưới với sức chứa khoảng 800 khách, hồ bơi cộng đồng, các không gian thể thao như pickleball và bóng chuyền, quán cà phê và khu giới thiệu sản phẩm OCOP địa phương.
              </p>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Trung tâm sự kiện & tiệc cưới sức chứa ~800 khách</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Hồ bơi cộng đồng & không gian thể thao (pickleball, bóng chuyền)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Quán cà phê thư giãn & khu giới thiệu sản vật OCOP Bình Định</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                Đây là khu vực hướng đến các hoạt động gặp gỡ, giải trí và kết nối cộng đồng.
              </p>
            </div>

            {/* Khu B */}
            <div className="border border-stone-200 rounded-xl p-8 bg-stone-50 space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold block">
                    Phân khu quy hoạch
                  </span>
                  <h3 className="text-2xl font-bold  text-stone-900">
                    Khu B – Không gian nghỉ dưỡng riêng tư
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center text-stone-800">
                  <Home className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Khu B dự kiến phát triển 10 bungalow, mỗi bungalow có hai phòng ngủ và hồ bơi mini riêng. Thiết kế hướng đến không gian nghỉ ngơi riêng tư, gần gũi thiên nhiên và sử dụng các chất liệu gợi nhắc bản sắc địa phương.
              </p>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>10 bungalow sinh thái cao cấp nép mình bên sông</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Mỗi bungalow gồm 2 phòng ngủ & hồ bơi mini riêng biệt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Cảm hứng từ kiến trúc nhà Rông truyền thống Ba Na</span>
                </div>
              </div>

              <p className="text-xs text-stone-500 pt-2 border-t border-stone-200">
                Lấy cảm hứng từ kiến trúc nhà Rông, hướng đến sự giao thoa giữa không gian nghỉ dưỡng đương đại và nét văn hóa đặc trưng.
              </p>
            </div>

          </div>

          {/* Legal / Planning note and CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-stone-100 border border-stone-200 rounded-xl">
            <p className="text-xs text-stone-500 max-w-2xl leading-relaxed">
              Thông tin tiện ích và thiết kế là quy hoạch dự kiến theo giới thiệu dự án, chưa phải xác nhận về tình trạng vận hành.
            </p>
            <button
              onClick={() => onNavigate('retreat')}
              className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0"
            >
              Tìm hiểu khu nghỉ dưỡng
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5: THE STORIES – Những câu chuyện tạo nên một vùng đất */}
      <section className="py-20 lg:py-28 bg-stone-900 text-stone-200 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
              THE STORIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
  Đằng sau mỗi trải nghiệm là một câu chuyện
</h2>
            <p className="text-stone-300 text-base leading-relaxed">
              Một vùng đất không chỉ được ghi nhớ qua những cảnh đẹp, mà còn qua những con người và giá trị đã tạo nên bản sắc của nơi đó. Với hành trình “Chạm Vĩnh Thạnh”, chúng tôi mong muốn giới thiệu những câu chuyện gần gũi về nghề truyền thống, văn hóa Ba Na và thiên nhiên Vĩnh Thạnh qua hình ảnh, video và nội dung khám phá điểm đến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Story 1 */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-stone-800">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/kon_river_landscape_1793979505469.jpg";
                  }}
                  alt="Hero Film Kon River"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-700/90 text-white flex items-center justify-center">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">
                  Hero Film — Nội dung dự kiến ra mắt trong chiến dịch
                </span>
                <h3 className="text-xl font-bold  text-white">
                  Một nơi để nghỉ, một vùng đất để cảm nhận
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Thước phim trải nghiệm ghi lại vẻ đẹp tĩnh lặng của sương sớm bên bờ sông Kôn và thanh âm núi rừng Vĩnh Thạnh.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-stone-800">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/assets/images/traditional_rice_paper_1793979507277.jpg";
                  }}
                  alt="Ba cách chạm Vĩnh Thạnh"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-stone-700/90 text-white flex items-center justify-center">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">
                  Chuỗi video thiên nhiên, làng nghề và văn hóa — Đang lên kế hoạch
                </span>
                <h3 className="text-xl font-bold  text-white">
                  Ba cách chạm Vĩnh Thạnh
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Loạt phóng sự ngắn về người thợ tráng bánh, bàn tay dệt thổ cẩm Hà Ri và những người giữ lửa nghề truyền thống.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('journal')}
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Khám phá những câu chuyện</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: PROJECT JOURNEY – Cùng theo dõi hành trình Kon River */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              PROJECT JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-stone-900 leading-snug">
              Một hành trình đang được hình thành
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Kon River Eco Retreat là dự án nghỉ dưỡng đang trong quá trình phát triển theo kế hoạch của doanh nghiệp Tân Tiến Phát. Từ ý tưởng về một khu nghỉ dưỡng sinh thái gắn với bản sắc Vĩnh Thạnh, dự án hướng đến việc hình thành không gian kết nối giữa thiên nhiên, con người và các trải nghiệm địa phương.
            </p>
          </div>

          {/* 4 Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="border border-stone-200 rounded-xl p-6 bg-stone-50 space-y-3">
              <div className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Giai đoạn 1</span>
              </div>
              <h3 className="text-xl font-bold  text-stone-900">
                09/2026
              </h3>
              <p className="text-xs font-semibold text-stone-700">
                Chuẩn bị & khởi công dự kiến
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hoàn thiện định hướng dự án, chuẩn bị xây dựng và hình thành các kênh thông tin thương hiệu.
              </p>
            </div>

            <div className="border border-stone-200 rounded-xl p-6 bg-stone-50 space-y-3">
              <div className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Giai đoạn 2</span>
              </div>
              <h3 className="text-xl font-bold  text-stone-900">
                Đầu năm 2027
              </h3>
              <p className="text-xs font-semibold text-stone-700">
                Phát triển dự án & điểm đến
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Tiếp tục giới thiệu bản sắc Vĩnh Thạnh và chia sẻ các thông tin tiến độ được xác nhận.
              </p>
            </div>

            <div className="border border-stone-200 rounded-xl p-6 bg-stone-50 space-y-3">
              <div className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Giai đoạn 3</span>
              </div>
              <h3 className="text-xl font-bold  text-stone-900">
                Tháng 4–6/2027
              </h3>
              <p className="text-xs font-semibold text-stone-700">
                Chạm Vĩnh Thạnh
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Dự kiến triển khai các hoạt động truyền thông khám phá thiên nhiên, làng nghề và văn hóa bản địa.
              </p>
            </div>

            <div className="border border-stone-200 rounded-xl p-6 bg-stone-50 space-y-3">
              <div className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Giai đoạn 4</span>
              </div>
              <h3 className="text-xl font-bold  text-stone-900">
                Tháng 7/2027
              </h3>
              <p className="text-xs font-semibold text-stone-700">
                Khai trương dự kiến
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Thời điểm dự kiến theo kế hoạch ban đầu, phụ thuộc tiến độ và điều kiện vận hành thực tế.
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-stone-100 border border-stone-200 rounded-xl">
            <p className="text-xs text-stone-500 max-w-2xl leading-relaxed">
              Các mốc thời gian là kế hoạch tham khảo. Tiến độ chính thức cần được cập nhật theo thông tin xác nhận từ chủ đầu tư.
            </p>
            <button
              onClick={() => onNavigate('journey')}
              className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer shrink-0"
            >
              Xem hành trình dự án
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 7: STAY CONNECTED – Cùng chờ một hành trình mới */}
      <section className="py-20 lg:py-28 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              STAY CONNECTED
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-stone-900">
              Vĩnh Thạnh còn nhiều điều để khám phá
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mx-auto leading-relaxed">
              Hành trình của Kon River Eco Retreat đang từng bước được hình thành. Hãy tiếp tục đồng hành để khám phá những câu chuyện về thiên nhiên, văn hóa địa phương và các thông tin mới nhất của dự án.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 text-left">
            {submittedSuccess ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h3 className="text-lg font-bold  text-emerald-950">
                  Đăng ký thành công!
                </h3>
                <p className="text-sm text-emerald-900 leading-relaxed max-w-lg mx-auto">
                  Cảm ơn bạn đã quan tâm đến Kon River Eco Retreat. Chúng tôi sẽ gửi các thông tin cập nhật theo lựa chọn đăng ký của bạn.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 cursor-pointer"
                >
                  Đăng ký email khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="sub-name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Họ và tên *
                    </label>
                    <input
                      id="sub-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-emerald-700 text-stone-900"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="sub-email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Địa chỉ email *
                    </label>
                    <input
                      id="sub-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ban@example.com"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-emerald-700 text-stone-900"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent-check"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-emerald-700 border-stone-300 rounded focus:ring-emerald-700 cursor-pointer"
                    required
                  />
                  <label htmlFor="consent-check" className="text-xs text-stone-600 leading-relaxed cursor-pointer select-none">
                    Tôi đồng ý nhận thông tin cập nhật về Kon River Eco Retreat và đã đọc chính sách quyền riêng tư.
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-emerald-900 hover:bg-emerald-950 disabled:bg-stone-400 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {isSubmitting ? 'Đang lưu vào hệ thống...' : 'Đăng ký nhận thông tin'}
                  </button>
                </div>

                <p className="text-[11px] text-stone-400">
                  Lưu ý: Hệ thống lưu trữ an toàn thông tin đăng ký và có cơ chế quản lý sự đồng ý của bạn.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

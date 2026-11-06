import React, { useRef } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  const secretClickRef = useRef(0);
  const timerRef = useRef<any>(null);

  const handleSecretTrigger = () => {
    secretClickRef.current += 1;
    if (timerRef.current) clearTimeout(timerRef.current);

    if (secretClickRef.current >= 2) {
      secretClickRef.current = 0;
      onOpenAdmin();
    } else {
      timerRef.current = setTimeout(() => {
        secretClickRef.current = 0;
      }, 1200);
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col with Official Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/nrX3PGf7/Gemini-Generated-Image-vvjumkvvjumkvvju.png"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/assets/logo.png";
                }}
                alt="Logo Kon River Eco Retreat"
                className="h-14 w-auto object-contain brightness-105"
                loading="lazy"
              />
              <div>
                <span className="text-lg font-bold  tracking-tight text-stone-100 block">
                  CHẠM VĨNH THẠNH
                </span>
                <span className="text-xs text-stone-400 block">
                  Kon River Eco Retreat
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Khu du lịch nghỉ dưỡng sinh thái ven sông Kôn, huyện Vĩnh Thạnh, tỉnh Bình Định.
              Nghỉ một nơi, cảm nhận cả một vùng đất.
            </p>
            <div className="pt-2 text-xs text-stone-500 space-y-1">
              <p>Đơn vị phát triển: <strong className="text-stone-300 font-semibold">Tân Tiến Phát</strong></p>
              <p>Địa bàn: Huyện Vĩnh Thạnh, Tỉnh Bình Định, Việt Nam</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Khám phá điểm đến
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Khám phá Vĩnh Thạnh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Trải nghiệm bản địa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('retreat')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Khu nghỉ dưỡng Kon River
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Hành trình dự án
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Cẩm nang du lịch
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Connect & Partnerships */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Kết nối & Hợp tác
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Gửi yêu cầu liên hệ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Dành cho đối tác du lịch & truyền thông
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('retreat')}
                  className="hover:text-stone-100 transition-colors text-left cursor-pointer"
                >
                  Thông tin quy hoạch dự án
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom note with secret admin gateway on © */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="max-w-2xl leading-relaxed">
            Các mốc thời gian, tiện ích và hình ảnh phối cảnh thể hiện kế hoạch tham khảo.
            Tiến độ thi công và khai trương chính thức sẽ được công bố dựa trên xác nhận từ chủ đầu tư.
          </p>
          <p className="shrink-0 text-stone-400 select-none">
            <span
              onClick={handleSecretTrigger}
              className="cursor-pointer hover:text-stone-200 transition-colors"
              title="Kon River"
            >
              ©
            </span>{' '}
            {new Date().getFullYear()} Kon River Eco Retreat. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

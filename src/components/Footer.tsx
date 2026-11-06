import React from 'react';
import { Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xl font-bold font-serif tracking-tight text-stone-100 block">
              CHẠM VĨNH THẠNH — KON RIVER ECO RETREAT
            </span>
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
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Khám phá Vĩnh Thạnh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Trải nghiệm bản địa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('retreat')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Khu nghỉ dưỡng Kon River
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Hành trình dự án
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Cẩm nang du lịch
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Connect & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Kết nối & Quản trị
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Gửi yêu cầu liên hệ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-stone-100 transition-colors text-left"
                >
                  Dành cho đối tác du lịch
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Quản trị viên (Admin CMS)</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom note */}
        <div className="pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="max-w-2xl leading-relaxed">
            Các mốc thời gian, tiện ích và hình ảnh phối cảnh thể hiện kế hoạch tham khảo.
            Tiến độ thi công và khai trương chính thức sẽ được công bố dựa trên xác nhận từ chủ đầu tư.
          </p>
          <p className="shrink-0 text-stone-400">
            © {new Date().getFullYear()} Kon River Eco Retreat. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

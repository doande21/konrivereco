import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Building, MapPin, Handshake } from 'lucide-react';
import { submitContact } from '../services/dataService';

export const PageContact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Tìm hiểu thông tin dự án');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Vui lòng nhập họ và tên.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Vui lòng nhập email hợp lệ.');
      return;
    }
    if (!message.trim()) {
      setError('Vui lòng nhập nội dung lời nhắn.');
      return;
    }
    if (!consent) {
      setError('Vui lòng tích đồng ý với chính sách quyền riêng tư.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContact({
        fullName: fullName.trim(),
        email: email.trim(),
        topic,
        message: message.trim(),
        consent: true
      });
      setSuccess(true);
      setFullName('');
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch {
      setError('Không thể gửi lời nhắn lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO */}
      <section className="bg-stone-900 text-stone-100 py-20 lg:py-24 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
            STAY CONNECTED
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
            Cùng Kon River viết tiếp hành trình khám phá
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Từ thiên nhiên ven sông Kôn đến những câu chuyện văn hóa của Vĩnh Thạnh, Kon River Eco Retreat mong muốn tạo nên một hành trình khám phá có chiều sâu và giàu cảm xúc. Nếu bạn quan tâm đến dự án, muốn tìm hiểu thêm về định hướng trải nghiệm hoặc kết nối hợp tác, hãy để lại lời nhắn.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: FORM LIÊN HỆ & DÀNH CHO ĐỐI TÁC */}
      <section className="py-20 lg:py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-8 sm:p-10 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold block">
                  KẾT NỐI VỚI CHÚNG TÔI
                </span>
                <h2 className="text-2xl font-bold font-serif text-stone-900 mt-1">
                  Gửi lời nhắn đến Kon River
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Chúng tôi lắng nghe mọi ý kiến đóng góp, câu hỏi và đề xuất hợp tác.
                </p>
              </div>

              {success ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h3 className="text-lg font-bold font-serif text-emerald-950">
                    Gửi lời nhắn thành công!
                  </h3>
                  <p className="text-sm text-emerald-900 leading-relaxed max-w-md mx-auto">
                    Cảm ơn bạn đã liên hệ với Kon River Eco Retreat. Đội ngũ phụ trách sẽ xem xét nội dung và phản hồi qua email của bạn trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 cursor-pointer"
                  >
                    Gửi thêm lời nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                        Họ và tên *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-emerald-700 text-stone-900"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                        Email liên hệ *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ban@example.com"
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-emerald-700 text-stone-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-topic" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Bạn muốn liên hệ về *
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-emerald-700 text-stone-900"
                    >
                      <option value="Tìm hiểu thông tin dự án">Tìm hiểu thông tin dự án</option>
                      <option value="Hợp tác du lịch và truyền thông">Hợp tác du lịch và truyền thông</option>
                      <option value="Nội dung khác">Nội dung khác</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                      Lời nhắn *
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Chia sẻ thông tin, câu hỏi hoặc đề xuất của bạn..."
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:bg-white focus:outline-none focus:border-emerald-700 text-stone-900 resize-none"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="contact-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 text-emerald-700 border-stone-300 rounded focus:ring-emerald-700 cursor-pointer"
                      required
                    />
                    <label htmlFor="contact-consent" className="text-xs text-stone-600 leading-relaxed cursor-pointer select-none">
                      Tôi đồng ý nhận các thông tin cập nhật từ Kon River Eco Retreat theo chính sách quyền riêng tư.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-emerald-900 hover:bg-emerald-950 disabled:bg-stone-400 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>{isSubmitting ? 'Đang gửi...' : 'Gửi lời nhắn'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Dành cho đối tác Column */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white border border-stone-200 rounded-2xl p-8 space-y-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  <Handshake className="w-4 h-4 text-emerald-700" />
                  <span>DÀNH CHO ĐỐI TÁC</span>
                </div>

                <h3 className="text-xl font-bold font-serif text-stone-900">
                  Cùng kết nối những giá trị địa phương
                </h3>

                <div className="text-xs text-stone-600 leading-relaxed space-y-3">
                  <p>
                    Kon River Eco Retreat hướng đến việc phát triển các trải nghiệm gắn với thiên nhiên, nghề thủ công và văn hóa bản địa Vĩnh Thạnh.
                  </p>
                  <p>
                    Chúng tôi mong muốn tìm hiểu cơ hội kết nối với các đơn vị du lịch, nhà sáng tạo nội dung, đối tác truyền thông và những cá nhân, tổ chức có chuyên môn về trải nghiệm địa phương.
                  </p>
                  <p className="text-stone-500">
                    Các đề xuất hợp tác sẽ được xem xét theo định hướng phát triển và tình trạng thực tế của dự án.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setTopic('Hợp tác du lịch và truyền thông');
                      const elem = document.getElementById('contact-name');
                      elem?.scrollIntoView({ behavior: 'smooth' });
                      elem?.focus();
                    }}
                    className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold cursor-pointer text-center"
                  >
                    Liên hệ hợp tác
                  </button>
                </div>
              </div>

              {/* Thông tin minh bạch */}
              <div className="p-6 bg-stone-100 border border-stone-200 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-800" />
                  <span>Bảo vệ quyền riêng tư & dữ liệu</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Mọi thông tin liên hệ được lưu trữ an toàn trong hệ thống cơ sở dữ liệu dự án và chỉ sử dụng cho mục đích phản hồi, trao đổi thông tin.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: THÔNG TIN CHÍNH THỨC */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              MINH BẠCH DOANH NGHIỆP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Thông tin chính thức
            </h2>
            <p className="text-stone-600 text-sm">
              Thông tin định danh của dự án Kon River Eco Retreat và chủ đầu tư phát triển.
            </p>
          </div>

          <div className="border border-stone-200 rounded-2xl p-8 bg-stone-50 space-y-6">
            
            <div className="border-b border-stone-200 pb-4">
              <h3 className="text-xl font-bold font-serif text-stone-900">
                Kon River Eco Retreat
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Khu du lịch nghỉ dưỡng ven sông Kôn – Vĩnh Thạnh
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="space-y-1">
                <span className="text-stone-500 font-medium flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-stone-400" />
                  Đơn vị phát triển:
                </span>
                <p className="font-bold text-stone-900 text-sm">Tân Tiến Phát</p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  Địa chỉ chi tiết:
                </span>
                <p className="text-stone-700">Chờ xác nhận từ chủ đầu tư.</p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  Email chính thức:
                </span>
                <p className="text-stone-700">Chờ doanh nghiệp cung cấp.</p>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500 font-medium">Điện thoại:</span>
                <p className="text-stone-700">Chờ doanh nghiệp cung cấp.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-1">
              <p>Mạng xã hội: Chỉ hiển thị các tài khoản chính thức đã được xác nhận.</p>
              <p className="text-stone-400 text-[11px] italic-none">
                Lưu ý: Không tự tạo email, số điện thoại hoặc đặt vị trí bản đồ tại một điểm ước lượng rồi trình bày như vị trí chính thức của dự án.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

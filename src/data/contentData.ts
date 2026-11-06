export interface Article {
  id: string;
  title: string;
  category: 'Thiên nhiên' | 'Điểm đến' | 'Làng nghề' | 'Văn hóa' | 'Thiết kế & Văn hóa';
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
  publishedAt: string;
}

export interface ProjectUpdate {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  image?: string;
  isOfficial: boolean;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface Subscriber {
  id: string;
  fullName: string;
  email: string;
  consent: boolean;
  createdAt: string;
}

// Initial 6 articles from the official travel journal brief
export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Sông Kôn – Dòng chảy trong câu chuyện Kon River',
    category: 'Thiên nhiên',
    excerpt: 'Tìm hiểu vai trò của sông Kôn trong cảm hứng phát triển dự án và cách cảnh quan ven sông trở thành một phần trong định hướng nghỉ dưỡng sinh thái.',
    content: `Dòng sông Kôn như một dải lụa xanh biếc uốn lượn qua các thung lũng và rặng núi trùng điệp của huyện Vĩnh Thạnh, tỉnh Bình Định. Đối với dự án Kon River Eco Retreat, dòng sông không đơn thuần là một yếu tố cảnh quan tiếp giáp, mà chính là nguồn sinh khí nuôi dưỡng triết lý phát triển của cả quần thể.

Tại đây, dòng nước êm đềm mở ra không gian cho những buổi sớm ngắm sương bảng lảng trên mặt nước, những buổi chiều lắng nghe nhịp nước vỗ về bờ đá. Khách lưu trú có thể tản bộ ven bờ sông, chèo kayak thư giãn hoặc tìm cho mình một góc thiền định thanh tịnh giữa thiên nhiên nguyên sơ.

Hành trình bảo tồn và phát triển sinh thái ven sông Kôn luôn đặt mục tiêu gìn giữ nguyên vẹn thảm thực vật bản địa, giảm thiểu tối đa can thiệp nhân tạo vào dòng chảy tự nhiên.`,
    image: '/src/assets/images/kon_river_landscape_1793979505469.jpg',
    author: 'Ban Biên Tập Kon River',
    readTime: '4 phút đọc',
    publishedAt: '2026-10-15'
  },
  {
    id: 'art-2',
    title: 'Hồ Định Bình và những khoảng xanh Vĩnh Thạnh',
    category: 'Điểm đến',
    excerpt: 'Khám phá một trong những địa danh thiên nhiên được giới thiệu trong định hướng phát triển trải nghiệm của Kon River.',
    content: `Hồ Định Bình là công trình thủy lợi – hồ chứa nước lớn nhất tỉnh Bình Định, nằm nép mình giữa trập trùng núi non huyện Vĩnh Thạnh. Mặt nước phẳng lặng xanh ngắt như ngọc bích, phản chiếu bầu trời bao la cùng những vạt rừng nguyên sinh hùng vĩ bao quanh.

Đến với hồ Định Bình, du khách sẽ cảm nhận ngay bầu không khí mát lành tách biệt hoàn toàn với phố thị xô bồ. Đây là điểm đến lý tưởng cho những chuyến dã ngoại ngắm cảnh, chụp ảnh thiên nhiên và trải nghiệm sự tĩnh lặng hiếm có giữa đất trời miền trung du.

Từ khuôn viên Kon River Eco Retreat, cung đường kết nối đến hồ Định Bình mở ra chuyến hành trình tuyệt đẹp uốn quanh sườn đồi, nơi du khách có thể phóng tầm mắt ôm trọn cảnh sắc nên thơ của thung lũng.`,
    image: '/src/assets/images/dinh_binh_lake_1793979505731.jpg',
    author: 'Cẩm Nang Vĩnh Thạnh',
    readTime: '5 phút đọc',
    publishedAt: '2026-10-18'
  },
  {
    id: 'art-3',
    title: 'Nghề làm bánh tráng – Câu chuyện phía sau sản phẩm thủ công',
    category: 'Làng nghề',
    excerpt: 'Giới thiệu quá trình làm nghề và giá trị của kinh nghiệm thủ công trong đời sống địa phương.',
    content: `Từ sáng sớm tinh mơ, khi màn sương vẫn còn vương trên những bụi tre ven ngõ, những bếp lò tráng bánh tráng truyền thống tại các làng quê Bình Định đã đỏ lửa. Từng gáo bột gạo xay mịn được người thợ thoăn thoắt tráng đều trên mặt vải căng, đậy vung lại vài giây rồi nhẹ nhàng nhấc chiếc bánh nóng hổi đặt lên những chiếc vỉ tre đan tỉ mỉ.

Các vỉ bánh tráng sau đó được đem phơi dưới ánh nắng rực rỡ của miền đất võ. Quá trình làm bánh đòi hỏi sự khéo léo, dẻo dai và kinh nghiệm canh thời tiết chuẩn xác của người thợ lành nghề qua hàng chục năm gắn bó.

Trong hành trình "Chạm Làng Nghề", du khách sẽ được tận mắt chứng kiến công đoạn tráng bánh, tự tay thử sức và lắng nghe những tâm sự chân chất của các nghệ nhân gìn giữ nghề xưa.`,
    image: '/src/assets/images/traditional_rice_paper_1793979507277.jpg',
    author: 'Hành Trình Làng Nghề',
    readTime: '6 phút đọc',
    publishedAt: '2026-10-22'
  },
  {
    id: 'art-4',
    title: 'Nghề nấu rượu truyền thống – Một lát cắt của văn hóa làng nghề',
    category: 'Làng nghề',
    excerpt: 'Tìm hiểu quy trình sản xuất và câu chuyện của những người gìn giữ kinh nghiệm làm nghề.',
    content: `Bên cạnh ẩm thực phong phú, nghề nấu rượu thủ công truyền thống tại Vĩnh Thạnh và vùng phụ cận là một nét văn hóa đặc sắc gắn bó với đời sống cộng đồng. Từ men ủ tự nhiên kết hợp các loại thảo mộc, nguồn nước ngọt lành chảy ra từ mạch nguồn đồi núi, từng giọt rượu chưng cất mang hương thơm nồng đượm của đất trời.

Nội dung giới thiệu về nghề nấu rượu tập trung vào việc khám phá quy trình kỹ thuật làm nghề, sự kiên nhẫn của các gia đình gắn bó nhiều thế hệ với chum vại, chứ không hướng tới việc tiêu thụ đồ uống có cồn.

Đây là cơ hội để du khách hiểu thêm về cách người dân địa phương biến những sản vật từ hạt gạo, nguồn nước quê hương thành biểu tượng ẩm thực truyền thống.`,
    image: '/src/assets/images/traditional_rice_paper_1793979507277.jpg',
    author: 'Ký Sự Văn Hóa',
    readTime: '4 phút đọc',
    publishedAt: '2026-10-25'
  },
  {
    id: 'art-5',
    title: 'Hoa văn thổ cẩm Ba Na – Những câu chuyện được dệt nên',
    category: 'Văn hóa',
    excerpt: 'Khám phá nghệ thuật tạo hoa văn và vai trò của nghề dệt trong văn hóa cộng đồng.',
    content: `Tại làng Hà Ri và các buôn làng người Ba Na ở Vĩnh Thạnh, tiếng lách cách của khung cửi gỗ đã trở thành thanh âm quen thuộc qua bao mùa rẫy. Những người phụ nữ Ba Na với đôi bàn tay khéo léo đã dệt nên những tấm thổ cẩm rực rỡ sắc màu đen, đỏ, trắng, vàng.

Mỗi đường viền, hoa văn hình thoi, hình mắt chim hay cây rau rừng trên tấm vải thổ cẩm đều mang ý nghĩa biểu tượng sâu sắc về vũ trụ, đất rừng và tình đoàn kết buôn làng. Nghề dệt thổ cẩm không chỉ tạo ra trang phục truyền thống mà còn là sợi dây kết nối các thế hệ gìn giữ cội nguồn.

Dự án Kon River Eco Retreat mong muốn đồng hành cùng các nghệ nhân Hà Ri giới thiệu sản phẩm dệt thổ cẩm nguyên bản đến du khách trong và ngoài nước, góp phần bảo tồn giá trị văn hóa quý báu.`,
    image: '/src/assets/images/bana_rong_culture_1793979506607.jpg',
    author: 'Bản Sắc Bản Địa',
    readTime: '5 phút đọc',
    publishedAt: '2026-11-01'
  },
  {
    id: 'art-6',
    title: 'Cảm hứng nhà Rông trong câu chuyện thiết kế Kon River',
    category: 'Thiết kế & Văn hóa',
    excerpt: 'Tìm hiểu cách dự án dự kiến khai thác cảm hứng kiến trúc truyền thống trong không gian nghỉ dưỡng đương đại.',
    content: `Nhà Rông là trái tim văn hóa của người Ba Na – nơi hội tụ của các lễ hội, sinh hoạt cộng đồng và những quyết định quan trọng của làng. Với kết cấu mái cao vút uy nghiêm vươn lên giữa nền trời, sàn gỗ vững chãi trên cột trụ tự nhiên, nhà Rông toát lên tinh thần kiêu hãnh và sự hòa hợp tuyệt đối với thiên nhiên đại ngàn.

Đội ngũ kiến trúc sư của Kon River Eco Retreat đã chắt lọc những đường nét dốc mái thanh thoát, tỷ lệ không gian thoáng đạt và việc sử dụng gỗ, mây tre, đá cuội để đưa vào các bungalow nghỉ dưỡng và trung tâm sự kiện của dự án.

Sự giao thoa giữa tiện nghi đương đại chuẩn sinh thái và hình bóng kiến trúc truyền thống hứa hẹn mang đến cho du khách một không gian lưu trú ấm cúng, sang trọng nhưng vẫn đậm đà bản sắc Vĩnh Thạnh.`,
    image: '/src/assets/images/bana_rong_culture_1793979506607.jpg',
    author: 'Hội Đồng Kiến Trúc',
    readTime: '5 phút đọc',
    publishedAt: '2026-11-04'
  }
];

export const INITIAL_UPDATES: ProjectUpdate[] = [
  {
    id: 'up-1',
    title: 'Công bố quy hoạch phân khu A & B dự án Kon River Eco Retreat',
    date: '2026-10-10',
    category: 'Quy hoạch dự án',
    summary: 'Quy hoạch chi tiết trên diện tích gần 2 ha ven sông Kôn gồm trung tâm hội nghị sự kiện 800 khách và 10 bungalow sinh thái riêng tư.',
    content: 'Tân Tiến Phát chính thức công bố định hướng quy hoạch không gian sinh thái cho Kon River Eco Retreat, nhấn mạnh việc bảo tồn cảnh quan tự nhiên sông Kôn và ứng dụng kiến trúc bản địa Ba Na.',
    image: '/src/assets/images/kon_river_landscape_1793979505469.jpg',
    isOfficial: true
  },
  {
    id: 'up-2',
    title: 'Khảo sát thực địa tuyến kết nối di sản văn hóa Ba Na và làng nghề dệt Hà Ri',
    date: '2026-10-28',
    category: 'Hoạt động địa phương',
    summary: 'Đoàn công tác dự án đã làm việc với đại diện cộng đồng làng Hà Ri để chuẩn bị các chương trình trải nghiệm văn hóa bền vững.',
    content: 'Chương trình làm việc tập trung vào việc tạo sinh kế cho người làm nghề dệt thổ cẩm, đồng thời xây dựng quy chuẩn đón tiếp tôn trọng văn hóa bản địa.',
    image: '/src/assets/images/bana_rong_culture_1793979506607.jpg',
    isOfficial: true
  }
];

export const INITIAL_FAQS = [
  {
    q: 'Kon River Eco Retreat nằm ở đâu?',
    a: 'Dự án được giới thiệu tại khu vực ven sông Kôn, huyện Vĩnh Thạnh, tỉnh Bình Định. Địa chỉ và hướng dẫn di chuyển chi tiết sẽ được bổ sung sau khi được chủ đầu tư Tân Tiến Phát xác nhận.'
  },
  {
    q: 'Khi nào Kon River Eco Retreat khai trương?',
    a: 'Theo kế hoạch tham khảo ban đầu, dự án dự kiến khởi công vào 09/2026 và hướng đến mốc khai trương dự kiến vào tháng 07/2027. Thời điểm chính thức sẽ được công bố dựa trên tiến độ và điều kiện vận hành thực tế.'
  },
  {
    q: 'Kon River đã nhận đặt phòng chưa?',
    a: 'Hiện tại dự án đang trong giai đoạn phát triển và CHƯA mở bán hoặc nhận đặt phòng. Mọi thông tin về giá dịch vụ và chính sách đặt phòng sẽ được công bố minh bạch trên website chính thức sau khi hoàn thiện.'
  },
  {
    q: 'Dự án có những tiện ích gì?',
    a: 'Theo quy hoạch dự kiến, Khu A bao gồm trung tâm sự kiện tiệc cưới 800 khách, hồ bơi cộng đồng, sân pickleball, sân bóng chuyền, quán cà phê và khu OCOP. Khu B có 10 bungalow 2 phòng ngủ cao cấp với hồ bơi mini riêng.'
  },
  {
    q: 'Có thể trải nghiệm làng nghề và văn hóa Ba Na không?',
    a: 'Có. Dự án định hướng kết nối du khách với các trải nghiệm bản địa như tìm hiểu nghề dệt thổ cẩm Hà Ri, kiến trúc nhà Rông, nghề làm bánh tráng và thưởng ngoạn cảnh quan sông Kôn, hồ Định Bình.'
  },
  {
    q: 'Làm cách nào để nhận thông tin mới?',
    a: 'Bạn có thể đăng ký email tại biểu mẫu "Stay Connected" ở cuối trang hoặc mục Liên hệ. Hệ thống sẽ tự động gửi các bản tin cập nhật tiến độ chính thức được chủ đầu tư phê duyệt.'
  }
];

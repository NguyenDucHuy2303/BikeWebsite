import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsDetailPageProps {
  newsId: number;
  onNavigate: (page: string) => void;
}

export function NewsDetailPage({ newsId, onNavigate }: NewsDetailPageProps) {
  // Mock news data
  const newsData = [
    {
      id: 1,
      title: 'Ra Mắt Dòng Xe Đạp Điện Thể Thao GreenBike Sport 2024',
      category: 'Sản Phẩm Mới',
      date: '05/10/2024',
      author: 'Nguyễn Văn Minh',
      image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt: 'GreenBike tự hào giới thiệu dòng xe đạp điện thể thao mới với động cơ 500W',
      content: `
        <p>Ngày 05/10/2024, GreenBike đã chính thức ra mắt dòng xe đạp điện thể thao GreenBike Sport 2024 với nhiều cải tiến đột phá về thiết kế, công nghệ và hiệu suất. Đây là kết quả của quá trình nghiên cứu và phát triển kéo dài 18 tháng, với sự tham gia của đội ngũ kỹ sư hàng đầu.</p>
        
        <h3>Những Tính Năng Nổi Bật</h3>
        <p>Dòng xe đạp điện thể thao mới mang đến nhiều tính năng vượt trội:</p>
        <ul>
          <li><strong>Động cơ mid-drive 500W Bosch:</strong> Gắn trục giữa cho khả năng tăng tốc mượt mà, tốc độ tối đa 45km/h.</li>
          <li><strong>Khung carbon fiber T700:</strong> Siêu nhẹ chỉ 19kg, thiết kế aerodynamic giảm 30% lực cản gió.</li>
          <li><strong>Pin Panasonic 48V-17.5Ah:</strong> Tầm xa lên đến 120km, sạc nhanh 80% trong 3 giờ.</li>
          <li><strong>Màn hình LCD 4.3 inch:</strong> Hiển thị đầy đủ thông tin, kết nối Bluetooth với smartphone.</li>
          <li><strong>Phanh đĩa thủy lực Shimano:</strong> An toàn tuyệt đối ngay cả ở tốc độ cao.</li>
        </ul>
        
        <h3>Giá Bán & Ưu Đãi</h3>
        <p>GreenBike Sport 2024 có giá từ 18-30 triệu tùy phiên bản. Đặc biệt, trong tháng 10/2024, khách hàng mua xe sẽ được:</p>
        <ul>
          <li>Giảm giá 15% cho 100 khách hàng đầu tiên</li>
          <li>Tặng bộ phụ kiện cao cấp trị giá 3 triệu đồng</li>
          <li>Hỗ trợ trả góp 0% lãi suất trong 12 tháng</li>
          <li>Bảo hành 36 tháng (pin 18 tháng)</li>
        </ul>
        
        <h3>Phản Hồi Từ Khách Hàng</h3>
        <p>Anh Trần Minh Tuấn - VĐV xe đạp chuyên nghiệp, một trong những người đầu tiên trải nghiệm GreenBike Sport 2024 chia sẻ: "Đây là chiếc xe đạp điện thể thao tốt nhất tôi từng sử dụng. Khung carbon cực kỳ nhẹ, tăng tốc nhanh, và pin bền bỉ. Hoàn hảo cho cả tập luyện và giải trí."</p>
      `,
      tags: ['Xe đạp điện', 'Sản phẩm mới', 'GreenBike Sport']
    },
    {
      id: 2,
      title: 'Chương Trình Khuyến Mãi Lớn Nhân Ngày 20/10',
      category: 'Khuyến Mãi',
      date: '01/10/2024',
      author: 'Trần Thị Hoa',
      image: 'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt: 'Giảm giá đến 20% cho tất cả các dòng xe đạp điện',
      content: `
        <p>Nhân dịp ngày Phụ nữ Việt Nam 20/10, GreenBike triển khai chương trình khuyến mãi lớn nhất trong năm với nhiều ưu đãi hấp dẫn dành cho khách hàng nữ và gia đình.</p>
        
        <h3>Ưu Đãi Đặc Biệt</h3>
        <p>Chương trình áp dụng từ 01/10/2024 đến 31/10/2024 với các ưu đãi:</p>
        <ul>
          <li><strong>Giảm giá 20%:</strong> Cho tất cả dòng xe đạp điện thành phố và xe gấp</li>
          <li><strong>Giảm giá 15%:</strong> Cho dòng xe đạp điện địa hình và thể thao</li>
          <li><strong>Tặng phụ kiện:</strong> Bộ phụ kiện trị giá 2 triệu (mũ bảo hiểm, đèn LED, khóa xe cao cấp)</li>
          <li><strong>Trả góp 0%:</strong> Hỗ trợ trả góp lãi suất 0% trong 12 tháng</li>
          <li><strong>Bảo hành kéo dài:</strong> Tặng thêm 12 tháng bảo hành (tổng 36 tháng)</li>
        </ul>
        
        <h3>Quà Tặng Đặc Biệt Cho Phái Đẹp</h3>
        <p>Khách hàng nữ mua xe trong tháng 10 sẽ nhận thêm:</p>
        <ul>
          <li>Giỏ xe thời trang cao cấp</li>
          <li>Áo mưa chống thấm thiết kế đẹp</li>
          <li>Găng tay chống nắng UV</li>
          <li>Voucher spa trị giá 500,000đ</li>
        </ul>
        
        <h3>Cách Thức Tham Gia</h3>
        <p>Khách hàng có thể tham gia chương trình bằng cách:</p>
        <ul>
          <li>Đến trực tiếp các showroom GreenBike trên toàn quốc</li>
          <li>Đặt hàng qua hotline: 1900 xxxx</li>
          <li>Đăng ký tư vấn trực tuyến qua website</li>
        </ul>
        
        <p><strong>Lưu ý:</strong> Chương trình có số lượng xe ưu đãi giới hạn. Khách hàng nên đặt hàng sớm để được hưởng ưu đãi tốt nhất!</p>
      `,
      tags: ['Khuyến mãi', 'Ưu đãi', '20/10']
    },
    {
      id: 3,
      title: 'Khai Trương Showroom GreenBike Tại Đà Nẵng',
      category: 'Sự Kiện',
      date: '28/09/2024',
      author: 'Lê Văn Tuấn',
      image: 'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt: 'Mở rộng hệ thống phân phối với showroom 500m² tại Đà Nẵng',
      content: `
        <p>Ngày 28/09/2024, GreenBike chính thức khai trương showroom quy mô lớn tại thành phố Đà Nẵng, đánh dấu bước phát triển quan trọng trong chiến lược mở rộng thị trường khu vực miền Trung.</p>
        
        <h3>Thông Tin Showroom</h3>
        <p>Showroom GreenBike Đà Nẵng có những đặc điểm nổi bật:</p>
        <ul>
          <li><strong>Diện tích:</strong> 500m² với thiết kế hiện đại, thoáng đãng</li>
          <li><strong>Địa chỉ:</strong> 123 Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng</li>
          <li><strong>Sản phẩm:</strong> Trưng bày đầy đủ 50+ mẫu xe từ tất cả dòng sản phẩm</li>
          <li><strong>Dịch vụ:</strong> Tư vấn, lái thử, bảo hành, sửa chữa tại chỗ</li>
          <li><strong>Đội ngũ:</strong> 15 nhân viên chuyên nghiệp, nhiệt tình</li>
        </ul>
        
        <h3>Ưu Đãi Khai Trương</h3>
        <p>Trong tháng đầu khai trương (từ 28/09 đến 28/10), khách hàng đến showroom sẽ nhận:</p>
        <ul>
          <li>Giảm giá 25% cho 50 khách hàng đầu tiên mua xe</li>
          <li>Miễn phí bảo dưỡng định kỳ trong 2 năm</li>
          <li>Tặng bộ phụ kiện cao cấp trị giá 3 triệu</li>
          <li>Quà tặng may mắn cho mọi khách hàng ghé thăm</li>
        </ul>
        
        <h3>Cam Kết Với Khách Hàng Miền Trung</h3>
        <p>Ông Nguyễn Văn A - Giám đốc GreenBike chia sẻ: "Đà Nẵng là thị trường trọng điểm trong chiến lược phát triển của chúng tôi. Với showroom mới, chúng tôi cam kết mang đến cho khách hàng miền Trung trải nghiệm mua sắm tốt nhất, dịch vụ chuyên nghiệp nhất và các sản phẩm xe đạp điện chất lượng cao nhất."</p>
        
        <p>Đây là showroom thứ 25 của GreenBike trên toàn quốc, khẳng định vị thế dẫn đầu của thương hiệu trong ngành xe đạp điện tại Việt Nam.</p>
      `,
      tags: ['Sự kiện', 'Khai trương', 'Đà Nẵng']
    },
    {
      id: 4,
      title: 'GreenBike Đạt Chứng Nhận CE Về An Toàn Sản Phẩm',
      category: 'Thành Tựu',
      date: '20/09/2024',
      author: 'Phạm Minh Đức',
      image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt: 'Toàn bộ dòng sản phẩm đạt tiêu chuẩn an toàn châu Âu',
      content: `
        <p>GreenBike vô cùng tự hào thông báo rằng toàn bộ dòng sản phẩm xe đạp điện của công ty đã chính thức được cấp chứng nhận CE (Conformité Européenne) - tiêu chuẩn an toàn sản phẩm của Liên minh châu Âu.</p>
        
        <h3>Ý Nghĩa Của Chứng Nhận CE</h3>
        <p>Chứng nhận CE là:</p>
        <ul>
          <li><strong>Tiêu chuẩn cao nhất:</strong> Về an toàn, sức khỏe và bảo vệ môi trường</li>
          <li><strong>Công nhận quốc tế:</strong> Được thừa nhận tại tất cả các nước EU và nhiều nước khác</li>
          <li><strong>Quy trình nghiêm ngặt:</strong> Đánh giá 20+ tiêu chí về điện, cơ khí, hóa chất, vật liệu</li>
          <li><strong>Cam kết chất lượng:</strong> Đảm bảo sản phẩm an toàn cho người sử dụng</li>
        </ul>
        
        <h3>Quá Trình Đạt Chứng Nhận</h3>
        <p>Để đạt được chứng nhận CE, GreenBike đã trải qua hành trình 12 tháng với các bước:</p>
        <ul>
          <li>Nghiên cứu và cải tiến thiết kế sản phẩm</li>
          <li>Nâng cấp quy trình sản xuất theo tiêu chuẩn EU</li>
          <li>Kiểm tra và thử nghiệm tại phòng lab quốc tế</li>
          <li>Đánh giá và chứng nhận bởi tổ chức TÜV Rheinland (Đức)</li>
        </ul>
        
        <h3>Lợi Ích Cho Khách Hàng</h3>
        <p>Chứng nhận CE mang lại những lợi ích thiết thực:</p>
        <ul>
          <li><strong>An toàn tuyệt đối:</strong> Sản phẩm đã qua kiểm định nghiêm ngặt nhất</li>
          <li><strong>Chất lượng đảm bảo:</strong> Tuân thủ các tiêu chuẩn cao nhất thế giới</li>
          <li><strong>Tin cậy:</strong> Khách hàng yên tâm sử dụng lâu dài</li>
          <li><strong>Bảo vệ môi trường:</strong> Vật liệu và sản xuất thân thiện với môi trường</li>
        </ul>
        
        <p>Với chứng nhận CE, GreenBike không chỉ khẳng định vị thế tại thị trường Việt Nam mà còn sẵn sàng cho kế hoạch xuất khẩu sang thị trường EU và các nước có yêu cầu chất lượng cao trong tương lai gần.</p>
      `,
      tags: ['Chứng nhận', 'CE', 'Chất lượng']
    },
    {
      id: 5,
      title: 'Hướng Dẫn Bảo Dưỡng Xe Đạp Điện Đúng Cách',
      category: 'Hướng Dẫn',
      date: '15/09/2024',
      author: 'Nguyễn Văn Minh',
      image: 'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt: 'Chia sẻ kinh nghiệm bảo dưỡng xe để kéo dài tuổi thọ',
      content: `
        <p>Xe đạp điện là phương tiện di chuyển hiện đại, tiết kiệm và thân thiện môi trường. Để xe hoạt động bền bỉ, hiệu quả qua thời gian, việc bảo dưỡng định kỳ đúng cách là vô cùng quan trọng. Dưới đây là hướng dẫn chi tiết từ chuyên gia GreenBike.</p>
        
        <h3>1. Bảo Dưỡng Pin - Linh Kiện Quan Trọng Nhất</h3>
        <p>Pin là trái tim của xe đạp điện. Để kéo dài tuổi thọ pin:</p>
        <ul>
          <li><strong>Sạc đúng cách:</strong> Sạc đầy pin khi mua mới, tránh để pin hết hoàn toàn (dưới 20%)</li>
          <li><strong>Tần suất sạc:</strong> Sạc pin khi còn 30-40% để tối ưu tuổi thọ</li>
          <li><strong>Thời gian sạc:</strong> Không sạc quá 8 giờ, rút sạc khi đầy 100%</li>
          <li><strong>Bảo quản:</strong> Nếu không dùng xe lâu, sạc pin 50-60% và tháo ra bảo quản nơi khô ráo</li>
          <li><strong>Nhiệt độ:</strong> Tránh sạc pin ở nhiệt độ quá cao (trên 40°C) hoặc quá thấp (dưới 0°C)</li>
        </ul>
        
        <h3>2. Vệ Sinh & Làm Sạch Xe</h3>
        <p>Xe sạch giúp phát hiện sớm vấn đề và tăng tuổi thọ linh kiện:</p>
        <ul>
          <li><strong>Tần suất:</strong> Lau xe sau mỗi lần đi mưa, rửa xe 2 tuần/lần</li>
          <li><strong>Cách rửa:</strong> Dùng nước sạch, xà phòng nhẹ, tránh xịt trực tiếp vào động cơ và bảng điều khiển</li>
          <li><strong>Lưu ý:</strong> Lau khô kỹ sau khi rửa, đặc biệt là các bộ phận điện</li>
          <li><strong>Bảo dưỡng sơn:</strong> Đánh bóng sơn 3 tháng/lần để bảo vệ khỏi trầy xước</li>
        </ul>
        
        <h3>3. Kiểm Tra & Bảo Dưỡng Hệ Thống Phanh</h3>
        <p>Phanh là yếu tố an toàn quan trọng:</p>
        <ul>
          <li><strong>Kiểm tra hàng tuần:</strong> Độ cứng/mềm tay phanh, tiếng kêu khi phanh</li>
          <li><strong>Bảo dưỡng 3 tháng/lần:</strong> Kiểm tra má phanh, căn chỉnh độ căng dây phanh</li>
          <li><strong>Thay thế:</strong> Má phanh khi mỏng dưới 2mm, dầu phanh (với phanh thủy lực) 1 năm/lần</li>
        </ul>
        
        <h3>4. Chăm Sóc Lốp Xe</h3>
        <p>Lốp xe ảnh hưởng trực tiếp đến an toàn và tầm hoạt động:</p>
        <ul>
          <li><strong>Áp suất lốp:</strong> Kiểm tra 1 tuần/lần, bơm đủ áp suất theo khuyến nghị (thường 35-45 PSI)</li>
          <li><strong>Kiểm tra mòn:</strong> Thay lốp khi gai mòn dưới 50% hoặc có vết nứt, phồng</li>
          <li><strong>Vệ sinh:</strong> Lau sạch lốp, kiểm tra dị vật cắm vào lốp</li>
        </ul>
        
        <h3>5. Bôi Trơn Xích & Hệ Thống Truyền Động</h3>
        <p>Hệ thống truyền động trơn tru giúp tiết kiệm pin:</p>
        <ul>
          <li><strong>Tần suất:</strong> Bôi dầu xích 2 tuần/lần hoặc sau khi đi mưa</li>
          <li><strong>Cách bôi:</strong> Dùng dầu chuyên dụng cho xe đạp, lau sạch dầu thừa</li>
          <li><strong>Kiểm tra:</strong> Độ căng xích, mòn răng líp mỗi tháng</li>
        </ul>
        
        <h3>6. Lịch Bảo Dưỡng Định Kỳ Tại Trung Tâm</h3>
        <p>Nên đem xe đến trung tâm bảo hành GreenBike:</p>
        <ul>
          <li><strong>3 tháng đầu:</strong> Kiểm tra tổng thể, căn chỉnh sau giai đoạn "chạy rà"</li>
          <li><strong>6 tháng/lần:</strong> Bảo dưỡng định kỳ, kiểm tra hệ thống điện</li>
          <li><strong>1 năm/lần:</strong> Bảo dưỡng lớn, thay dầu mỡ, kiểm tra toàn diện</li>
        </ul>
        
        <p><strong>Lưu ý:</strong> Khách hàng GreenBike được hưởng chính sách bảo dưỡng miễn phí trong thời gian bảo hành. Hãy liên hệ hotline 1900 xxxx hoặc đến các showroom để đặt lịch bảo dưỡng!</p>
      `,
      tags: ['Hướng dẫn', 'Bảo dưỡng', 'Mẹo hay']
    },
    {
      id: 6,
      title: 'GreenBike Tham Gia Triển Lãm Vietnam AutoExpo 2024',
      category: 'Sự Kiện',
      date: '10/09/2024',
      author: 'Trần Thị Hoa',
      image: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      excerpt: 'Trưng bày 15 mẫu xe đạp điện mới nhất tại triển lãm quốc tế',
      content: `
        <p>Từ ngày 10-15/09/2024, GreenBike vinh dự tham gia Triển lãm Ô tô - Xe máy Quốc tế Việt Nam lần thứ 16 (Vietnam AutoExpo 2024) tại Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC), TP.HCM.</p>
        
        <h3>Gian Hàng GreenBike</h3>
        <p>Gian hàng của GreenBike tại triển lãm:</p>
        <ul>
          <li><strong>Diện tích:</strong> 200m² với thiết kế hiện đại, bắt mắt</li>
          <li><strong>Vị trí:</strong> Khu B, gian số 15-16, dễ dàng tìm thấy</li>
          <li><strong>Sản phẩm:</strong> Trưng bày 15 mẫu xe từ tất cả dòng sản phẩm, bao gồm cả mẫu concept mới</li>
          <li><strong>Hoạt động:</strong> Tư vấn, lái thử, biểu diễn xe, mini game</li>
        </ul>
        
        <h3>Sản Phẩm Nổi Bật</h3>
        <p>Một số mẫu xe được trưng bày và thu hút sự chú ý:</p>
        <ul>
          <li><strong>GreenBike Sport 2024:</strong> Mẫu xe thể thao mới ra mắt với công nghệ tiên tiến</li>
          <li><strong>GreenBike Premium Limited:</strong> Phiên bản giới hạn cao cấp nhất</li>
          <li><strong>GreenBike Mountain Pro:</strong> Xe địa hình chuyên nghiệp</li>
          <li><strong>GreenBike Concept 2025:</strong> Mẫu xe concept sẽ ra mắt năm sau (lần đầu công bố)</li>
        </ul>
        
        <h3>Ưu Đãi Đặc Biệt Tại Triển Lãm</h3>
        <p>Khách hàng tham quan gian hàng GreenBike sẽ nhận:</p>
        <ul>
          <li>Giảm giá 30% cho khách hàng đặt hàng tại triển lãm</li>
          <li>Tặng bộ phụ kiện trị giá 5 triệu cho 20 khách hàng đầu tiên mỗi ngày</li>
          <li>Quay số trúng thưởng với giải nhất là 1 xe GreenBike City trị giá 10 triệu</li>
          <li>Tặng voucher giảm giá cho mọi khách tham quan</li>
        </ul>
        
        <h3>Phản Hồi Tích Cực</h3>
        <p>Trong 2 ngày đầu triển lãm, gian hàng GreenBike đã đón hơn 5,000 lượt khách tham quan và nhận được hơn 200 đơn đặt hàng. Nhiều khách hàng đánh giá cao thiết kế, chất lượng và mức giá cạnh tranh của sản phẩm.</p>
        
        <p>Ông David Chen - Chuyên gia xe điện từ Singapore, một trong những khách mời tại triển lãm nhận xét: "GreenBike có những sản phẩm rất ấn tượng với chất lượng tương đương xe nhập khẩu châu Âu nhưng giá cả phải chăng hơn nhiều. Tôi tin thương hiệu này sẽ phát triển mạnh không chỉ tại Việt Nam mà cả khu vực."</p>
      `,
      tags: ['Sự kiện', 'Triển lãm', 'AutoExpo']
    }
  ];

  const news = newsData.find(n => n.id === newsId) || newsData[0];

  return (
    <div className="bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('news')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
          >
            <ChevronLeft size={20} />
            Quay Lại Tin Tức
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded mb-4">
              {news.category}
            </div>
            <h1 className="mb-6">{news.title}</h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{news.date}</span>
              </div>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <ImageWithFallback
              src={news.image}
              alt={news.title}
              className="w-full aspect-video object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-sm"
            dangerouslySetInnerHTML={{ __html: news.content }}
            style={{
              lineHeight: '1.8'
            }}
          />

          {/* Share & Related */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="mb-4">Chia Sẻ Bài Viết</h3>
            <div className="flex gap-3">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Facebook
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-green-700 to-green-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-white mb-4">Quan Tâm Đến Xe Đạp Điện GreenBike?</h3>
            <p className="text-green-100 mb-6">
              Liên hệ ngay để được tư vấn chi tiết, lái thử miễn phí và nhận ưu đãi đặc biệt
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
              Liên Hệ Ngay
            </button>
          </div>
        </div>
      </article>

      <style jsx>{`
        .prose h3 {
          color: #16a34a;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1rem;
          color: #4b5563;
        }
        .prose ul {
          margin: 1rem 0;
          padding-left: 2rem;
          list-style-type: disc;
        }
        .prose li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .prose strong {
          color: #1e40af;
        }
      `}</style>
    </div>
  );
}

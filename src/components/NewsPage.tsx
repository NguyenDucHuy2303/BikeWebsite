import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocation, useNavigate } from "react-router-dom";

interface NewsPageProps {}

export function NewsPage({}: NewsPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const featuredNews = {
    id: 1,
    title: "Ra Mắt Dòng Xe Đạp Điện Thể Thao GreenBike Sport 2024",
    excerpt:
      "GreenBike tự hào giới thiệu dòng xe đạp điện thể thao mới với động cơ 500W, pin dung lượng cao và thiết kế aerodynamic hiện đại.",
    image:
      "https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    date: "05/10/2024",
    author: "Nguyễn Văn Minh",
    category: "Sản Phẩm Mới",
  };

  const newsList = [
    {
      id: 2,
      title: "Chương Trình Khuyến Mãi Lớn Nhân Ngày 20/10",
      excerpt:
        "Giảm giá đến 20% cho tất cả các dòng xe đạp điện, tặng kèm phụ kiện trị giá 2 triệu đồng và hỗ trợ trả góp 0% lãi suất.",
      image:
        "https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      date: "01/10/2024",
      author: "Trần Thị Hoa",
      category: "Khuyến Mãi",
    },
    {
      id: 3,
      title: "Khai Trương Showroom GreenBike Tại Đà Nẵng",
      excerpt:
        "Mở rộng hệ thống phân phối với showroom rộng 500m² tại trung tâm Đà Nẵng, phục vụ khách hàng khu vực miền Trung.",
      image:
        "https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      date: "28/09/2024",
      author: "Lê Văn Tuấn",
      category: "Sự Kiện",
    },
    {
      id: 4,
      title: "GreenBike Đạt Chứng Nhận CE Về An Toàn Sản Phẩm",
      excerpt:
        "Toàn bộ dòng sản phẩm xe đạp điện GreenBike đã được cấp chứng nhận CE, khẳng định chất lượng đạt tiêu chuẩn châu Âu.",
      image:
        "https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      date: "20/09/2024",
      author: "Phạm Minh Đức",
      category: "Thành Tựu",
    },
    {
      id: 5,
      title: "Hướng Dẫn Bảo Dưỡng Xe Đạp Điện Đúng Cách",
      excerpt:
        "Chia sẻ kinh nghiệm và hướng dẫn chi tiết cách bảo dưỡng xe đạp điện để kéo dài tuổi thọ pin và động cơ.",
      image:
        "https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      date: "15/09/2024",
      author: "Nguyễn Văn Minh",
      category: "Hướng Dẫn",
    },
    {
      id: 6,
      title: "GreenBike Tham Gia Triển Lãm Vietnam AutoExpo 2024",
      excerpt:
        "Trưng bày 15 mẫu xe đạp điện mới nhất tại triển lãm ô tô - xe máy quốc tế Việt Nam lần thứ 16.",
      image:
        "https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      date: "10/09/2024",
      author: "Trần Thị Hoa",
      category: "Sự Kiện",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Tin Tức & Sự Kiện</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cập nhật những tin tức mới nhất về sản phẩm, khuyến mãi và hoạt động
            của GreenBike
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <button
              key={news.id}
              onClick={() => handleNavigate("1")}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition group overflow-hidden text-left"
            >
              <ImageWithFallback
                src={news.image}
                alt={news.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded mb-3">
                  {news.category}
                </div>
                <h3 className="mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span className="text-sm">{news.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600 hover:gap-3 transition-all">
                  Xem Chi Tiết
                  <ArrowRight size={18} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-green-700 to-green-600 text-white p-12 rounded-2xl shadow-lg text-center">
          <h2 className="text-white mb-4">Đăng Ký Nhận Tin Khuyến Mãi</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nhận thông tin sớm nhất về sản phẩm mới, chương trình khuyến mãi hấp
            dẫn và các sự kiện của GreenBike
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-2 border-white/30 focus:border-white focus:outline-none placeholder:text-white"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNews } from "../api/newsApi";

interface NewsPageProps {}

export function NewsPage({}: NewsPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const [newsList, setNewsList] = useState<any[]>([]);
  const fetchNews = async () => {
    try {
      const res = await getNews();
      setNewsList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
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
              onClick={() => handleNavigate(news.id)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition group overflow-hidden text-left"
            >
              <ImageWithFallback
                src={news.coverImage}
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

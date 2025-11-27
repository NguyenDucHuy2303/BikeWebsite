import { ChevronLeft, Calendar, User, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewById } from "../api/newsApi";

interface NewsDetailPageProps {}

export function NewsDetailPage({}: NewsDetailPageProps) {
  const { id } = useParams();
  console.log("idididid", id);
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const [news, setNews] = useState<any>();
  const fetchNews = async () => {
    try {
      const res = await getNewById(id || "");
      setNews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) fetchNews();
  }, [id]);

  return (
    <div className="bg-gray-50">
      {!news ? (
        <div className="text-center py-20 text-gray-500">
          Đang tải dữ liệu...
        </div>
      ) : (
        <>
          {/* Back Button */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <button
                onClick={() => handleNavigate("/news")}
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
                {/* <div className="inline-block bg-green-600 text-white px-4 py-1 rounded mb-4">
              {news.category}
            </div> */}
                <h1 className="mb-6">{news.title}</h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{news.createdAt}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag: any, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <ImageWithFallback
                  src={news.coverImage}
                  alt={news.title}
                  className="w-full aspect-video object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-sm"
                dangerouslySetInnerHTML={{ __html: news.content }}
                style={{
                  lineHeight: "1.8",
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
                <h3 className="text-white mb-4">
                  Quan Tâm Đến Xe Đạp Điện GreenBike?
                </h3>
                <p className="text-green-100 mb-6">
                  Liên hệ ngay để được tư vấn chi tiết, lái thử miễn phí và nhận
                  ưu đãi đặc biệt
                </p>
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
                  Liên Hệ Ngay
                </button>
              </div>
            </div>
          </article>
        </>
      )}

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

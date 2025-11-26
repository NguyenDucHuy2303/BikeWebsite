import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, createProduct } from "../api/productApi";

interface ProductsPageProps {}

export function ProductsPage({}: ProductsPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [productLines, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Dòng Sản Phẩm Xe Đạp Điện</h1>
          <p className="text-gray-600 max-w-2xl">
            Khám phá các dòng xe đạp điện chất lượng cao của GreenBike, được
            thiết kế để đáp ứng mọi nhu cầu di chuyển của bạn
          </p>
        </div>

        {/* Product Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productLines.map((line) => (
            <button
              key={line.id}
              onClick={() => handleNavigate(`${line.id}`)}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group text-left overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={line.image}
                  alt={line.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 group-hover:text-gray-600 transition">
                  {line.name}
                </h3>
                <p className="text-gray-600 mb-4">{line.shortDesc}</p>
                <ul className="space-y-1 mb-4">
                  {line.features.slice(0, 3).map((feature: any, index: any) => (
                    <li
                      key={index}
                      className="text-gray-500 flex items-start gap-2"
                    >
                      <span className="text-gray-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all">
                  <span>Xem Chi Tiết</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-12 rounded-2xl shadow-lg text-center">
          <h2 className="text-white mb-4">Cần Tư Vấn Chọn Xe?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về dòng xe phù hợp với
            nhu cầu sử dụng và ngân sách của bạn. Hỗ trợ trả góp 0% lãi suất!
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
            Liên Hệ Ngay
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProductById, getProducts } from "../api/productApi";

interface ProductDetailPageProps {}

export function ProductDetailPage({}: ProductDetailPageProps) {
  const productId = 0;
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();
  const [productLine, setProduct] = useState<any>();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await getProductById(id || "");
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => handleNavigate("/products")}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition"
          >
            <ChevronLeft size={20} />
            Quay Lại Dòng Sản Phẩm
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={productLine?.heroImage}
            alt={productLine?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-white mb-4 text-[24px]">{productLine?.name}</h1>
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-green-500/20 border border-green-300/50 rounded-lg text-green-100 text-[14px]">
              {productLine?.tagline}
            </span>
          </div>
          <p className="text-green-100 max-w-3xl">{productLine?.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="mb-6 text-center hidden">Thư Viện Hình Ảnh</h2>

          {/* Main Selected Image */}
          <div className="mb-6">
            <ImageWithFallback
              src={productLine?.galleryImages[selectedImage]}
              alt={`${productLine?.name} - Hình ${selectedImage + 1}`}
              className="w-full aspect-video object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {productLine?.galleryImages.map((image: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-video overflow-hidden rounded-lg transition ${
                  selectedImage === index
                    ? "ring-4 ring-green-600 shadow-lg"
                    : "hover:ring-2 hover:ring-green-400"
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-green-600/20" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16 mb-16">
          {productLine?.sections.map((section: any, index: number) => (
            <div key={index} className="flex flex-col items-center text-center">
              <ImageWithFallback
                src={section.image}
                alt={section.title}
                className="w-full max-w-4xl aspect-video object-cover rounded-xl shadow-md mb-8"
              />
              <div className="max-w-3xl px-8">
                <h2 className="mb-6">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Image */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Thông Số Kỹ Thuật</h2>
          <div className="flex justify-center">
            <ImageWithFallback
              src={`https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200`}
              alt={`Thông số kỹ thuật ${productLine?.name}`}
              className="w-full max-w-4xl rounded-xl shadow-lg"
            />
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            *Hình ảnh minh họa thông số kỹ thuật chi tiết
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-12 rounded-2xl shadow-lg text-center">
          <h2 className="text-white mb-4">Quan Tâm Đến Sản Phẩm Này?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết, lái thử miễn phí và
            nhận ưu đãi đặc biệt. Hỗ trợ trả góp 0% lãi suất!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
              Đặt Lịch Lái Thử
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition">
              Tải Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

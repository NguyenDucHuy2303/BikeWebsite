import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HeroSlider } from "../components/HeroSlider";
import { Banner, initialBanners } from "../mockData/adminData";
import { useLocation, useNavigate } from "react-router-dom";

interface HomePageProps {
  banners?: Banner[];
}

export function HomePage({ banners }: HomePageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const services = [
    {
      id: 1,
      title: "Bán Lẻ & Đại Lý",
      description:
        "Hệ thống phân phối rộng khắp cả nước với giá cả cạnh tranh và ưu đãi hấp dẫn",
      image:
        "https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: 2,
      title: "Bảo Hành & Sửa Chữa",
      description:
        "Dịch vụ bảo hành chính hãng và sửa chữa chuyên nghiệp tại các trung tâm toàn quốc",
      image:
        "https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      id: 3,
      title: "Phụ Tùng & Phụ Kiện",
      description:
        "Cung cấp phụ tùng chính hãng và phụ kiện đa dạng cho mọi dòng xe",
      image:
        "https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  const stats = [
    { number: "10+", label: "Năm Kinh Nghiệm" },
    { number: "5000+", label: "Xe đã bán" },
    { number: "10+", label: "Đối tác chiến lược" },
    { number: "95%", label: "Đại lý hài lòng" },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider
        slides={initialBanners?.map((b) => ({ image: b.image, link: b.link }))}
        onNavigate={handleNavigate}
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-[60px]">
            <h2 className="text-[50px] leading-[30px] text-neutral-950 mb-[55px]">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-[#4a5565] text-[16px] leading-[24px] max-w-[648px] mx-auto">
              Cung cấp xe đạp điện chất lượng cao và các dịch vụ chăm sóc khách
              hàng toàn diện, từ bán hàng đến bảo hành và sửa chữa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[216px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[#001767] text-[20px] leading-[24px] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#4a5565] text-[16px] leading-[24px] mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleNavigate("/products")}
                    className="text-[#2CA72B] text-[16px] leading-[24px] hover:underline inline-flex items-center gap-2"
                  >
                    Tìm Hiểu Thêm
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#228B22] to-[#2CA72B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-white text-[36px] leading-[40px]">
                  {stat.number}
                </p>
                <p className="text-[#bedbff] text-[16px] leading-[24px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[16px] leading-[24px] text-neutral-950 mb-4">
            Bạn Đang Tìm Nguồn Cung Xe Điện Uy Tín?
          </h2>
          <p className="text-[#4a5565] text-[16px] leading-[24px] mb-8 max-w-[662px] mx-auto">
            Hãy kết nối với chúng tôi để nhận tư vấn sản phẩm, chính sách giá sỉ
            và hỗ trợ kỹ thuật toàn diện. Đồng hành cùng hơn 20 đại lý toàn quốc
            – cùng phát triển thị trường xe điện bền vững!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#2CA72B] text-white px-8 py-3 rounded-[10px] text-[16px] leading-[24px] hover:bg-green-700 transition">
              Liên Hệ Tư Vấn
            </button>
            <button
              onClick={() => handleNavigate("/news")}
              className="bg-white text-[#2CA72B] px-8 py-3 rounded-[10px] text-[16px] leading-[24px] border border-[#2CA72B] hover:bg-green-50 transition"
            >
              Xem Tin Tức
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

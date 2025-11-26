import {
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Award,
  Globe,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: <Target size={40} />,
      title: "Chất Lượng",
      description: "Cam kết sản phẩm chất lượng cao với tiêu chuẩn quốc tế",
    },
    {
      icon: <Eye size={40} />,
      title: "Minh Bạch",
      description: "Minh bạch về nguồn gốc và chính sách giá cả",
    },
    {
      icon: <Heart size={40} />,
      title: "Khách Hàng",
      description: "Luôn đặt lợi ích khách hàng lên hàng đầu",
    },
    {
      icon: <Zap size={40} />,
      title: "Đổi Mới",
      description: "Không ngừng cải tiến công nghệ và thiết kế",
    },
  ];

  const strengths = [
    {
      icon: <Users size={32} />,
      title: "Đội Ngũ Chuyên Nghiệp",
      description:
        "Hơn 100 kỹ sư và công nhân lành nghề với kinh nghiệm trung bình 10+ năm trong lĩnh vực sản xuất và lắp ráp xe đạp điện.",
    },
    {
      icon: <Award size={32} />,
      title: "Chứng Nhận Quốc Tế",
      description:
        "Được cấp chứng nhận ISO 9001:2015 về quản lý chất lượng và chứng nhận an toàn CE, đảm bảo sản phẩm đạt chuẩn quốc tế.",
    },
    {
      icon: <Globe size={32} />,
      title: "Nhà Phân Phối Uy Tín",
      description:
        "Hợp tác với các thương hiệu linh kiện hàng đầu như Shimano, Bosch, Samsung SDI, mang đến chất lượng tốt nhất cho khách hàng.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Tăng Trưởng Vững Mạnh",
      description:
        "Tăng trưởng ổn định với hơn 5000+ xe đã bán và mạng lưới 10+ đối tác chiến lược trên toàn quốc.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="mb-4 text-[40px] leading-[24px]">Về Chúng Tôi</h1>
            <p className="text-[#4a5565] max-w-3xl mx-auto text-[18px] leading-[28px]">
              Xe Điện Sakura - Sản Xuất & Phân Phối Xe Đạp Điện
            </p>
          </div>
        </section>

        {/* Main About Content */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Nhà máy sản xuất xe đạp điện"
                className="w-full shadow-lg rounded-xl"
              />
            </div>
            <div>
              <h2 className="mb-6 text-[16px] leading-[24px]">
                Giới Thiệu Công Ty
              </h2>
              <div className="space-y-4 text-[#4a5565] text-[16px] leading-[24px]">
                <p>
                  Xe điện Sakura đã khẳng định vị thế là một trong những nhà sản
                  xuất và phân phối xe đạp điện tại Việt Nam với hơn 15 năm kinh
                  nghiệm trong ngành.
                </p>
                <p>
                  Với đội ngũ hơn kỹ sư, công nhân lành nghề, chúng tôi tự hào
                  đã sản xuất và phân phối hơn 5000+ xe đạp điện đến hàng ngàn
                  gia đình Việt Nam, mang lại giải pháp di chuyển xanh, tiết
                  kiệm và thân thiện với môi trường.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-[16px] leading-[24px]">
                Sứ Mệnh & Tầm Nhìn
              </h2>
              <div className="space-y-4 text-[#4a5565] text-[16px] leading-[24px]">
                <div>
                  <h3 className="text-[#2CA72B] text-[18px] leading-[27px] mb-2">
                    Sứ Mệnh
                  </h3>
                  <p>
                    Chúng tôi cam kết mang đến những sản phẩm xe đạp điện chất
                    lượng cao, an toàn và thân thiện với môi trường, góp phần
                    giảm thiểu ô nhiễm không khí và xây dựng một tương lai xanh
                    - sạch - bền vững cho cộng đồng.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#2CA72B] text-[18px] leading-[27px] mb-2">
                    Tầm Nhìn
                  </h3>
                  <p>
                    Chúng tôi không đặt mục tiêu trở thành lớn nhất, mà muốn trở
                    thành một thương hiệu đáng tin cậy. Bằng sự nỗ lực mỗi ngày,
                    chúng tôi hướng đến việc mang lại trải nghiệm xe điện an
                    toàn, bền bỉ và phù hợp với mọi nhu cầu di chuyển.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#2CA72B] text-[18px] leading-[27px] mb-2">
                    Giá Trị Cốt Lõi
                  </h3>
                  <p>
                    Chất lượng - Minh bạch - Khách hàng - Đổi mới. Đây là những
                    giá trị mà chúng tôi luôn đề cao và thực hiện trong mọi hoạt
                    động, từ sản xuất, phân phối đến dịch vụ chăm sóc khách
                    hàng.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Xe đạp điện hiện đại"
                className="w-full shadow-lg rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Showroom xe đạp điện"
                className="w-full shadow-lg rounded-xl"
              />
            </div>
            <div>
              <h2 className="mb-6 text-[16px] leading-[24px]">
                Quy Trình Sản Xuất & Kiểm Định
              </h2>
              <div className="space-y-4 text-[#4a5565] text-[16px] leading-[24px]">
                <p>
                  Mỗi chiếc xe đạp điện Sakura đều trải qua quy trình sản xuất
                  nghiêm ngặt với 5 công đoạn chính: thiết kế, lắp ráp khung xe,
                  lắp đặt hệ thống điện, kiểm tra chất lượng và thử nghiệm thực
                  tế.
                </p>
                <p>
                  Chúng tôi áp dụng hệ thống kiểm soát chất lượng theo tiêu
                  chuẩn ISO 9001:2015, mỗi xe đều được kiểm tra 100% các thông
                  số kỹ thuật, an toàn điện và độ bền trước khi đến tay khách
                  hàng.
                </p>
                <p>
                  Sau bán hàng, Sakura cung cấp chế độ bảo hành toàn diện trên
                  các trung tâm bảo hành trên toàn quốc, đảm bảo khách hàng luôn
                  được hỗ trợ nhanh chóng và chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-[16px] leading-[24px]">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-[#2CA72B] mb-4">{value.icon}</div>
                <h3 className="mb-3 text-[18px] leading-[27px]">
                  {value.title}
                </h3>
                <p className="text-[#4a5565] text-[16px] leading-[24px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#228B22] to-[#2CA72B] text-white p-12 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="mb-2 text-[40px] leading-[24px]">10+</div>
                <p className="text-[#bedbff] text-[16px] leading-[24px]">
                  Năm Kinh Nghiệm
                </p>
              </div>
              <div>
                <div className="mb-2 text-[40px] leading-[24px]">5000+</div>
                <p className="text-[#bedbff] text-[16px] leading-[24px]">
                  Xe Đã Bán
                </p>
              </div>
              <div>
                <div className="mb-2 text-[40px] leading-[24px]">10+</div>
                <p className="text-[#bedbff] text-[16px] leading-[24px]">
                  Đối tác chiến lược
                </p>
              </div>
              <div>
                <div className="mb-2 text-[40px] leading-[24px]">95%</div>
                <p className="text-[#bedbff] text-[16px] leading-[24px]">
                  Đại lý hài lòng
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white p-12 rounded-xl shadow-sm text-center">
            <h2 className="mb-4 text-[16px] leading-[24px]">
              Hợp Tác Cùng Chúng Tôi
            </h2>
            <p className="text-[#4a5565] text-[16px] leading-[24px] mb-6 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn chi tiết về sản phẩm, chính sách đại
              lý hoặc mua xe trả góp 0% lãi suất.
            </p>
            <button className="bg-[#2CA72B] text-white px-8 py-3 rounded-[10px] text-[16px] leading-[24px] hover:bg-green-700 transition">
              Liên Hệ Ngay
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

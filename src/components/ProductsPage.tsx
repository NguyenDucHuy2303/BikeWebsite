import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductsPageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const productLines = [
    {
      id: 1,
      name: 'Xe Đạp Điện Thành Phố',
      shortDesc: 'Di chuyển đô thị linh hoạt và tiện lợi',
      description: 'Dòng xe lý tưởng cho việc đi làm, đi học và di chuyển trong thành phố',
      image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Thiết kế nhỏ gọn', 'Pin bền 50-70km', 'Phanh đĩa an toàn', 'Giá từ 8-12 triệu']
    },
    {
      id: 2,
      name: 'Xe Đạp Điện Địa Hình',
      shortDesc: 'Khám phá mọi địa hình với sức mạnh vượt trội',
      description: 'Dòng xe với động cơ mạnh mẽ và khung xe chắc chắn',
      image: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Động cơ 500-750W', 'Pin dung lượng cao', 'Giảm sóc thủy lực', 'Giá từ 15-25 triệu']
    },
    {
      id: 3,
      name: 'Xe Đạp Điện Gấp',
      shortDesc: 'Gọn nhẹ, dễ dàng mang theo',
      description: 'Giải pháp hoàn hảo cho người đi làm và sinh viên',
      image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Gấp gọn 3 bước', 'Trọng lượng 18-22kg', 'Dễ cất giữ', 'Giá từ 9-14 triệu']
    },
    {
      id: 4,
      name: 'Xe Đạp Điện Thể Thao',
      shortDesc: 'Thiết kế năng động, hiệu suất cao',
      description: 'Dòng xe cao cấp dành cho người yêu thích tốc độ',
      image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Tốc độ tối đa 45km/h', 'Khung nhôm nhẹ', 'Thiết kế aerodynamic', 'Giá từ 18-30 triệu']
    },
    {
      id: 5,
      name: 'Xe Đạp Điện Cao Cấp',
      shortDesc: 'Sang trọng, đẳng cấp và thông minh',
      description: 'Dòng xe premium với công nghệ tiên tiến',
      image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Màn hình LCD thông minh', 'Kết nối Bluetooth', 'Pin lithium cao cấp', 'Giá từ 25-45 triệu']
    },
    {
      id: 6,
      name: 'Xe Đạp Điện Trẻ Em',
      shortDesc: 'An toàn và vui vẻ cho bé yêu',
      description: 'Thiết kế đặc biệt cho trẻ em từ 6-14 tuổi',
      image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      features: ['Giới hạn tốc độ', 'Khung thấp an toàn', 'Màu sắc đa dạng', 'Giá từ 5-8 triệu']
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Dòng Sản Phẩm Xe Đạp Điện</h1>
          <p className="text-gray-600 max-w-2xl">
            Khám phá các dòng xe đạp điện chất lượng cao của GreenBike, 
            được thiết kế để đáp ứng mọi nhu cầu di chuyển của bạn
          </p>
        </div>

        {/* Product Lines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productLines.map((line) => (
            <button
              key={line.id}
              onClick={() => onNavigate('detail', line.id)}
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
                <h3 className="mb-2 group-hover:text-gray-600 transition">{line.name}</h3>
                <p className="text-gray-600 mb-4">{line.shortDesc}</p>
                <ul className="space-y-1 mb-4">
                  {line.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-gray-500 flex items-start gap-2">
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
            Liên hệ với chúng tôi để được tư vấn chi tiết về dòng xe phù hợp 
            với nhu cầu sử dụng và ngân sách của bạn. Hỗ trợ trả góp 0% lãi suất!
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
            Liên Hệ Ngay
          </button>
        </div>
      </div>
    </div>
  );
}

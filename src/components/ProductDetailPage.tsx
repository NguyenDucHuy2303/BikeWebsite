import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailPageProps {
  productId: number;
  onNavigate: (page: string) => void;
}

export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product line data based on productId
  const productLines = [
    {
      id: 1,
      name: 'Xe Đạp Điện Thành Phố',
      tagline: 'Di Chuyển Đô Thị Linh Hoạt & Tiện Lợi',
      heroImage: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Dòng xe đạp điện thành phố GreenBike được thiết kế tối ưu cho việc di chuyển hàng ngày trong đô thị. Với khung xe nhẹ, thiết kế gọn gàng và pin bền bỉ, đây là lựa chọn hoàn hảo cho người đi làm, đi học hoặc đi chợ. Trang bị phanh đĩa an toàn, đèn LED chiếu sáng và yên xe êm ái.',
      galleryImages: [
        'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
      ],
      sections: [
        {
          title: 'Động Cơ & Hiệu Suất',
          content: 'Trang bị động cơ brushless 350W với công nghệ tiết kiệm năng lượng, cho phép tốc độ tối đa 25km/h. Hệ thống trợ lực thông minh với 3 chế độ (Eco, Normal, Sport) giúp tối ưu hóa pin theo nhu cầu sử dụng. Khả năng leo dốc lên đến 15 độ.',
          image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Pin & Tầm Hoạt Động',
          content: 'Sử dụng pin lithium 48V-12Ah của Samsung SDI, cho phép di chuyển 50-70km mỗi lần sạc đầy. Thời gian sạc nhanh chỉ 4-5 giờ. Pin được bảo vệ bằng hệ thống BMS (Battery Management System) chống quá sạc, quá phóng và ngắn mạch.',
          image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'An Toàn & Tiện Nghi',
          content: 'Hệ thống phanh đĩa cơ học trước sau đảm bảo an toàn tuyệt đối. Đèn LED chiếu sáng công suất cao, còi điện, gương chiếu hậu và giỏ đựng đồ tiện lợi. Yên xe thiết kế ergonomic êm ái cho hành trình dài.',
          image: 'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
      ],
      specifications: [
        { label: 'Động cơ', value: 'Brushless 350W, 48V' },
        { label: 'Pin', value: 'Lithium 48V-12Ah (Samsung SDI)' },
        { label: 'Tầm xa', value: '50-70km/lần sạc' },
        { label: 'Tốc độ tối đa', value: '25 km/h' },
        { label: 'Thời gian sạc', value: '4-5 giờ' },
        { label: 'Phanh', value: 'Phanh đĩa cơ học trước/sau' },
        { label: 'Khung xe', value: 'Hợp kim nhôm cao cấp' },
        { label: 'Kích thước bánh xe', value: '20 inch' },
        { label: 'Trọng lượng xe', value: '25 kg' },
        { label: 'Tải trọng tối đa', value: '120 kg' },
        { label: 'Màu sắc', value: 'Đen, Trắng, Xanh, Đỏ' },
        { label: 'Bảo hành', value: '24 tháng (Pin 12 tháng)' }
      ]
    },
    {
      id: 2,
      name: 'Xe Đạp Điện Địa Hình',
      tagline: 'Khám Phá Mọi Địa Hình Với Sức Mạnh Vượt Trội',
      heroImage: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Dòng xe đạp điện địa hình GreenBike Mountain được chế tạo cho những ai đam mê khám phá. Với động cơ mạnh mẽ 750W, pin dung lượng lớn và hệ thống giảm sóc thủy lực, chiếc xe này có thể chinh phục mọi địa hình từ đường núi, đường đất đến đường phố.',
      galleryImages: [
        'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
      ],
      sections: [
        {
          title: 'Động Cơ Mạnh Mẽ',
          content: 'Trang bị động cơ brushless 750W Bafang (Đức) với mô-men xoắn cao, cho phép leo dốc 30 độ dễ dàng. Tốc độ tối đa lên đến 35km/h. Hệ thống trợ lực PAS (Pedal Assist System) 5 cấp độ thông minh.',
          image: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Pin Dung Lượng Cao',
          content: 'Pin lithium 48V-20Ah cho phép di chuyển 80-100km mỗi lần sạc. Pin tháo rời tiện lợi, có thể sạc trực tiếp trên xe hoặc mang về nhà sạc. Tuổi thọ pin lên đến 1000 chu kỳ sạc.',
          image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Hệ Thống Giảm Sóc Cao Cấp',
          content: 'Giảm sóc thủy lực trước có khóa và giảm sóc sau hành trình 80mm, hấp thụ sóc tốt trên mọi địa hình. Lốp xe địa hình 27.5 inch chống trượt, chống đâm thủng. Phanh đĩa thủy lực Shimano cực kỳ nhạy.',
          image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
      ],
      specifications: [
        { label: 'Động cơ', value: 'Brushless 750W, 48V (Bafang)' },
        { label: 'Pin', value: 'Lithium 48V-20Ah (LG Chem)' },
        { label: 'Tầm xa', value: '80-100km/lần sạc' },
        { label: 'Tốc độ tối đa', value: '35 km/h' },
        { label: 'Thời gian sạc', value: '6-7 giờ' },
        { label: 'Phanh', value: 'Phanh đĩa thủy lực Shimano' },
        { label: 'Khung xe', value: 'Hợp kim nhôm 6061' },
        { label: 'Giảm sóc', value: 'Thủy lực trước/sau 80mm' },
        { label: 'Kích thước bánh xe', value: '27.5 inch' },
        { label: 'Trọng lượng xe', value: '28 kg' },
        { label: 'Tải trọng tối đa', value: '150 kg' },
        { label: 'Bảo hành', value: '24 tháng (Pin 18 tháng)' }
      ]
    },
    {
      id: 3,
      name: 'Xe Đạp Điện Gấp',
      tagline: 'Gọn Nhẹ, Dễ Dàng Mang Theo',
      heroImage: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'Xe đạp điện gấp GreenBike Fold là giải pháp hoàn hảo cho người đi làm, sinh viên hoặc những ai sống trong không gian nhỏ. Gấp gọn chỉ trong 3 bước đơn giản, dễ dàng mang lên xe buýt, tàu điện hoặc cất trong cốp xe ô tô.',
      galleryImages: [
        'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
      ],
      sections: [
        {
          title: 'Thiết Kế Gấp Gọn Thông Minh',
          content: 'Cơ chế gấp 3 bước đơn giản chỉ mất 10 giây. Kích thước khi gấp chỉ 80x65x40cm, dễ dàng cất gọn trong góc phòng, dưới gầm bàn hoặc trong cốp xe. Khóa gấp chắc chắn, an toàn tuyệt đối khi sử dụng.',
          image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Nhẹ Nhàng Nhưng Mạnh Mẽ',
          content: 'Trọng lượng chỉ 18kg nhưng vẫn trang bị động cơ 250W mạnh mẽ. Khung xe hợp kim nhôm cao cấp siêu nhẹ nhưng cực kỳ bền. Pin lithium 36V-10Ah giúp di chuyển 40-55km mỗi lần sạc.',
          image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Tiện Nghi & An Toàn',
          content: 'Màn hình LED hiển thị tốc độ, quãng đường và mức pin. Đèn LED tự động bật khi trời tối. Phanh đĩa cơ học nhạy, yên xe có thể điều chỉnh độ cao phù hợp với mọi lứa tuổi. Giỏ đựng đồ phía trước tiện lợi.',
          image: 'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
      ],
      specifications: [
        { label: 'Động cơ', value: 'Brushless 250W, 36V' },
        { label: 'Pin', value: 'Lithium 36V-10Ah' },
        { label: 'Tầm xa', value: '40-55km/lần sạc' },
        { label: 'Tốc độ tối đa', value: '25 km/h' },
        { label: 'Thời gian sạc', value: '3-4 giờ' },
        { label: 'Phanh', value: 'Phanh đĩa cơ học' },
        { label: 'Khung xe', value: 'Hợp kim nhôm' },
        { label: 'Kích thước bánh xe', value: '16 inch' },
        { label: 'Trọng lượng xe', value: '18 kg' },
        { label: 'Kích thước gấp', value: '80x65x40 cm' },
        { label: 'Tải trọng tối đa', value: '100 kg' },
        { label: 'Bảo hành', value: '24 tháng (Pin 12 tháng)' }
      ]
    },
    {
      id: 4,
      name: 'Xe Đạp Điện Thể Thao',
      tagline: 'Thiết Kế Năng Động, Hiệu Suất Cao',
      heroImage: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'GreenBike Sport là dòng xe đạp điện cao cấp dành cho những người yêu thích tốc độ và phong cách thể thao. Thiết kế aerodynamic giảm lực cản gió, khung xe carbon nhẹ và động cơ công suất cao mang đến trải nghiệm lái đầy phấn khích.',
      galleryImages: [
        'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
      ],
      sections: [
        {
          title: 'Hiệu Suất Vượt Trội',
          content: 'Động cơ mid-drive 500W gắn trục giữa cho khả năng tăng tốc mượt mà và hiệu quả. Tốc độ tối đa 45km/h với 5 chế độ trợ lực. Hệ thống truyền động Shimano 21 tốc độ cho phép tùy chỉnh linh hoạt.',
          image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Khung Xe Carbon Cao Cấp',
          content: 'Khung xe làm từ carbon fiber siêu nhẹ chỉ 2.5kg nhưng cực kỳ bền và cứng cáp. Thiết kế aerodynamic giảm 30% lực cản gió so với xe thông thường. Sơn UV chống trầy xước và oxy hóa.',
          image: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Công Nghệ Thông Minh',
          content: 'Màn hình LCD màu 4.3 inch hiển thị đầy đủ thông tin: tốc độ, công suất, nhịp đạp, GPS. Kết nối Bluetooth với smartphone để theo dõi lộ trình và thống kê. Cổng sạc USB tích hợp.',
          image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
      ],
      specifications: [
        { label: 'Động cơ', value: 'Mid-drive 500W, 48V (Bosch)' },
        { label: 'Pin', value: 'Lithium 48V-17.5Ah (Panasonic)' },
        { label: 'Tầm xa', value: '90-120km/lần sạc' },
        { label: 'Tốc độ tối đa', value: '45 km/h' },
        { label: 'Thời gian sạc', value: '5-6 giờ' },
        { label: 'Phanh', value: 'Phanh đĩa thủy lực Shimano' },
        { label: 'Khung xe', value: 'Carbon fiber T700' },
        { label: 'Truyền động', value: 'Shimano 21 tốc độ' },
        { label: 'Kích thước bánh xe', value: '700C (28 inch)' },
        { label: 'Trọng lượng xe', value: '19 kg' },
        { label: 'Tải trọng tối đa', value: '120 kg' },
        { label: 'Bảo hành', value: '36 tháng (Pin 18 tháng)' }
      ]
    },
    {
      id: 5,
      name: 'Xe Đạp Điện Cao Cấp',
      tagline: 'Sang Trọng, Đẳng Cấp & Thông Minh',
      heroImage: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'GreenBike Premium là đỉnh cao của công nghệ xe đạp điện với thiết kế sang trọng, vật liệu cao cấp và trang bị công nghệ tiên tiến nhất. Mỗi chiếc xe được chế tác tỉ mỉ, kết hợp hoàn hảo giữa thẩm mỹ và công năng.',
      galleryImages: [
        'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
      ],
      sections: [
        {
          title: 'Thiết Kế Sang Trọng',
          content: 'Khung xe titanium siêu nhẹ với hoàn thiện mạ chrome bóng gương. Yên da thật cao cấp Brooks England. Tay nắm da bò thật. Mỗi chi tiết đều được chế tác thủ công tinh xảo, thể hiện đẳng cấp của chủ nhân.',
          image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Công Nghệ Thông Minh Đỉnh Cao',
          content: 'Màn hình cảm ứng TFT 5 inch với hệ điều hành riêng. Kết nối 4G/5G, GPS định vị chống trộm. Cảm biến vân tay khởi động. Hệ thống đèn LED tự động thích ứng. Camera hành trình tích hợp. Điều khiển giọng nói.',
          image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Hiệu Năng Vượt Trội',
          content: 'Động cơ Bosch Performance Line CX 750W cung cấp mô-men xoắn 85Nm. Pin lithium 48V-25Ah cho tầm hoạt động lên đến 150km. Sạc nhanh 80% trong 3 giờ. Phanh ABS chống bó cứng. Giảm sóc điều chỉnh điện tử.',
          image: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
      ],
      specifications: [
        { label: 'Động cơ', value: 'Bosch Performance CX 750W' },
        { label: 'Pin', value: 'Lithium 48V-25Ah (LG)' },
        { label: 'Tầm xa', value: '120-150km/lần sạc' },
        { label: 'Tốc độ tối đa', value: '45 km/h' },
        { label: 'Thời gian sạc', value: '4-5 giờ (Sạc nhanh)' },
        { label: 'Phanh', value: 'ABS + Phanh đĩa thủy lực' },
        { label: 'Khung xe', value: 'Titanium Grade 9' },
        { label: 'Màn hình', value: 'TFT 5 inch cảm ứng' },
        { label: 'Kết nối', value: '4G/5G, GPS, Bluetooth 5.0' },
        { label: 'Trọng lượng xe', value: '22 kg' },
        { label: 'Tải trọng tối đa', value: '130 kg' },
        { label: 'Bảo hành', value: '60 tháng (Pin 24 tháng)' }
      ]
    },
    {
      id: 6,
      name: 'Xe Đạp Điện Trẻ Em',
      tagline: 'An Toàn & Vui Vẻ Cho Bé Yêu',
      heroImage: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      description: 'GreenBike Kids được thiết kế đặc biệt cho trẻ em từ 6-14 tuổi với các tính năng an toàn tối đa. Tốc độ giới hạn, khung xe thấp dễ lên xuống, phanh nhạy và màu sắc vui tươi thu hút các bé.',
      galleryImages: [
        'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1690291497543-4de63fa4fa75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
        'https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
      ],
      sections: [
        {
          title: 'An Toàn Tối Đa',
          content: 'Giới hạn tốc độ tối đa 15km/h phù hợp với trẻ em. Khung xe thấp chỉ 30cm từ mặt đất giúp bé dễ dàng đặt chân xuống. Phanh tay nhỏ gọn, nhạy phù hợp với bàn tay trẻ em. Bánh xe phụ tháo rời cho bé mới tập.',
          image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Thiết Kế Vui Tươi',
          content: 'Nhiều màu sắc rực rỡ: hồng, xanh dương, xanh lá, vàng. Họa tiết hoạt hình đáng yêu. Giỏ đựng đồ phía trước hình thú cưng. Còi xe có âm thanh vui nhộn. Đèn LED nhiều màu sắc.',
          image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        },
        {
          title: 'Phù Hợp Phát Triển',
          content: 'Yên xe và tay lái điều chỉnh chiều cao linh hoạt, phù hợp với trẻ từ 6-14 tuổi. Pin nhỏ gọn 24V-8Ah đủ cho bé đi chơi 25-35km. Trọng lượng nhẹ chỉ 15kg, bé có thể tự đẩy xe khi hết pin.',
          image: 'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
        }
      ],
      specifications: [
        { label: 'Động cơ', value: 'Brushless 150W, 24V' },
        { label: 'Pin', value: 'Lithium 24V-8Ah' },
        { label: 'Tầm xa', value: '25-35km/lần sạc' },
        { label: 'Tốc độ tối đa', value: '15 km/h (giới hạn)' },
        { label: 'Thời gian sạc', value: '2-3 giờ' },
        { label: 'Phanh', value: 'Phanh V-brake' },
        { label: 'Khung xe', value: 'Thép carbon cao cấp' },
        { label: 'Kích thước bánh xe', value: '16 inch' },
        { label: 'Trọng lượng xe', value: '15 kg' },
        { label: 'Độ tuổi phù hợp', value: '6-14 tuổi' },
        { label: 'Tải trọng tối đa', value: '60 kg' },
        { label: 'Bảo hành', value: '24 tháng (Pin 12 tháng)' }
      ]
    }
  ];

  const productLine = productLines.find(p => p.id === productId) || productLines[0];

  return (
    <div className="bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('products')}
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
            src={productLine.heroImage}
            alt={productLine.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-white mb-4 text-[24px]">{productLine.name}</h1>
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-green-500/20 border border-green-300/50 rounded-lg text-green-100 text-[14px]">
              {productLine.tagline}
            </span>
          </div>
          <p className="text-green-100 max-w-3xl">{productLine.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="mb-6 text-center hidden">Thư Viện Hình Ảnh</h2>
          
          {/* Main Selected Image */}
          <div className="mb-6">
            <ImageWithFallback
              src={productLine.galleryImages[selectedImage]}
              alt={`${productLine.name} - Hình ${selectedImage + 1}`}
              className="w-full aspect-video object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {productLine.galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-video overflow-hidden rounded-lg transition ${
                  selectedImage === index
                    ? 'ring-4 ring-green-600 shadow-lg'
                    : 'hover:ring-2 hover:ring-green-400'
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
          {productLine.sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <ImageWithFallback
                src={section.image}
                alt={section.title}
                className="w-full max-w-4xl aspect-video object-cover rounded-xl shadow-md mb-8"
              />
              <div className="max-w-3xl px-8">
                <h2 className="mb-6">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
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
              alt={`Thông số kỹ thuật ${productLine.name}`}
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
            Liên hệ với chúng tôi để được tư vấn chi tiết, lái thử miễn phí và nhận ưu đãi đặc biệt. 
            Hỗ trợ trả góp 0% lãi suất!
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

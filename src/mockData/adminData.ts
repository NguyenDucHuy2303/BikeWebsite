// Mock data for admin panel

export interface Config {
  config_id: number;
  key: string;
  value: string;
  group: 'seo' | 'contact' | 'banner';
}

export interface BikeSeries {
  series_id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Product {
  product_id: number;
  series_id: number;
  name: string;
  slug: string;
  short_description: string;
  detailed_description: string;
  is_active: boolean;
  seo_title: string;
  seo_description: string;
}

export interface ProductImage {
  image_id: number;
  product_id: number;
  url: string;
  is_main: boolean;
  sort_order: number;
}

export interface ProductSpec {
  spec_id: number;
  product_id: number;
  type: 'basic' | 'detail' | 'gach_dau_dong' | 'image_spec';
  content: string;
  sort_order: number;
}

export interface News {
  news_id: number;
  title: string;
  slug: string;
  cover_image: string;
  content: string;
  tags: string[];
  is_hidden: boolean;
  created_at: string;
  seo_title: string;
  seo_description: string;
}

export interface NewsRelated {
  related_id: number;
  news_id: number;
  related_news_id: number;
}

export interface Banner {
  id: number;
  image: string;
  link: string;
  sort_order: number;
}

// Initial mock data
export const initialConfigs: Config[] = [
  // SEO configs
  { config_id: 1, key: 'seo_title_home', value: 'GreenBike - Xe đạp điện hàng đầu Việt Nam', group: 'seo' },
  { config_id: 2, key: 'seo_description_home', value: 'Chuyên sản xuất và phân phối xe đạp điện chất lượng cao với công nghệ tiên tiến', group: 'seo' },
  { config_id: 3, key: 'seo_title_about', value: 'Về chúng tôi - GreenBike', group: 'seo' },
  { config_id: 4, key: 'seo_description_about', value: 'Tìm hiểu về GreenBike - Đơn vị tiên phong trong lĩnh vực xe đạp điện', group: 'seo' },
  { config_id: 5, key: 'seo_title_products', value: 'Sản phẩm - GreenBike', group: 'seo' },
  { config_id: 6, key: 'seo_description_products', value: 'Khám phá các dòng xe đạp điện GreenBike với đa dạng mẫu mã', group: 'seo' },
  { config_id: 7, key: 'seo_title_news', value: 'Tin tức - GreenBike', group: 'seo' },
  { config_id: 8, key: 'seo_description_news', value: 'Cập nhật tin tức mới nhất về xe đạp điện và ngành công nghiệp xanh', group: 'seo' },
  
  // Contact configs
  { config_id: 9, key: 'contact_phone_1', value: '0123 456 789', group: 'contact' },
  { config_id: 10, key: 'contact_phone_2', value: '0987 654 321', group: 'contact' },
  { config_id: 11, key: 'contact_zalo', value: '0123456789', group: 'contact' },
  { config_id: 12, key: 'contact_facebook', value: 'https://facebook.com/greenbike', group: 'contact' },
  { config_id: 13, key: 'contact_address_1', value: '123 Đường ABC, Quận 1, TP.HCM', group: 'contact' },
  { config_id: 14, key: 'contact_address_2', value: '456 Đường XYZ, Quận 3, TP.HCM', group: 'contact' },
  
];

export const initialBikeSeries: BikeSeries[] = [
  { series_id: 1, name: 'City Bike', slug: 'city-bike', description: 'Xe đạp điện dành cho di chuyển trong thành phố' },
  { series_id: 2, name: 'Mountain Bike', slug: 'mountain-bike', description: 'Xe đạp điện địa hình' },
  { series_id: 3, name: 'Folding Bike', slug: 'folding-bike', description: 'Xe đạp điện gấp gọn' },
  { series_id: 4, name: 'Sport Bike', slug: 'sport-bike', description: 'Xe đạp điện thể thao' },
  { series_id: 5, name: 'Cargo Bike', slug: 'cargo-bike', description: 'Xe đạp điện chở hàng' },
  { series_id: 6, name: 'Kids Bike', slug: 'kids-bike', description: 'Xe đạp điện trẻ em' },
];

export const initialProducts: Product[] = [
  {
    product_id: 1,
    series_id: 1,
    name: 'GreenBike City Pro',
    slug: 'greenbike-city-pro',
    short_description: 'Xe đạp điện cao cấp cho phố thị',
    detailed_description: '<p>GreenBike City Pro là dòng xe đạp điện cao cấp được thiết kế đặc biệt cho việc di chuyển trong thành phố.</p>',
    is_active: true,
    seo_title: 'GreenBike City Pro - Xe đạp điện cao cấp',
    seo_description: 'Xe đạp điện GreenBike City Pro với động cơ mạnh mẽ, thiết kế hiện đại'
  },
  {
    product_id: 2,
    series_id: 1,
    name: 'GreenBike Urban',
    slug: 'greenbike-urban',
    short_description: 'Giải pháp di chuyển thông minh',
    detailed_description: '<p>GreenBike Urban mang đến trải nghiệm di chuyển tối ưu trong môi trường đô thị.</p>',
    is_active: true,
    seo_title: 'GreenBike Urban - Xe đạp điện đô thị',
    seo_description: 'Xe đạp điện GreenBike Urban - lựa chọn hoàn hảo cho cuộc sống thành phố'
  },
];

export const initialProductImages: ProductImage[] = [
  { image_id: 1, product_id: 1, url: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800', is_main: true, sort_order: 1 },
  { image_id: 2, product_id: 1, url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800', is_main: false, sort_order: 2 },
  { image_id: 3, product_id: 2, url: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800', is_main: true, sort_order: 1 },
];

export const initialProductSpecs: ProductSpec[] = [
  { spec_id: 1, product_id: 1, type: 'gach_dau_dong', content: 'Động cơ 500W mạnh mẽ', sort_order: 1 },
  { spec_id: 2, product_id: 1, type: 'gach_dau_dong', content: 'Pin Lithium 48V-20Ah', sort_order: 2 },
  { spec_id: 3, product_id: 1, type: 'gach_dau_dong', content: 'Tầm xa lên đến 80km', sort_order: 3 },
  { spec_id: 4, product_id: 1, type: 'basic', content: 'Động cơ: 500W', sort_order: 4 },
  { spec_id: 5, product_id: 1, type: 'basic', content: 'Pin: 48V-20Ah', sort_order: 5 },
  { spec_id: 6, product_id: 1, type: 'basic', content: 'Tầm xa: 80km', sort_order: 6 },
];

export const initialNews: News[] = [
  {
    news_id: 1,
    title: 'Ra mắt dòng xe đạp điện GreenBike City Pro 2024',
    slug: 'ra-mat-dong-xe-dap-dien-greenbike-city-pro-2024',
    cover_image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800',
    content: '<p>GreenBike tự hào giới thiệu dòng xe đạp điện City Pro 2024 với nhiều cải tiến vượt trội về công nghệ và thiết kế.</p>',
    tags: ['Sản phẩm mới', 'Công nghệ', 'City Bike'],
    is_hidden: false,
    created_at: '2024-01-15T10:00:00Z',
    seo_title: 'Ra mắt GreenBike City Pro 2024',
    seo_description: 'Khám phá dòng xe đạp điện GreenBike City Pro 2024 với công nghệ tiên tiến'
  },
  {
    news_id: 2,
    title: 'Xu hướng xe đạp điện tại Việt Nam năm 2024',
    slug: 'xu-huong-xe-dap-dien-tai-viet-nam-nam-2024',
    cover_image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800',
    content: '<p>Thị trường xe đạp điện Việt Nam đang có những chuyển biến tích cực với nhiều xu hướng mới.</p>',
    tags: ['Xu hướng', 'Thị trường'],
    is_hidden: false,
    created_at: '2024-01-10T09:00:00Z',
    seo_title: 'Xu hướng xe đạp điện 2024',
    seo_description: 'Tìm hiểu xu hướng xe đạp điện tại Việt Nam năm 2024'
  },
  {
    news_id: 3,
    title: 'Bảo dưỡng xe đạp điện đúng cách',
    slug: 'bao-duong-xe-dap-dien-dung-cach',
    cover_image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800',
    content: '<p>Hướng dẫn chi tiết cách bảo dưỡng xe đạp điện để kéo dài tuổi thọ và hiệu suất sử dụng.</p>',
    tags: ['Hướng dẫn', 'Bảo dưỡng', 'Chăm sóc xe'],
    is_hidden: false,
    created_at: '2024-01-05T14:00:00Z',
    seo_title: 'Hướng dẫn bảo dưỡng xe đạp điện',
    seo_description: 'Cách bảo dưỡng xe đạp điện đúng cách và hiệu quả'
  },
];

export const initialNewsRelated: NewsRelated[] = [
  { related_id: 1, news_id: 1, related_news_id: 2 },
  { related_id: 2, news_id: 1, related_news_id: 3 },
  { related_id: 3, news_id: 2, related_news_id: 1 },
];

export const initialBanners: Banner[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    link: '/products',
    sort_order: 1
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    link: '/about',
    sort_order: 2
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    link: '/about',
    sort_order: 3
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605271864611-58dd08d10547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    link: '/products',
    sort_order: 4
  }
];

export interface PageInfo {
  page_id: number;
  name: string;
  type: string;
  url: string;
  description: string;
}

export const pageInfoList: PageInfo[] = [
  { page_id: 1, name: 'Trang chủ', type: 'Main', url: '/', description: 'Trang chủ của website' },
  { page_id: 2, name: 'Về chúng tôi', type: 'Main', url: '/about', description: 'Giới thiệu về công ty' },
  { page_id: 3, name: 'Sản phẩm', type: 'Main', url: '/products', description: 'Danh sách sản phẩm' },
  { page_id: 4, name: 'Chi tiết sản phẩm', type: 'Detail', url: '/products/:id', description: 'Trang chi tiết sản phẩm' },
  { page_id: 5, name: 'Tin tức', type: 'Main', url: '/news', description: 'Danh sách tin tức' },
  { page_id: 6, name: 'Chi tiết tin tức', type: 'Detail', url: '/news/:id', description: 'Trang chi tiết tin tức' },
];

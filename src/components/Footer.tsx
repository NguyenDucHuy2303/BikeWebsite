export function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-4 rounded-lg">
              <span className="text-[#228B22] text-[16px] leading-[24px]">CT</span>
            </div>
            <h3 className="text-white text-[16px] leading-[24px]">XE ĐIỆN SAKURA</h3>
            <p className="mt-2 text-[#99a1af] text-[16px] leading-[24px]">Công ty TNHH Thương Mại Quốc tế YATE</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Liên Kết</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Về Chúng Tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sản Phẩm & Dịch Vụ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tin Tức</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Fanpage: Xe điện Sakura</li>
              <li>Hợp tác: (+84) 0903 672 401</li>
              <li>Địa chỉ: Số 18 - Đường 15, KĐT Lovera, Phong Phú 4, Bình Hưng, TP Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Công Ty ABC. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}

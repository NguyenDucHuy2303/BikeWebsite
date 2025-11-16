import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { Footer } from "../components/Footer";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy phần sau dấu "/" trong path hiện tại (vd: /home → "home")
  const currentPage = location.pathname.replace("/", "");

  // Hàm navigate được truyền xuống Header
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <ScrollToTop />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Admin Access Button (for demo) */}
      <button
        onClick={() => navigate("/admin")}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        title="Truy cập trang quản trị"
      >
        Admin
      </button>
    </div>
  );
};

export default MainLayout;

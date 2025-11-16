import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mỗi khi pathname thay đổi → scroll về đầu trang
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Component này không render gì cả
};

export default ScrollToTop;

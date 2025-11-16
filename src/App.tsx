import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { NewsPage } from "./components/NewsPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { AdminLayout } from "./layout/AdminLayout";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminProductFormDialog } from "./components/admin/AdminProductFormDialog";
import { AdminNewsFormDialog } from "./components/admin/AdminNewsFormDialog";
import {
  initialProducts,
  initialBikeSeries,
  initialProductImages,
  initialProductSpecs,
  initialNews,
  initialNewsRelated,
  initialBanners,
  Product,
  BikeSeries,
  ProductImage,
  ProductSpec,
  News,
  NewsRelated,
  Banner,
} from "./mockData/adminData";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminNewsPage } from "./pages/AdminNewsPage";
import { AdminSeriesPage } from "./pages/AdminSeriesPage";
import { AdminProductDetailPage } from "./pages/AdminProductDetailPage";
import { AdminProductsPage } from "./pages/AdminProductsPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminNewsDetailPage } from "./pages/AdminNewsDetailPage";
import MainLayout from "./layout/MainLayout";

type PageType =
  | "home"
  | "about"
  | "products"
  | "detail"
  | "news"
  | "newsDetail";
type AdminPageType =
  | "dashboard"
  | "products"
  | "productDetail"
  | "series"
  | "news"
  | "newsDetail";

export default function App() {
  // User site state
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedProductId, setSelectedProductId] = useState<number>(1);
  const [selectedNewsId, setSelectedNewsId] = useState<number>(1);

  // Admin state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPage, setAdminPage] = useState<AdminPageType>("dashboard");
  const [adminSelectedProductId, setAdminSelectedProductId] =
    useState<number>(1);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [showProductFormDialog, setShowProductFormDialog] = useState(false);
  const [adminSelectedNewsId, setAdminSelectedNewsId] = useState<number>(1);
  const [editingNewsId, setEditingNewsId] = useState<number | null>(null);
  const [showNewsFormDialog, setShowNewsFormDialog] = useState(false);

  // Data state
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [series, setSeries] = useState<BikeSeries[]>(initialBikeSeries);
  const [productImages, setProductImages] =
    useState<ProductImage[]>(initialProductImages);
  const [productSpecs, setProductSpecs] =
    useState<ProductSpec[]>(initialProductSpecs);
  const [news, setNews] = useState<News[]>(initialNews);
  const [newsRelated, setNewsRelated] =
    useState<NewsRelated[]>(initialNewsRelated);
  const [banners, setBanners] = useState<Banner[]>(initialBanners);

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page as PageType);

    if (page === "detail" && id) {
      setSelectedProductId(id);
    }

    if (page === "newsDetail" && id) {
      setSelectedNewsId(id);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAdminNavigate = (page: string, id?: number) => {
    setAdminPage(page as AdminPageType);

    if (page === "productDetail" && id) {
      setAdminSelectedProductId(id);
    }

    if (page === "newsDetail" && id) {
      setAdminSelectedNewsId(id);
    }

    setEditingProductId(null);
    setEditingNewsId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setIsAdminMode(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setIsAdminMode(false);
    setAdminPage("dashboard");
  };

  // Product CRUD
  const handleSaveProduct = (
    product: Omit<Product, "product_id"> & { product_id?: number },
    images: Omit<ProductImage, "image_id" | "product_id">[],
    specs: Omit<ProductSpec, "spec_id" | "product_id">[]
  ) => {
    if (product.product_id) {
      // Update existing
      setProducts((prev) =>
        prev.map((p) =>
          p.product_id === product.product_id ? (product as Product) : p
        )
      );

      // Update images
      setProductImages((prev) => [
        ...prev.filter((img) => img.product_id !== product.product_id),
        ...images.map((img, index) => ({
          image_id: Date.now() + index,
          product_id: product.product_id!,
          ...img,
        })),
      ]);

      // Update specs
      setProductSpecs((prev) => [
        ...prev.filter((spec) => spec.product_id !== product.product_id),
        ...specs.map((spec, index) => ({
          spec_id: Date.now() + index,
          product_id: product.product_id!,
          ...spec,
        })),
      ]);
    } else {
      // Create new
      const newId = Math.max(...products.map((p) => p.product_id), 0) + 1;
      const newProduct = { ...product, product_id: newId } as Product;
      setProducts((prev) => [...prev, newProduct]);

      // Add images
      setProductImages((prev) => [
        ...prev,
        ...images.map((img, index) => ({
          image_id: Date.now() + index,
          product_id: newId,
          ...img,
        })),
      ]);

      // Add specs
      setProductSpecs((prev) => [
        ...prev,
        ...specs.map((spec, index) => ({
          spec_id: Date.now() + index,
          product_id: newId,
          ...spec,
        })),
      ]);
    }

    setShowProductFormDialog(false);
    setEditingProductId(null);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts((prev) => prev.filter((p) => p.product_id !== productId));
    setProductImages((prev) =>
      prev.filter((img) => img.product_id !== productId)
    );
    setProductSpecs((prev) =>
      prev.filter((spec) => spec.product_id !== productId)
    );
  };

  const handleEditProduct = (productId: number) => {
    setEditingProductId(productId);
    setShowProductFormDialog(true);
  };

  const handleAddProduct = () => {
    setEditingProductId(null);
    setShowProductFormDialog(true);
  };

  const handleViewProductDetail = (productId: number) => {
    setAdminSelectedProductId(productId);
    setAdminPage("productDetail");
  };

  // Series CRUD
  const handleAddSeries = (newSeries: Omit<BikeSeries, "series_id">) => {
    const newId = Math.max(...series.map((s) => s.series_id), 0) + 1;
    setSeries((prev) => [...prev, { ...newSeries, series_id: newId }]);
  };

  const handleEditSeries = (updatedSeries: BikeSeries) => {
    setSeries((prev) =>
      prev.map((s) =>
        s.series_id === updatedSeries.series_id ? updatedSeries : s
      )
    );
  };

  const handleDeleteSeries = (seriesId: number) => {
    setSeries((prev) => prev.filter((s) => s.series_id !== seriesId));
  };

  // News CRUD
  const handleSaveNews = (
    newsItem: Omit<News, "news_id" | "created_at"> & {
      news_id?: number;
      created_at?: string;
    }
  ) => {
    if (newsItem.news_id) {
      // Update existing
      setNews((prev) =>
        prev.map((n) =>
          n.news_id === newsItem.news_id ? (newsItem as News) : n
        )
      );
    } else {
      // Create new
      const newId = Math.max(...news.map((n) => n.news_id), 0) + 1;
      const newNews = {
        ...newsItem,
        news_id: newId,
        created_at: new Date().toISOString(),
      } as News;
      setNews((prev) => [...prev, newNews]);
    }

    setShowNewsFormDialog(false);
    setEditingNewsId(null);
  };

  const handleDeleteNews = (newsId: number) => {
    setNews((prev) => prev.filter((n) => n.news_id !== newsId));
    setNewsRelated((prev) => prev.filter((r) => r.news_id !== newsId));
  };

  const handleEditNews = (newsId: number) => {
    setEditingNewsId(newsId);
    setShowNewsFormDialog(true);
  };

  const handleAddNews = () => {
    setEditingNewsId(null);
    setShowNewsFormDialog(true);
  };

  const handleViewNewsDetail = (newsId: number) => {
    setAdminSelectedNewsId(newsId);
    setAdminPage("newsDetail");
  };

  // Banner CRUD
  const handleSaveBanners = (updatedBanners: Banner[]) => {
    setBanners(updatedBanners);
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:id" element={<NewsDetailPage />} />
      </Route>
      <Route
        path="/admin"
        element={
          <AdminLayout
            currentPage={""}
            onLogout={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      >
        <Route index element={<Navigate to="login" replace />} />
        <Route
          path="login"
          element={
            <AdminLoginPage
              onLogin={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route
          path="dashboard"
          element={
            <AdminDashboard
              totalProducts={products.length}
              totalSeries={series.length}
              totalNews={news.length}
              banners={banners}
              onNavigate={handleAdminNavigate}
              onSaveBanners={handleSaveBanners}
            />
          }
        />
      </Route>
    </Routes>
  );

  // Check if accessing admin URL
  if (window.location.pathname.startsWith("/admin") || isAdminMode) {
    if (!isAdminLoggedIn) {
      return <AdminLoginPage onLogin={handleAdminLogin} />;
    }

    return (
      <AdminLayout
        currentPage={adminPage}
        onNavigate={handleAdminNavigate}
        onLogout={handleAdminLogout}
      >
        {adminPage === "dashboard" && (
          <AdminDashboard
            totalProducts={products.length}
            totalSeries={series.length}
            totalNews={news.length}
            banners={banners}
            onNavigate={handleAdminNavigate}
            onSaveBanners={handleSaveBanners}
          />
        )}

        {adminPage === "products" && (
          <>
            <AdminProductsPage
              products={products}
              series={series}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
              onAdd={handleAddProduct}
              onViewDetail={handleViewProductDetail}
            />
            <AdminProductFormDialog
              open={showProductFormDialog}
              product={
                editingProductId
                  ? products.find((p) => p.product_id === editingProductId) ||
                    null
                  : null
              }
              series={series}
              images={productImages}
              specs={productSpecs}
              onSave={handleSaveProduct}
              onClose={() => setShowProductFormDialog(false)}
            />
          </>
        )}

        {adminPage === "productDetail" && (
          <>
            <AdminProductDetailPage
              productId={adminSelectedProductId}
              onNavigate={handleAdminNavigate}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
            <AdminProductFormDialog
              open={showProductFormDialog}
              product={
                editingProductId
                  ? products.find((p) => p.product_id === editingProductId) ||
                    null
                  : null
              }
              series={series}
              images={productImages}
              specs={productSpecs}
              onSave={handleSaveProduct}
              onClose={() => setShowProductFormDialog(false)}
            />
          </>
        )}

        {adminPage === "series" && (
          <AdminSeriesPage
            series={series}
            onAdd={handleAddSeries}
            onEdit={handleEditSeries}
            onDelete={handleDeleteSeries}
          />
        )}

        {adminPage === "news" && (
          <>
            <AdminNewsPage
              news={news}
              onEdit={handleEditNews}
              onDelete={handleDeleteNews}
              onAdd={handleAddNews}
              onViewDetail={handleViewNewsDetail}
            />
            <AdminNewsFormDialog
              open={showNewsFormDialog}
              newsItem={
                editingNewsId
                  ? news.find((n) => n.news_id === editingNewsId) || null
                  : null
              }
              onSave={handleSaveNews}
              onClose={() => setShowNewsFormDialog(false)}
            />
          </>
        )}

        {adminPage === "newsDetail" && (
          <>
            <AdminNewsDetailPage
              newsId={adminSelectedNewsId}
              onNavigate={handleAdminNavigate}
              onEdit={handleEditNews}
              onDelete={handleDeleteNews}
            />
            <AdminNewsFormDialog
              open={showNewsFormDialog}
              newsItem={
                editingNewsId
                  ? news.find((n) => n.news_id === editingNewsId) || null
                  : null
              }
              onSave={handleSaveNews}
              onClose={() => setShowNewsFormDialog(false)}
            />
          </>
        )}
      </AdminLayout>
    );
  }

  // User site
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === "home" && (
          <HomePage onNavigate={handleNavigate} banners={banners} />
        )}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "products" && (
          <ProductsPage onNavigate={handleNavigate} />
        )}
        {currentPage === "detail" && (
          <ProductDetailPage
            productId={selectedProductId}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === "news" && <NewsPage onNavigate={handleNavigate} />}
        {currentPage === "newsDetail" && (
          <NewsDetailPage newsId={selectedNewsId} onNavigate={handleNavigate} />
        )}
      </main>

      <Footer />

      {/* Admin Access Button (for demo) */}
      <button
        onClick={() => setIsAdminMode(true)}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        title="Truy cập trang quản trị"
      >
        Admin
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Product,
  BikeSeries,
  initialProductImages,
  initialProductSpecs,
} from "../mockData/adminData";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { getProducts } from "../api/productApi";
import { AdminProductFormDialog } from "../components/admin/AdminProductFormDialog";
import { getSeries } from "../api/seriesApi";
import parse from "html-react-parser";
import { renderToStaticMarkup } from "react-dom/server";

interface AdminProductsPageProps {
  series: BikeSeries[];
  onEdit: (productId: number) => void;
  onDelete: (productId: number) => void;
  onViewDetail: (productId: number) => void;
}

export function AdminProductsPage({
  series,
  onEdit,
  onDelete,
  onViewDetail,
}: AdminProductsPageProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [showProductFormDialog, setShowProductFormDialog] = useState(false);

  const handleAddProduct = () => {
    setEditingProductId(null);
    setShowProductFormDialog(true);
  };

  const handleEditProduct = (id: string) => {
    setEditingProductId(id);
    setShowProductFormDialog(true);
  };

  const handleDelete = () => {
    if (deleteId) {
      setDeleteId(null);
    }
  };

  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [showProductFormDialog]);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h1 className="mb-4">Quản Lý Sản Phẩm</h1>
              <p className="text-gray-600 max-w-2xl">
                Quản lý các sản phẩm xe đạp điện của cửa hàng. Thêm mới, chỉnh
                sửa hoặc xóa sản phẩm.
              </p>
            </div>
            <Button
              onClick={handleAddProduct}
              className="gap-2 bg-green-600 hover:bg-green-700"
            >
              <Plus className="w-4 h-4" />
              Thêm Sản Phẩm
            </Button>
          </div>

          {/* Product Lines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product?.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden relative group"
              >
                {/* Image with overlay buttons */}
                <div className="relative aspect-video overflow-hidden">
                  <button
                    onClick={() => onViewDetail(product?.id)}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={product?.techImage}
                      alt={product?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </button>

                  {/* Edit & Delete buttons overlay */}
                  <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      onClick={(e: any) => {
                        e.stopPropagation();
                        handleEditProduct(product?.id);
                        // onEdit(product?.id);
                      }}
                      className="bg-white text-green-600 hover:bg-green-50 shadow-md"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e: any) => {
                        e.stopPropagation();
                        setDeleteId(product?.id);
                      }}
                      variant="destructive"
                      className="shadow-md"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={product?.isActive ? "default" : "secondary"}
                      className={
                        product?.isActive ? "bg-green-600" : "bg-gray-500"
                      }
                    >
                      {product?.isActive ? "Hoạt động" : "Tạm ẩn"}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <button
                  onClick={() => onViewDetail(product?.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="group-hover:text-gray-600 transition">
                      {product?.name}
                    </h3>
                    <Badge variant="outline" className="ml-2 shrink-0">
                      {product?.series?.name ?? "Không rõ dòng"}
                    </Badge>
                  </div>
                  <p className="text-gray-600 line-clamp-2">
                    {(() => {
                      const div = document.createElement("div");
                      div.innerHTML = product?.description || "";
                      return div.textContent || div.innerText || "";
                    })()}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">Chưa có sản phẩm nào</p>
              <Button onClick={handleAddProduct} className="gap-2">
                <Plus className="w-4 h-4" />
                Thêm sản phẩm đầu tiên
              </Button>
            </div>
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog
          open={deleteId !== null}
          onOpenChange={() => setDeleteId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
              <AlertDialogDescription>
                Bạn có chắc chắn muốn xóa sản phẩm này? Hành động này không thể
                hoàn tác.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Hủy</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700"
              >
                Xóa
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <AdminProductFormDialog
        open={showProductFormDialog}
        product={
          editingProductId
            ? products.find((p) => p.id === editingProductId) || null
            : null
        }
        // images={initialProductImages}
        // specs={initialProductSpecs}
        onClose={() => setShowProductFormDialog(false)}
      />
    </>
  );
}

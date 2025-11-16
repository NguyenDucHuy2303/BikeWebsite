import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Product, BikeSeries } from "../mockData/adminData";
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

interface AdminProductsPageProps {
  products: Product[];
  series: BikeSeries[];
  onEdit: (productId: number) => void;
  onDelete: (productId: number) => void;
  onAdd: () => void;
  onViewDetail: (productId: number) => void;
}

export function AdminProductsPage({
  products,
  series,
  onEdit,
  onDelete,
  onAdd,
  onViewDetail,
}: AdminProductsPageProps) {
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const getSeriesName = (seriesId: number) => {
    return series.find((s) => s.series_id === seriesId)?.name || "N/A";
  };

  // Mock product images based on series
  const getProductImage = (product: Product) => {
    const images = [
      "https://images.unsplash.com/photo-1692668696893-d8e5fb0fadad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1713839603530-8a3b3120c9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ];
    return images[product.product_id % images.length];
  };

  const handleDelete = () => {
    if (deleteId) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h1 className="mb-4">Quản Lý Sản Phẩm</h1>
            <p className="text-gray-600 max-w-2xl">
              Quản lý các sản phẩm xe đạp điện của cửa hàng. Thêm mới, chỉnh sửa
              hoặc xóa sản phẩm.
            </p>
          </div>
          <Button
            onClick={onAdd}
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
              key={product.product_id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden relative group"
            >
              {/* Image with overlay buttons */}
              <div className="relative aspect-video overflow-hidden">
                <button
                  onClick={() => onViewDetail(product.product_id)}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={getProductImage(product)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>

                {/* Edit & Delete buttons overlay */}
                <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      onEdit(product.product_id);
                    }}
                    className="bg-white text-green-600 hover:bg-green-50 shadow-md"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      setDeleteId(product.product_id);
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
                    variant={product.is_active ? "default" : "secondary"}
                    className={
                      product.is_active ? "bg-green-600" : "bg-gray-500"
                    }
                  >
                    {product.is_active ? "Hoạt động" : "Tạm ẩn"}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <button
                onClick={() => onViewDetail(product.product_id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="group-hover:text-gray-600 transition">
                    {product.name}
                  </h3>
                  <Badge variant="outline" className="ml-2 shrink-0">
                    {getSeriesName(product.series_id)}
                  </Badge>
                </div>
                <p className="text-gray-600 line-clamp-2">
                  {product.short_description}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">Chưa có sản phẩm nào</p>
            <Button onClick={onAdd} className="gap-2">
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
  );
}

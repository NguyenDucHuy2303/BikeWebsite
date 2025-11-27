import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Filter,
  Calendar,
  Eye,
} from "lucide-react";
import { News } from "../mockData/adminData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
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
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AdminNewsFormDialog } from "../components/admin/AdminNewsFormDialog";
import { getNews } from "../api/newsApi";

interface AdminNewsPageProps {
  onEdit: (newsId: number) => void;
  onDelete: (newsId: number) => void;
  onViewDetail?: (newsId: number) => void;
}

export function AdminNewsPage({
  onEdit,
  onDelete,
  onViewDetail,
}: AdminNewsPageProps) {
  const [news, setNews] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [showNewsFormDialog, setShowNewsFormDialog] = useState(false);

  const handleAddNews = () => {
    setEditingNewsId(null);
    setShowNewsFormDialog(true);
  };

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "visible" && !item.isHidden) ||
      (filterStatus === "hidden" && item.isHidden);

    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // Separate featured and regular news
  const featuredNews = filteredNews.length > 0 ? filteredNews[0] : null;
  const regularNews = filteredNews.slice(1);

  const handleEditProduct = (id: string) => {
    setEditingNewsId(id);
    setShowNewsFormDialog(true);
  };

  const fetchNews = async () => {
    try {
      const res = await getNews();
      setNews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [showNewsFormDialog]);
  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2>Quản lý Tin tức</h2>
            <p className="text-gray-500">Quản lý bài viết tin tức và sự kiện</p>
          </div>
          <Button onClick={handleAddNews} className="gap-2">
            <Plus className="w-4 h-4" />
            Thêm tin tức
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <h3>Bộ lọc & Tìm kiếm</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm">Tìm kiếm</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Tìm theo tiêu đề, nội dung..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Trạng thái</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="visible">Đang hiển thị</SelectItem>
                  <SelectItem value="hidden">Đã ẩn</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-gray-600">
          Hiển thị {filteredNews.length} / {news.length} bài viết
        </div>

        {filteredNews.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center text-gray-500">
            Không tìm thấy tin tức nào
          </div>
        ) : (
          <>
            {/* Featured News */}
            {featuredNews && (
              <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <ImageWithFallback
                    src={featuredNews.coverImage}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      {featuredNews.tags && featuredNews.tags.length > 0 && (
                        <Badge className="bg-green-600 text-white">
                          {featuredNews.tags[0]}
                        </Badge>
                      )}
                      <Badge
                        variant={
                          featuredNews.isHidden ? "secondary" : "default"
                        }
                      >
                        {featuredNews.isHidden ? "Đã ẩn" : "Hiển thị"}
                      </Badge>
                    </div>

                    <h2 className="mb-4">{featuredNews.title}</h2>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredNews.content
                        .replace(/<[^>]*>/g, "")
                        .substring(0, 200)}
                      ...
                    </p>

                    <div className="flex items-center gap-6 text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{formatDate(featuredNews.created_at)}</span>
                      </div>
                    </div>

                    {featuredNews.tags && featuredNews.tags.length > 1 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredNews.tags
                          .slice(1)
                          .map((tag: any, idx: number) => (
                            <Badge key={idx} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {onViewDetail && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => onViewDetail(featuredNews.id)}
                      className="gap-2 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      Xem
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleEditProduct(featuredNews.id)}
                    className="gap-2 shadow-lg"
                  >
                    <Pencil className="w-4 h-4" />
                    Sửa
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => setDeleteId(featuredNews.id)}
                    className="gap-2 shadow-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                    Xóa
                  </Button>
                </div>
              </div>
            )}

            {/* News Grid */}
            {regularNews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map((newsItem) => (
                  <div
                    key={newsItem.id}
                    className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition group overflow-hidden"
                  >
                    <ImageWithFallback
                      src={newsItem.coverImage}
                      alt={newsItem.title}
                      className="w-full aspect-video object-cover"
                    />

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {newsItem.tags && newsItem.tags.length > 0 && (
                          <Badge variant="outline" className="text-xs">
                            {newsItem.tags[0]}
                          </Badge>
                        )}
                        <Badge
                          variant={newsItem.isHidden ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {newsItem.isHidden ? "Đã ẩn" : "Hiển thị"}
                        </Badge>
                      </div>

                      <h3 className="mb-3 line-clamp-2">{newsItem.title}</h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {newsItem.content
                          .replace(/<[^>]*>/g, "")
                          .substring(0, 100)}
                        ...
                      </p>

                      <div className="flex items-center gap-4 text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span className="text-sm">
                            {formatDate(newsItem.createdAt)}
                          </span>
                        </div>
                      </div>

                      {newsItem.tags && newsItem.tags.length > 1 && (
                        <div className="flex flex-wrap gap-1">
                          {newsItem.tags
                            .slice(1, 3)
                            .map((tag: any, idx: number) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          {newsItem.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{newsItem.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons Overlay */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {onViewDetail && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => onViewDetail(newsItem.id)}
                          className="shadow-lg"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => onEdit(newsItem.id)}
                        className="shadow-lg"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => setDeleteId(newsItem.id)}
                        className="shadow-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Delete Confirmation Dialog */}
        <AlertDialog
          open={deleteId !== null}
          onOpenChange={() => setDeleteId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
              <AlertDialogDescription>
                Bạn có chắc chắn muốn xóa bài viết này? Hành động này không thể
                hoàn tác.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Hủy</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  if (deleteId) {
                    onDelete(deleteId);
                    setDeleteId(null);
                  }
                }}
                className="bg-red-600 hover:bg-red-700"
              >
                Xóa
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <AdminNewsFormDialog
        open={showNewsFormDialog}
        newsItem={
          editingNewsId
            ? news.find((n) => n.id === editingNewsId) || null
            : null
        }
        onClose={() => setShowNewsFormDialog(false)}
      />
    </>
  );
}

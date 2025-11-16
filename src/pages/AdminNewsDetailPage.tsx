import { ChevronLeft, Calendar, Tag, Pencil, Trash2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
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
import { useState } from "react";

interface AdminNewsDetailPageProps {
  newsId: number;
  onNavigate: (page: string) => void;
  onEdit: (newsId: number) => void;
  onDelete: (newsId: number) => void;
}

export function AdminNewsDetailPage({
  newsId,
  onNavigate,
  onEdit,
  onDelete,
}: AdminNewsDetailPageProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Mock news data - In real app, fetch from props or data source
  const newsData = [
    {
      id: 1,
      title: "Ra Mắt Dòng Xe Đạp Điện Thể Thao GreenBike Sport 2024",
      category: "Sản Phẩm Mới",
      date: "05/10/2024",
      author: "Nguyễn Văn Minh",
      image:
        "https://images.unsplash.com/photo-1673969206245-7da3eb7cde76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      excerpt:
        "GreenBike tự hào giới thiệu dòng xe đạp điện thể thao mới với động cơ 500W",
      content: `
        <p>Ngày 05/10/2024, GreenBike đã chính thức ra mắt dòng xe đạp điện thể thao GreenBike Sport 2024 với nhiều cải tiến đột phá về thiết kế, công nghệ và hiệu suất. Đây là kết quả của quá trình nghiên cứu và phát triển kéo dài 18 tháng, với sự tham gia của đội ngũ kỹ sư hàng đầu.</p>
        
        <h3>Những Tính Năng Nổi Bật</h3>
        <p>Dòng xe đạp điện thể thao mới mang đến nhiều tính năng vượt trội:</p>
        <ul>
          <li><strong>Động cơ mid-drive 500W Bosch:</strong> Gắn trục giữa cho khả năng tăng tốc mượt mà, tốc độ tối đa 45km/h.</li>
          <li><strong>Khung carbon fiber T700:</strong> Siêu nhẹ chỉ 19kg, thiết kế aerodynamic giảm 30% lực cản gió.</li>
          <li><strong>Pin Panasonic 48V-17.5Ah:</strong> Tầm xa lên đến 120km, sạc nhanh 80% trong 3 giờ.</li>
          <li><strong>Màn hình LCD 4.3 inch:</strong> Hiển thị đầy đủ thông tin, kết nối Bluetooth với smartphone.</li>
          <li><strong>Phanh đĩa thủy lực Shimano:</strong> An toàn tuyệt đối ngay cả ở tốc độ cao.</li>
        </ul>
        
        <h3>Giá Bán & Ưu Đãi</h3>
        <p>GreenBike Sport 2024 có giá từ 18-30 triệu tùy phiên bản. Đặc biệt, trong tháng 10/2024, khách hàng mua xe sẽ được:</p>
        <ul>
          <li>Giảm giá 15% cho 100 khách hàng đầu tiên</li>
          <li>Tặng bộ phụ kiện cao cấp trị giá 3 triệu đồng</li>
          <li>Hỗ trợ trả góp 0% lãi suất trong 12 tháng</li>
          <li>Bảo hành 36 tháng (pin 18 tháng)</li>
        </ul>
        
        <h3>Phản Hồi Từ Khách Hàng</h3>
        <p>Anh Trần Minh Tuấn - VĐV xe đạp chuyên nghiệp, một trong những người đầu tiên trải nghiệm GreenBike Sport 2024 chia sẻ: "Đây là chiếc xe đạp điện thể thao tốt nhất tôi từng sử dụng. Khung carbon cực kỳ nhẹ, tăng tốc nhanh, và pin bền bỉ. Hoàn hảo cho cả tập luyện và giải trí."</p>
      `,
      tags: ["Xe đạp điện", "Sản phẩm mới", "GreenBike Sport"],
      isHidden: false,
    },
  ];

  const news = newsData.find((n) => n.id === newsId) || newsData[0];

  const handleDelete = () => {
    onDelete(newsId);
    onNavigate("news");
  };

  return (
    <div className="pb-12">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => onNavigate("news")}
          className="gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Quay lại danh sách
        </Button>
      </div>

      {/* Hero Section with Admin Actions */}
      <div className="relative bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <ImageWithFallback
          src={news.image}
          alt={news.title}
          className="w-full h-[400px] object-cover"
        />

        {/* Admin Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <Button onClick={() => onEdit(newsId)} className="gap-2 shadow-lg">
            <Pencil className="w-4 h-4" />
            Chỉnh sửa
          </Button>
          <Button
            variant="destructive"
            onClick={() => setShowDeleteDialog(true)}
            className="gap-2 shadow-lg"
          >
            <Trash2 className="w-4 h-4" />
            Xóa
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-green-600 text-white">{news.category}</Badge>
              <Badge variant={news.isHidden ? "secondary" : "default"}>
                {news.isHidden ? "Đã ẩn" : "Hiển thị"}
              </Badge>
            </div>
            <h1 className="text-white mb-4">{news.title}</h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{news.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {/* Meta Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </div>

        {/* Admin Notes Section */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-green-900 mb-2">Ghi chú quản trị</h3>
          <p className="text-green-700 text-sm">
            Bài viết này có thể được chỉnh sửa hoặc xóa bằng các nút ở phía
            trên. Sau khi chỉnh sửa, thay đổi sẽ được áp dụng ngay lập tức trên
            trang khách hàng.
          </p>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa bài viết "{news.title}"? Hành động này
              không thể hoàn tác.
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

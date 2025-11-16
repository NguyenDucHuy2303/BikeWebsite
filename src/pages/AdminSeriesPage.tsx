import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { BikeSeries } from "../mockData/adminData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
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
import { Alert, AlertDescription } from "../components/ui/alert";

interface AdminSeriesPageProps {
  series: BikeSeries[];
  onAdd: (series: Omit<BikeSeries, "series_id">) => void;
  onEdit: (series: BikeSeries) => void;
  onDelete: (seriesId: number) => void;
}

export function AdminSeriesPage({
  series,
  onAdd,
  onEdit,
  onDelete,
}: AdminSeriesPageProps) {
  const [editSeries, setEditSeries] = useState<BikeSeries | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    series_id: 0,
    slug: "",
  });

  const resetForm = () => {
    setFormData({ name: "", description: "", series_id: 0, slug: "" });
    setEditSeries(null);
    setIsAdding(false);
  };

  const handleEdit = (s: BikeSeries) => {
    setEditSeries(s);
    setFormData({
      name: s.name,
      description: s.description,
      series_id: s.series_id,
      slug: s.slug,
    });
  };

  const handleSave = () => {
    if (editSeries) {
      onEdit({ ...editSeries, ...formData });
    } else {
      onAdd(formData);
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    resetForm();
  };

  const handleDelete = (id: number) => {
    onDelete(id);
    setDeleteId(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2>Quản lý Dòng xe</h2>
          <p className="text-gray-500">Quản lý các dòng xe đạp điện</p>
        </div>
        <Button onClick={() => setIsAdding(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Thêm dòng xe
        </Button>
      </div>

      {showSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Thao tác thành công!
          </AlertDescription>
        </Alert>
      )}

      {/* Series Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách Dòng xe</CardTitle>
          <CardDescription>Tổng cộng {series.length} dòng xe</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Tên dòng xe</TableHead>
                  <TableHead>Mô tả</TableHead>
                  <TableHead className="w-32">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {series.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-8 text-gray-500"
                    >
                      Chưa có dòng xe nào
                    </TableCell>
                  </TableRow>
                ) : (
                  series.map((s) => (
                    <TableRow key={s.series_id}>
                      <TableCell>#{s.series_id}</TableCell>
                      <TableCell>{s.name}</TableCell>
                      <TableCell className="max-w-xs truncate text-gray-500">
                        {s.description}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(s)}
                            title="Sửa"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteId(s.series_id)}
                            title="Xóa"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isAdding || editSeries !== null} onOpenChange={resetForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editSeries ? "Sửa dòng xe" : "Thêm dòng xe mới"}
            </DialogTitle>
            <DialogDescription>Nhập thông tin dòng xe</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Tên dòng xe *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="VD: City Bike"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Mô tả</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={3}
                placeholder="Mô tả về dòng xe..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={resetForm}>
              <X className="w-4 h-4 mr-2" />
              Hủy
            </Button>
            <Button onClick={handleSave} disabled={!formData.name.trim()}>
              <Save className="w-4 h-4 mr-2" />
              Lưu
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog
        open={deleteId !== null}
        onOpenChange={() => setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc chắn muốn xóa dòng xe này? Hành động này không thể
              hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
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

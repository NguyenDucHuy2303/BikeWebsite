import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Plus, X, Save } from "lucide-react";
import {
  Product,
  ProductImage,
  ProductSpec,
  BikeSeries,
} from "../../mockData/adminData";
import { Alert, AlertDescription } from "../ui/alert";
import { ImageUpload } from "./ImageUpload";
import { MultiImageUpload } from "./MultiImageUpload";
import { RichTextEditor } from "./RichTextEditor";
import { ScrollArea } from "../ui/scroll-area";
import { getSeries } from "../../api/seriesApi";
import {
  createProduct,
  getProductById,
  updateProduct,
} from "../../api/productApi";
import { FlexibleImageUpload } from "./ImageFile";

function base64ToFile(base64: string, filename: string): File {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) u8arr[n] = bstr.charCodeAt(n);
  return new File([u8arr], filename, { type: mime });
}

interface AdminProductFormDialogProps {
  open: boolean;
  product: any | null;
  onClose: () => void;
}

export function AdminProductFormDialog({
  open,
  product,
  onClose,
}: AdminProductFormDialogProps) {
  const [serires, setSerires] = useState<any[]>([]);
  const [formData, setFormData] = useState<Omit<any, "id"> & { id?: number }>(
    product || {
      seriesId: "",
      name: "",
      shortDesc: "",
      description: "",
      isActive: true,
    }
  );

  const [galleryImages, setGalleryImages] = useState<File[]>(
    product?.galleryImages || []
  );
  const [techImage, setTechImage] = useState<File[]>(
    product?.techImage ? [product?.techImage] : []
  );
  const [sectionsImage, setSectionsImage] = useState<File[] | string[]>(
    product?.sectionsImages || []
  );
  const [features, setFeatures] = useState<string[]>(["", "", ""]);
  const [sections, setSections] = useState<
    { title: string; description: string; image: File[] }[]
  >([{ title: "", description: "", image: [] }]);
  const [specifications, setSpecifications] = useState<
    { title: string; description: string }[]
  >([{ title: "", description: "" }]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Auto-generate slug from name
    if (formData.name && !product) {
      const slug = formData.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setFormData((prev) => ({ ...prev, slug }));
    }
  }, [formData.name, product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("seriesId", formData.seriesId);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("shortDesc", formData.shortDesc);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("isActive", formData.isActive);
    formDataToSend.append(
      "features",
      JSON.stringify(features.filter((p) => p.trim() !== ""))
    );
    const stringValues: string[] = [];
    const imageValues: File[] = [];

    sections.forEach((section, index) => {
      stringValues.push(section.title);
      stringValues.push(section.description);
      if (section.image && section.image.length > 0) {
        section.image.forEach((file) => imageValues.push(file));
      } else if (sectionsImage[index]) {
        imageValues.push(sectionsImage[index] as File);
      }
    });

    formDataToSend.append("sections", JSON.stringify(sections));
    [...imageValues].forEach((file) =>
      formDataToSend.append("sectionsImages", file)
    );

    [...techImage].forEach((file) => formDataToSend.append("techImage", file));
    [...galleryImages].forEach((file) =>
      formDataToSend.append("galleryImages", file)
    );
    if (!product) {
      const res = await createProduct(formDataToSend);
    } else {
      const res = await updateProduct(product.id, formDataToSend);
    }
    // window.location.reload();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1500);
  };

  const fetchSerires = async () => {
    try {
      const res = await getSeries();
      setSerires(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSerires();
  }, []);

  useEffect(() => {
    if (serires.length > 0) {
      if (product) {
        // Edit mode
        setFormData((prev) => ({
          ...prev,
          seriesId: product?.series?.id?.toString() || "",
          name: product?.name,
          shortDesc: product?.shortDesc,
          description: product?.description,
          isActive: product?.isActive,
        }));
        setFeatures(product?.features || ["", "", ""]);

        const filesFromBE = product?.galleryImages
          ? product?.galleryImages.map((b64: any, i: number) =>
              base64ToFile(
                `data:image/png;base64,${b64 || ""}`,
                `image-${i + 1}.png`
              )
            )
          : [];
        const filesFromBETechImage = product?.techImage
          ? [product?.techImage].map((b64: any, i: number) =>
              base64ToFile(
                `data:image/png;base64,${b64 || ""}`,
                `image-${i}.png`
              )
            )
          : [];
        const filesFromBESectionImage = product?.sectionsImages
          ? product.sectionsImages.map((b64: string, i: number) =>
              base64ToFile(
                `data:image/png;base64,${b64}`,
                `image-${i + 10}.png`
              )
            )
          : [];
        setGalleryImages(filesFromBE || []);
        setSectionsImage(filesFromBESectionImage || []);
        setTechImage(filesFromBETechImage || []);
        const updatedSections = product.sections.map(
          (section: any, i: number) => ({
            ...section,
            image: filesFromBESectionImage[i]
              ? [filesFromBESectionImage[i]]
              : [],
          })
        );
        setSections(updatedSections);
      } else {
        setFormData((prev) => ({
          ...prev,
          seriesId: prev.seriesId || serires[0]?.id?.toString() || "",
        }));
      }
    }
  }, [serires, product]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:!w-[90vw] sm:!max-w-[90vw] md:!w-[85vw] md:!max-w-[85vw] lg:!w-[80vw] lg:!max-w-[80vw] xl:!w-[85vw] xl:!max-w-[85vw] 2xl:!w-[90vw] 2xl:!max-w-[1800px] max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>
            {product ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
          </DialogTitle>
          <DialogDescription>
            Nhập thông tin chi tiết sản phẩm
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)] px-6">
          <form onSubmit={handleSubmit} className="space-y-6 pb-6">
            {showSuccess && (
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  Lưu sản phẩm thành công!
                </AlertDescription>
              </Alert>
            )}

            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-[16px]">Thông tin cơ bản</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Tên sản phẩm *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="VD: GreenBike City Pro"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="series">Dòng xe *</Label>
                <Select
                  value={formData.seriesId.toString()}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, seriesId: value })
                  }
                >
                  <SelectTrigger id="series">
                    <SelectValue placeholder="Chọn dòng xe" />
                  </SelectTrigger>
                  <SelectContent>
                    {serires.map((s) => (
                      <SelectItem key={s.id} value={s.id.toString()}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDesc">Mô tả ngắn *</Label>
                <Textarea
                  id="shortDesc"
                  value={formData.shortDesc}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      shortDesc: e.target.value,
                    })
                  }
                  required
                  rows={3}
                  placeholder="Mô tả ngắn gọn về sản phẩm..."
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked: any) =>
                    setFormData({ ...formData, isActive: checked })
                  }
                />
                <Label htmlFor="isActive">Hiển thị sản phẩm</Label>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <h3 className="text-[16px]">Hình ảnh sản phẩm</h3>
              <p className="text-sm text-gray-500">
                Thêm nhiều hình ảnh cho sản phẩm (chọn ảnh chính)
              </p>
              <FlexibleImageUpload
                value={galleryImages}
                onChange={setGalleryImages}
                multiple
              />
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h3 className="text-[16px]">Mô tả chi tiết</h3>
              <p className="text-sm text-gray-500">
                Sử dụng trình soạn thảo để định dạng nội dung
              </p>
              <RichTextEditor
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
                placeholder="Nhập mô tả chi tiết về sản phẩm..."
              />
            </div>

            {/* Specs */}
            <div className="space-y-4">
              <h3 className="text-[16px]">Thông tin sản phẩm</h3>

              {/* Bullet points */}
              <div className="space-y-3">
                <Label>Điểm nổi bật (gạch đầu dòng)</Label>
                <p className="text-sm text-gray-500">
                  Nhập các điểm nổi bật của sản phẩm
                </p>
                {features.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={point}
                      onChange={(e) => {
                        const updated = [...features];
                        updated[index] = e.target.value;
                        setFeatures(updated);
                      }}
                      placeholder={`Điểm nổi bật ${index + 1}...`}
                    />
                    {features.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setFeatures(features.filter((_, i) => i !== index))
                        }
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setFeatures([...features, ""])}
                  className="gap-2"
                  size="sm"
                >
                  <Plus className="w-4 h-4" />
                  Thêm điểm nổi bật
                </Button>
                {sections.map((point, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border p-3 rounded-md"
                  >
                    {/* Title */}
                    <Input
                      value={point.title}
                      onChange={(e) => {
                        const updated = [...sections];
                        updated[index].title = e.target.value;
                        setSections(updated);
                      }}
                      placeholder={`Tiêu đề ${index + 1}...`}
                    />

                    {/* Description */}
                    <Input
                      value={point.description}
                      onChange={(e) => {
                        const updated = [...sections];
                        updated[index].description = e.target.value;
                        setSections(updated);
                      }}
                      placeholder={`Mô tả ${index + 1}...`}
                    />
                    {sectionsImage && sectionsImage[index] && (
                      <img
                        src={URL.createObjectURL(sectionsImage[index] as any)}
                        alt={`Preview ${index}`}
                        className="w-full h-40 object-cover rounded-lg border"
                      />
                    )}

                    {/* Image */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;

                        // Cập nhật sections
                        const updatedSections = [...sections];
                        updatedSections[index].image = file ? [file] : [];
                        setSections(updatedSections);

                        // Cập nhật sectionsImage để render preview

                        const updatedSectionsImage = [...sectionsImage];
                        updatedSectionsImage[index] = file!; // file chắc chắn có, không gán null
                        setSectionsImage(updatedSectionsImage as any);
                      }}
                    />

                    {/* Xóa */}
                    {sections.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setSections(sections.filter((_, i) => i !== index))
                        }
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2"
                  size="sm"
                  onClick={() =>
                    setSections([
                      ...sections,
                      { title: "", description: "", image: [] },
                    ])
                  }
                >
                  <Plus className="w-4 h-4" />
                  Thêm sections
                </Button>
              </div>

              {/* Spec Image */}
              <div className="space-y-2">
                <Label>Ảnh thông số kỹ thuật</Label>
                <p className="text-sm text-gray-500">
                  Tải lên 1 ảnh chi tiết các thông số kỹ thuật của sản phẩm
                </p>
                <FlexibleImageUpload
                  value={techImage}
                  onChange={setTechImage}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-2 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Hủy
              </Button>
              <Button type="submit" className="gap-2">
                <Save className="w-4 h-4" />
                Lưu sản phẩm
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

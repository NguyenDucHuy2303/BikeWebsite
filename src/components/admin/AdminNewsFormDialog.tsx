import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Save, Plus, X } from "lucide-react";
import { News } from "../../mockData/adminData";
import { ImageUpload } from "./ImageUpload";
import { RichTextEditor } from "./RichTextEditor";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { FlexibleImageUpload } from "./ImageFile";
import { createNew, updateNew } from "../../api/newsApi";
function base64ToFile(base64: string, filename: string): File {
  let mime = "image/png";
  let b64Data = base64;

  if (base64.includes(",")) {
    const arr = base64.split(",");
    mime = arr[0].match(/:(.*?);/)![1];
    b64Data = arr[1];
  }

  const bstr = atob(b64Data);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) u8arr[n] = bstr.charCodeAt(n);
  return new File([u8arr], filename, { type: mime });
}

interface AdminNewsFormDialogProps {
  open: boolean;
  newsItem: any | null;
  onClose: () => void;
}

export function AdminNewsFormDialog({
  open,
  newsItem,
  onClose,
}: AdminNewsFormDialogProps) {
  console.log("newsItem", newsItem);

  const [image, setImage] = useState<File[]>([]);
  const [formData, setFormData] = useState<Partial<any>>({
    id: newsItem?.id,
    title: newsItem?.title || "",
    slug: newsItem?.slug || "",
    content: newsItem?.content || "",
    tags: newsItem?.tags || [],
    isHidden: newsItem?.isHidden ?? false,
    seoRitle: newsItem?.seoRitle || "",
    seoDescription: newsItem?.seoDescription || "",
  });

  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (newsItem) {
      setFormData({
        id: newsItem.id,
        title: newsItem.title,
        slug: newsItem.slug,
        content: newsItem.content,
        tags: newsItem.tags,
        isHidden: newsItem.isHidden,
        seoRitle: newsItem.seoRitle,
        seoDescription: newsItem.seoDescription,
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        coverImage: "",
        content: "",
        tags: [],
        isHidden: false,
        seoRitle: "",
        seoDescription: "",
      });
    }
    setTagInput("");
  }, [newsItem, open]);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !newsItem) {
      const slug = formData.title
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
  }, [formData.title, newsItem]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
    console.log("newsItem", newsItem);
    const formDataToSend = new FormData();
    if (formData.id) {
      formDataToSend.append("id", formData.id);
    }
    formDataToSend.append("title", formData.title || "");
    formDataToSend.append("slug", formData.slug || "");
    formDataToSend.append("content", formData.content || "");
    formDataToSend.append("isHidden", String(formData.isHidden || false));
    formDataToSend.append("seoRitle", formData.seoRitle || "");
    formDataToSend.append("tags", JSON.stringify(formData.tags || []));
    [...image].forEach((file) => formDataToSend.append("coverImage", file));

    if (newsItem && newsItem?.id) {
      // Có ID → update
      const res = await updateNew(newsItem?.id, formDataToSend);
    } else {
      // Không có ID → create
      const res = await createNew(formDataToSend);
    }

    onClose();
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter((tag: any) => tag !== tagToRemove) || [],
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  useEffect(() => {
    if (newsItem?.coverImage) {
      const coverImagesArray = Array.isArray(newsItem.coverImage)
        ? newsItem.coverImage
        : [newsItem.coverImage];

      const filesFromImage = coverImagesArray
        .filter(Boolean) // loại bỏ undefined/null
        .map((b64: string, i: number) =>
          base64ToFile(
            b64.startsWith("data:") ? b64 : `data:image/png;base64,${b64}`,
            `image-${i + 1}.png`
          )
        );

      setImage(filesFromImage);
    } else {
      setImage([]);
    }
  }, [newsItem]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:!w-[90vw] max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>
            {newsItem ? "Sửa tin tức" : "Thêm tin tức mới"}
          </DialogTitle>
          <DialogDescription>Nhập thông tin bài viết</DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)] px-6">
          <form onSubmit={handleSubmit} className="space-y-6 pb-6">
            {/* Basic Information */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-lg border">
              <h3>Thông tin cơ bản</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2 lg:col-span-2">
                  <Label htmlFor="title">Tiêu đề bài viết *</Label>
                  <Input
                    id="title"
                    value={formData.title || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                    placeholder="VD: Ra mắt dòng xe đạp điện mới..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL)</Label>
                  <Input
                    id="slug"
                    value={formData.slug || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    placeholder="ra-mat-dong-xe-dap-dien-moi"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverImage">Ảnh bìa *</Label>
                  <FlexibleImageUpload
                    value={image || []}
                    onChange={setImage}
                  />
                </div>

                {/* Tags */}
                <div className="space-y-2 lg:col-span-2">
                  <Label>Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Nhập tag và nhấn Enter"
                    />
                    <Button
                      type="button"
                      onClick={handleAddTag}
                      variant="outline"
                      className="gap-2 shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                      Thêm
                    </Button>
                  </div>
                  {formData.tags && formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 p-3 bg-white rounded-lg border w-full">
                      {formData.tags.map((tag: any, index: number) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="gap-2 px-3 py-1"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="hover:text-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Is Hidden */}
                <div className="flex items-center gap-2 lg:col-span-2">
                  <Switch
                    id="isHidden"
                    checked={formData.isHidden || false}
                    onCheckedChange={(checked: any) =>
                      setFormData({ ...formData, isHidden: checked })
                    }
                  />
                  <Label htmlFor="isHidden">Ẩn bài viết</Label>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-lg border">
              <h3>Nội dung bài viết</h3>
              <RichTextEditor
                value={formData.content || ""}
                onChange={(value) =>
                  setFormData({ ...formData, content: value })
                }
                placeholder="Nhập nội dung bài viết..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Hủy
              </Button>
              <Button type="submit" className="gap-2">
                <Save className="w-4 h-4" />
                Lưu tin tức
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

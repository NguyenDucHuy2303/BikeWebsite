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

interface AdminNewsFormDialogProps {
  open: boolean;
  newsItem: News | null;
  onSave: (
    news: Omit<News, "news_id" | "created_at"> & {
      news_id?: number;
      created_at?: string;
    }
  ) => void;
  onClose: () => void;
}

export function AdminNewsFormDialog({
  open,
  newsItem,
  onSave,
  onClose,
}: AdminNewsFormDialogProps) {
  const [formData, setFormData] = useState<
    Omit<News, "news_id" | "created_at"> & {
      news_id?: number;
      created_at?: string;
    }
  >({
    news_id: newsItem?.news_id,
    title: newsItem?.title || "",
    slug: newsItem?.slug || "",
    cover_image: newsItem?.cover_image || "",
    content: newsItem?.content || "",
    tags: newsItem?.tags || [],
    is_hidden: newsItem?.is_hidden ?? false,
    created_at: newsItem?.created_at,
  });

  const [tagInput, setTagInput] = useState("");

  // Update form when newsItem changes
  useEffect(() => {
    if (newsItem) {
      setFormData({
        news_id: newsItem.news_id,
        title: newsItem.title,
        slug: newsItem.slug,
        cover_image: newsItem.cover_image,
        content: newsItem.content,
        tags: newsItem.tags,
        is_hidden: newsItem.is_hidden,
        created_at: newsItem.created_at,
        seo_title: newsItem.seo_title,
        seo_description: newsItem.seo_description,
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        cover_image: "",
        content: "",
        tags: [],
        is_hidden: false,
        seo_title: "",
        seo_description: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:!w-[90vw] sm:!max-w-[90vw] md:!w-[85vw] md:!max-w-[85vw] lg:!w-[80vw] lg:!max-w-[80vw] xl:!w-[85vw] xl:!max-w-[85vw] 2xl:!w-[90vw] 2xl:!max-w-[1800px] max-h-[90vh] p-0">
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
                    value={formData.title}
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
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    placeholder="ra-mat-dong-xe-dap-dien-moi"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cover_image">Ảnh bìa *</Label>
                  <ImageUpload
                    value={formData.cover_image}
                    onChange={(url) =>
                      setFormData({ ...formData, cover_image: url })
                    }
                  />
                </div>

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
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 p-3 bg-white rounded-lg border">
                      {formData.tags.map((tag, index) => (
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

                <div className="flex items-center gap-2 lg:col-span-2">
                  <Switch
                    id="is_hidden"
                    checked={formData.is_hidden}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, is_hidden: checked })
                    }
                  />
                  <Label htmlFor="is_hidden">Ẩn bài viết</Label>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-lg border">
              <h3>Nội dung bài viết</h3>
              <RichTextEditor
                value={formData.content}
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

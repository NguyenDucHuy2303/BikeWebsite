import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { ArrowLeft, Save, Plus, X } from 'lucide-react';
import { News } from '../../mockData/adminData';
import { Alert, AlertDescription } from '../ui/alert';
import { ImageUpload } from './ImageUpload';
import { RichTextEditor } from './RichTextEditor';
import { Badge } from '../ui/badge';

interface AdminNewsFormProps {
  newsItem: News | null;
  onSave: (
    news: Omit<News, 'news_id' | 'created_at'> & { news_id?: number, created_at?: string }
  ) => void;
  onCancel: () => void;
}

export function AdminNewsForm({ newsItem, onSave, onCancel }: AdminNewsFormProps) {
  const [formData, setFormData] = useState<Omit<News, 'news_id' | 'created_at'> & { news_id?: number, created_at?: string }>({
    news_id: newsItem?.news_id,
    title: newsItem?.title || '',
    slug: newsItem?.slug || '',
    cover_image: newsItem?.cover_image || '',
    content: newsItem?.content || '',
    tags: newsItem?.tags || [],
    is_hidden: newsItem?.is_hidden ?? false,
    created_at: newsItem?.created_at,
    seo_title: newsItem?.seo_title || '',
    seo_description: newsItem?.seo_description || '',
  });

  const [tagInput, setTagInput] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Auto-generate slug from title
    if (formData.title && !newsItem) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, newsItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onCancel();
    }, 2000);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(tag => tag !== tagToRemove) });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button type="button" variant="ghost" onClick={onCancel}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2>{newsItem ? 'Sửa tin tức' : 'Thêm tin tức mới'}</h2>
            <p className="text-gray-500">Nhập thông tin bài viết</p>
          </div>
        </div>
        <Button type="submit" className="gap-2">
          <Save className="w-4 h-4" />
          Lưu tin tức
        </Button>
      </div>

      {showSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Lưu tin tức thành công!
          </AlertDescription>
        </Alert>
      )}

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin cơ bản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Tiêu đề bài viết *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="VD: Ra mắt dòng xe đạp điện mới..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="ra-mat-dong-xe-dap-dien-moi"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover_image">Ảnh bìa *</Label>
            <ImageUpload
              value={formData.cover_image}
              onChange={(url) => setFormData({ ...formData, cover_image: url })}
            />
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập tag và nhấn Enter"
              />
              <Button type="button" onClick={handleAddTag} variant="outline" className="gap-2">
                <Plus className="w-4 h-4" />
                Thêm
              </Button>
            </div>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 p-3 bg-gray-50 rounded-lg border">
                {formData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="gap-2 px-3 py-1">
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

          <div className="flex items-center gap-2">
            <Switch
              id="is_hidden"
              checked={formData.is_hidden}
              onCheckedChange={(checked) => setFormData({ ...formData, is_hidden: checked })}
            />
            <Label htmlFor="is_hidden">Ẩn bài viết</Label>
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle>Nội dung bài viết</CardTitle>
          <CardDescription>Sử dụng trình soạn thảo để định dạng nội dung</CardDescription>
        </CardHeader>
        <CardContent>
          <RichTextEditor
            value={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
            placeholder="Nhập nội dung bài viết..."
          />
        </CardContent>
      </Card>

      {/* SEO */}
      <Card>
        <CardHeader>
          <CardTitle>Cấu hình SEO</CardTitle>
          <CardDescription>Tối ưu cho công cụ tìm kiếm và chia sẻ mạng xã hội</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="seo_title">Thẻ tiêu đề SEO</Label>
            <Input
              id="seo_title"
              value={formData.seo_title}
              onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
              placeholder="Tiêu đề hiển thị trên Google và khi chia sẻ..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="seo_description">Thẻ mô tả SEO</Label>
            <Textarea
              id="seo_description"
              value={formData.seo_description}
              onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
              rows={3}
              placeholder="Mô tả hiển thị trên Google và khi chia sẻ..."
            />
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              💡 <strong>Lưu ý:</strong> Các thẻ SEO này cũng được sử dụng khi chia sẻ bài viết lên Facebook và các mạng xã hội khác (Open Graph Tags).
            </p>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

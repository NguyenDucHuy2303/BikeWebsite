import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { ArrowLeft, Plus, X, Upload, Save } from 'lucide-react';
import { Product, ProductImage, ProductSpec, BikeSeries } from '../../mockData/adminData';
import { Alert, AlertDescription } from '../ui/alert';
import { ImageUpload } from './ImageUpload';
import { MultiImageUpload } from './MultiImageUpload';
import { RichTextEditor } from './RichTextEditor';

interface AdminProductFormProps {
  product: Product | null;
  series: BikeSeries[];
  images: ProductImage[];
  specs: ProductSpec[];
  onSave: (
    product: Omit<Product, 'product_id'> & { product_id?: number },
    images: Omit<ProductImage, 'image_id' | 'product_id'>[],
    specs: Omit<ProductSpec, 'spec_id' | 'product_id'>[]
  ) => void;
  onCancel: () => void;
}

export function AdminProductForm({ product, series, images, specs, onSave, onCancel }: AdminProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, 'product_id'> & { product_id?: number }>({
    product_id: product?.product_id,
    series_id: product?.series_id || series[0]?.series_id || 1,
    name: product?.name || '',
    slug: product?.slug || '',
    short_description: product?.short_description || '',
    detailed_description: product?.detailed_description || '',
    is_active: product?.is_active ?? true,
    seo_title: product?.seo_title || '',
    seo_description: product?.seo_description || '',
  });

  const [productImages, setProductImages] = useState<Array<{ url: string, is_main: boolean, sort_order: number }>>(
    product ? images.filter(img => img.product_id === product.product_id).map(img => ({
      url: img.url,
      is_main: img.is_main,
      sort_order: img.sort_order
    })) : []
  );

  const [bulletPoints, setBulletPoints] = useState<string[]>(
    product ? specs.filter(s => s.product_id === product.product_id && s.type === 'gach_dau_dong')
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(s => s.content) : ['', '', '']
  );

  const [specImage, setSpecImage] = useState<string>(
    product ? (specs.find(s => s.product_id === product.product_id && s.type === 'image_spec')?.content || '') : ''
  );

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Auto-generate slug from name
    if (formData.name && !product) {
      const slug = formData.name
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
  }, [formData.name, product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare images
    const imageData = productImages.map((img, index) => ({
      url: img.url,
      is_main: img.is_main,
      sort_order: index + 1
    }));

    // Prepare specs
    const specData: Omit<ProductSpec, 'spec_id' | 'product_id'>[] = [];
    
    // Add bullet points
    bulletPoints.forEach((point, index) => {
      if (point.trim()) {
        specData.push({
          type: 'gach_dau_dong',
          content: point,
          sort_order: index + 1
        });
      }
    });

    // Add spec image if exists
    if (specImage) {
      specData.push({
        type: 'image_spec',
        content: specImage,
        sort_order: bulletPoints.length + 1
      });
    }

    onSave(formData, imageData, specData);
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onCancel();
    }, 2000);
  };

  const handleImagesChange = (images: Array<{ url: string; is_main: boolean }>) => {
    setProductImages(images.map((img, index) => ({
      ...img,
      sort_order: index + 1
    })));
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
            <h2>{product ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}</h2>
            <p className="text-gray-500">Nhập thông tin chi tiết sản phẩm</p>
          </div>
        </div>
        <Button type="submit" className="gap-2">
          <Save className="w-4 h-4" />
          Lưu sản phẩm
        </Button>
      </div>

      {showSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Lưu sản phẩm thành công!
          </AlertDescription>
        </Alert>
      )}

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin cơ bản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Tên sản phẩm *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="VD: GreenBike City Pro"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="greenbike-city-pro"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="series">Dòng xe *</Label>
            <Select
              value={formData.series_id.toString()}
              onValueChange={(value) => setFormData({ ...formData, series_id: parseInt(value) })}
            >
              <SelectTrigger id="series">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {series.map(s => (
                  <SelectItem key={s.series_id} value={s.series_id.toString()}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="short_description">Mô tả ngắn *</Label>
            <Textarea
              id="short_description"
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              required
              rows={3}
              placeholder="Mô tả ngắn gọn về sản phẩm..."
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="is_active"
              checked={formData.is_active}
              onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
            />
            <Label htmlFor="is_active">Hiển thị sản phẩm</Label>
          </div>
        </CardContent>
      </Card>

      {/* Images */}
      <Card>
        <CardHeader>
          <CardTitle>Hình ảnh sản phẩm</CardTitle>
          <CardDescription>Thêm nhiều hình ảnh cho sản phẩm (chọn ảnh chính)</CardDescription>
        </CardHeader>
        <CardContent>
          <MultiImageUpload
            images={productImages}
            onChange={handleImagesChange}
          />
        </CardContent>
      </Card>

      {/* Detailed Description */}
      <Card>
        <CardHeader>
          <CardTitle>Mô tả chi tiết</CardTitle>
          <CardDescription>Sử dụng trình soạn thảo để định dạng nội dung</CardDescription>
        </CardHeader>
        <CardContent>
          <RichTextEditor
            value={formData.detailed_description}
            onChange={(value) => setFormData({ ...formData, detailed_description: value })}
            placeholder="Nhập mô tả chi tiết về sản phẩm..."
          />
        </CardContent>
      </Card>

      {/* Specs */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin sản phẩm</CardTitle>
          <CardDescription>Nhập các thông tin chi tiết của sản phẩm</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Bullet points */}
          <div className="space-y-3">
            <Label>Điểm nổi bật (gạch đầu dòng)</Label>
            <p className="text-sm text-gray-500">Nhập các điểm nổi bật của sản phẩm</p>
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={point}
                  onChange={(e) => {
                    const updated = [...bulletPoints];
                    updated[index] = e.target.value;
                    setBulletPoints(updated);
                  }}
                  placeholder={`Điểm nổi bật ${index + 1}...`}
                />
                {bulletPoints.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setBulletPoints(bulletPoints.filter((_, i) => i !== index))}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => setBulletPoints([...bulletPoints, ''])}
              className="gap-2"
              size="sm"
            >
              <Plus className="w-4 h-4" />
              Thêm điểm nổi bật
            </Button>
          </div>

          {/* Spec Image */}
          <div className="space-y-2">
            <Label>Ảnh thông số kỹ thuật</Label>
            <p className="text-sm text-gray-500">Tải lên 1 ảnh chi tiết các thông số kỹ thuật của sản phẩm</p>
            <ImageUpload
              value={specImage}
              onChange={setSpecImage}
            />
          </div>
        </CardContent>
      </Card>

      {/* SEO */}
      <Card>
        <CardHeader>
          <CardTitle>Cấu hình SEO</CardTitle>
          <CardDescription>Tối ưu cho công cụ tìm kiếm</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="seo_title">Thẻ tiêu đề SEO</Label>
            <Input
              id="seo_title"
              value={formData.seo_title}
              onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
              placeholder="Tiêu đề hiển thị trên Google..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="seo_description">Thẻ mô tả SEO</Label>
            <Textarea
              id="seo_description"
              value={formData.seo_description}
              onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
              rows={3}
              placeholder="Mô tả hiển thị trên Google..."
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "../ui/button";

interface MultiImageUploadProps {
  images: any;
  onChange: (images: Array<{ url: string; is_main: boolean }>) => void;
  className?: string;
  setImages: any;
  setFiles: any;
  files: any;
}

export function MultiImageUpload({
  images,
  onChange,
  className = "",
  setImages,
  setFiles,
  files,
}: MultiImageUploadProps) {
  // const [files, setFiles] = useState<File[]>([]); // giữ file thật

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const imageFiles = droppedFiles.filter((f) => f.type.startsWith("image/"));

    setFiles((prev: any) => [...prev, ...imageFiles]);

    const previews = imageFiles.map((file) => ({
      url: URL.createObjectURL(file),
      is_main: images.length === 0,
    }));
    setImages((prev: any) => [...prev, ...previews]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev: any) => [...prev, ...selectedFiles]);

      const previews = selectedFiles.map((file) => ({
        url: URL.createObjectURL(file),
        is_main: images.length === 0, // nếu chưa có ảnh nào, ảnh đầu tiên là main
      }));
      setImages((prev: any) => [...prev, ...previews]);
    }
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    let processedCount = 0;
    const newImages: Array<{ url: string; is_main: boolean }> = [];

    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push({
          url: reader.result as string,
          is_main: images.length === 0 && newImages.length === 0,
        });
        processedCount++;

        if (processedCount === imageFiles.length) {
          onChange([...images, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemove = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    // If removed main image, set first image as main
    if (images[index].is_main && updated.length > 0) {
      updated[0].is_main = true;
    }
    onChange(updated);
  };

  const handleSetMain = (index: number) => {
    const updated = images.map((img, i) => ({
      ...img,
      is_main: i === index,
    }));
    onChange(updated);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileSelect}
      />

      {images.length === 0 ? (
        // Empty state with drop zone
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileDialog}
          className={`
            border-2 border-dashed rounded-lg p-12
            flex flex-col items-center justify-center
            transition-colors cursor-pointer
            ${
              isDragging
                ? "border-green-500 bg-green-50"
                : "border-gray-300 hover:border-gray-400"
            }
          `}
        >
          <Upload
            className={`w-16 h-16 mb-4 ${
              isDragging ? "text-green-500" : "text-gray-400"
            }`}
          />
          <p className="mb-2">
            {isDragging
              ? "Thả ảnh vào đây"
              : "Kéo ảnh vào đây hoặc nhấp để chọn"}
          </p>
          <p className="text-sm text-gray-500">
            Có thể chọn nhiều ảnh cùng lúc
          </p>
          <p className="text-xs text-gray-400 mt-1">
            PNG, JPG, GIF tối đa 10MB mỗi ảnh
          </p>
        </div>
      ) : (
        // Grid of images
        <div className="space-y-4">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg border-2 border-dashed
              ${isDragging ? "border-green-500 bg-green-50" : "border-gray-200"}
            `}
          >
            {images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={`data:image/png;base64,${img}`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg border"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemove(index)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-2 left-2">
                  <label className="flex items-center gap-2 bg-white px-2 py-1 rounded shadow-sm cursor-pointer">
                    <input
                      type="radio"
                      checked={img.is_main}
                      onChange={() => handleSetMain(index)}
                      className="w-4 h-4"
                    />
                    <span className="text-xs">Ảnh chính</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={openFileDialog}
            className="w-full gap-2"
          >
            <Upload className="w-4 h-4" />
            Thêm hình ảnh
          </Button>
        </div>
      )}
    </div>
  );
}

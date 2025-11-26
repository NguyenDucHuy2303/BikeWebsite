import { useState, useRef, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "../ui/button";

interface FlexibleImageUploadProps {
  value: string[]; // mảng Base64 để hiển thị preview
  onChange: (value: string[]) => void;
  className?: string;
  setFiles: (files: File[] | ((prev: File[]) => File[])) => void;
  files: File[];
  multiple?: boolean; // true = nhiều file, false = 1 file
}

export function FlexibleImageUpload({
  value,
  onChange,
  className = "",
  setFiles,
  files,
  multiple = false,
}: FlexibleImageUploadProps) {
  const [internalValue, setInternalValue] = useState<string[]>(value); // state nội bộ
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Đồng bộ internalValue với value prop khi value thay đổi từ ngoài
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

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
    const droppedFiles = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/")
    );
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files).filter((f) =>
      f.type.startsWith("image/")
    );
    processFiles(selectedFiles);
  };

  const processFiles = (filesArray: File[]) => {
    // Update File state
    setFiles((prev) => (multiple ? [...prev, ...filesArray] : filesArray));

    // Convert to Base64 for preview
    const readers: Promise<string>[] = filesArray.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((base64Files) => {
      const newValue = multiple
        ? [...internalValue, ...base64Files]
        : [base64Files[0]];
      setInternalValue(newValue); // cập nhật internal state
      onChange(newValue); // gọi callback với mảng đầy đủ
    });
  };

  const handleRemove = (index: number) => {
    const updatedValue = internalValue.filter((_, i) => i !== index);
    setInternalValue(updatedValue); // cập nhật state nội bộ
    onChange(updatedValue); // gọi callback
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const renderDropZone = () => (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer
        ${
          isDragging
            ? "border-green-500 bg-green-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
    >
      <Upload
        className={`w-12 h-12 mb-4 ${
          isDragging ? "text-green-500" : "text-gray-400"
        }`}
      />
      <p className="text-sm mb-2">
        {isDragging
          ? "Thả ảnh vào đây"
          : multiple
          ? "Kéo ảnh vào đây hoặc nhấp để chọn nhiều ảnh"
          : "Kéo ảnh vào đây hoặc nhấp để chọn ảnh"}
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={handleFileSelect}
      />
    </div>
  );

  return (
    <div className={className}>
      {internalValue.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {internalValue.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={
                  img.startsWith("data:") ? img : `data:image/png;base64,${img}`
                }
                alt={`Preview ${index}`}
                className="w-full h-40 object-cover rounded-lg border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => handleRemove(index)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
      {/* Always show dropzone */}
      {(!internalValue.length || multiple) && renderDropZone()}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "../ui/button";

interface FlexibleImageUploadProps {
  value: File[]; // mảng Base64 để hiển thị preview
  onChange: (value: File[]) => void;
  className?: string;
  multiple?: boolean; // true = nhiều file, false = 1 file
}

export function FlexibleImageUpload({
  value,
  onChange,
  className = "",
  multiple = false,
}: FlexibleImageUploadProps) {
  if (multiple) {
    console.log("multiple", value);
  } else {
    console.log("value", value);
  }

  const [internalValue, setInternalValue] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  // Đồng bộ internalValue với value prop khi value thay đổi từ ngoài

  useEffect(() => {
    async function filesToBase64(files: File[]) {
      const promises = files.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          })
      );
      const base64Files = await Promise.all(promises);
      setInternalValue(base64Files);
      setFiles(files); // đồng bộ luôn files state
    }

    if (value && value.length > 0) {
      filesToBase64(value);
    } else {
      setInternalValue([]);
      setFiles([]);
    }
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
    setFiles((prev) => {
      const newFiles = multiple ? [...prev, ...filesArray] : filesArray;
      onChange(newFiles);
      return newFiles;
    });

    const readers = filesArray.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((base64Files) => {
      setInternalValue((prev) =>
        multiple ? [...prev, ...base64Files] : [base64Files[0]]
      );
    });
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setInternalValue((prev) => prev.filter((_, i) => i !== index));
    onChange(files.filter((_, i) => i !== index));
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
                  typeof img === "string" && img.startsWith("data:")
                    ? img
                    : `data:image/png;base64,${img || ""}`
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

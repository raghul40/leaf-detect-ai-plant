
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-green-500 transition-colors">
        {!preview ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="h-12 w-12 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                Drag and drop your leaf image here, or click to select
              </p>
              <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
            </div>
            <Button variant="outline" className="relative">
              Select Image
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageSelect}
                accept="image/*"
              />
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Selected leaf"
              className="max-h-[300px] mx-auto rounded-lg shadow-lg"
            />
            <Button
              variant="outline"
              onClick={() => {
                setSelectedImage(null);
                setPreview(null);
              }}
            >
              Remove Image
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

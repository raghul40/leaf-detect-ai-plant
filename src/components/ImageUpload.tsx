
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import AnalysisResults from "./AnalysisResults";

// Mock function to simulate API call - Replace with actual API call later
const analyzeImage = async (file: File): Promise<{ disease: string; confidence: number }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock response - Replace with actual API integration
  return {
    disease: "Early Blight",
    confidence: 0.89
  };
};

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    disease: string | null;
    confidence: number | null;
  }>({ disease: null, confidence: null });
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setSelectedImage(file);
        setError(null);
        setAnalysisResult({ disease: null, confidence: null });
        
        // Create image preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        // Start analysis
        setIsAnalyzing(true);
        const result = await analyzeImage(file);
        setAnalysisResult(result);
        toast.success("Analysis complete!");
      } catch (err) {
        setError("Failed to analyze image. Please try again.");
        toast.error("Failed to analyze image");
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setPreview(null);
    setAnalysisResult({ disease: null, confidence: null });
    setError(null);
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
              onClick={handleRemove}
            >
              Remove Image
            </Button>
          </div>
        )}
      </div>
      
      <AnalysisResults
        isLoading={isAnalyzing}
        disease={analysisResult.disease}
        confidence={analysisResult.confidence}
        error={error}
      />
    </div>
  );
};

export default ImageUpload;

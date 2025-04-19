
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Flower } from "lucide-react";
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
    <div className="max-w-2xl mx-auto mt-8">
      <div className="rounded-2xl border-2 border-dashed border-green-300 bg-gradient-to-b from-green-50/50 to-white p-8 text-center transition-all hover:border-green-400 hover:shadow-lg hover:shadow-green-100">
        {!preview ? (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100/80 p-4">
                <Flower className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-700">
                Drag and drop your leaf image here, or click to select
              </p>
              <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
            </div>
            <Button variant="outline" className="relative border-green-200 hover:border-green-400 hover:bg-green-50">
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
          <div className="space-y-6">
            <img
              src={preview}
              alt="Selected leaf"
              className="max-h-[300px] mx-auto rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
            />
            <Button
              variant="outline"
              onClick={handleRemove}
              className="border-green-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 transition-colors"
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

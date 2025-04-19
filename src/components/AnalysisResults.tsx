
import { Check, AlertTriangle } from "lucide-react";

interface AnalysisResultsProps {
  isLoading: boolean;
  disease: string | null;
  confidence: number | null;
  error?: string | null;
}

const AnalysisResults = ({ isLoading, disease, confidence, error }: AnalysisResultsProps) => {
  if (error) {
    return (
      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center gap-2 text-red-600">
          <AlertTriangle className="h-5 w-5" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-6 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent"></div>
        <p className="mt-2 text-gray-600">Analyzing your image...</p>
      </div>
    );
  }

  if (!disease || !confidence) return null;

  return (
    <div className="mt-6 p-6 bg-white border rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="p-2 bg-green-100 rounded-full">
            <Check className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Analysis Results</h3>
          <div className="mt-2 space-y-2">
            <p className="text-gray-600">
              Detected Disease: <span className="font-medium text-gray-900">{disease}</span>
            </p>
            <p className="text-gray-600">
              Confidence: <span className="font-medium text-gray-900">{Math.round(confidence * 100)}%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;

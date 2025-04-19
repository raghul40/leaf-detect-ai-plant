
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
      <div className="mt-8 rounded-xl border border-red-200 bg-red-50/50 p-4 animate-in fade-in duration-300">
        <div className="flex items-center gap-2 text-red-600">
          <AlertTriangle className="h-5 w-5" />
          <p className="font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-8 text-center animate-in fade-in duration-300">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent"></div>
        <p className="mt-4 text-gray-600 font-medium">Analyzing your image...</p>
      </div>
    );
  }

  if (!disease || !confidence) return null;

  return (
    <div className="mt-8 rounded-xl border border-green-100 bg-gradient-to-b from-green-50/50 to-white p-6 shadow-sm animate-in fade-in duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="rounded-full bg-green-100 p-2">
            <Check className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Analysis Results</h3>
          <div className="mt-3 space-y-3">
            <p className="text-gray-700">
              Detected Disease: <span className="font-medium text-gray-900">{disease}</span>
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full bg-gray-100">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                  style={{ width: `${Math.round(confidence * 100)}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(confidence * 100)}% confidence
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;

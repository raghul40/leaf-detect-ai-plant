
import { Button } from "@/components/ui/button";
import { Tree, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-green-50/90 to-white/80 p-8 md:p-12 border-2 border-green-100 shadow-lg">
      {/* Nature background overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86')] 
        bg-cover bg-center opacity-10 z-0"
      />
      
      <div className="relative text-center space-y-6 z-10">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100/80 p-4 animate-pulse">
            <Tree className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Plant Health 
          <span className="mt-2 block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Detector AI
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-700 leading-relaxed">
          Harness the power of AI to diagnose your plant's health. 
          Upload a leaf image and get instant, accurate disease detection 
          to keep your garden flourishing.
        </p>
        
        <div className="flex justify-center space-x-4 pt-4">
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Nature-Powered AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

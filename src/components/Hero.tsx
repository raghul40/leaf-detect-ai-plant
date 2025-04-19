
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-green-50 to-white p-8 md:p-12">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative text-center space-y-6">
        <div className="mx-auto h-16 w-16 rounded-full bg-green-100 p-3 ring-2 ring-green-200">
          <Leaf className="h-full w-full text-green-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Plant Disease Detection
          <span className="mt-2 block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Upload a photo of your plant's leaves and our AI will help identify potential diseases,
          ensuring your garden stays healthy and thriving.
        </p>
      </div>
    </div>
  );
};

export default Hero;

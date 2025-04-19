
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-50/30 to-green-50/20 relative">
      {/* Add a subtle nature-inspired overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] 
        bg-cover bg-center opacity-10 z-0"
      />
      <div className="container mx-auto px-4 py-12 space-y-12 relative z-10">
        <Hero />
        <ImageUpload />
      </div>
    </div>
  );
};

export default Index;

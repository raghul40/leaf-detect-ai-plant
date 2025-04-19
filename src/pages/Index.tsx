
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <Hero />
        <div className="mt-12">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default Index;

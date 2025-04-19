
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50/20">
      <div className="container mx-auto px-4 py-12 space-y-12">
        <Hero />
        <ImageUpload />
      </div>
    </div>
  );
};

export default Index;

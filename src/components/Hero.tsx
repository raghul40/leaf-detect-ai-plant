
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
        Plant Disease Detection
        <span className="block text-green-600">Made Simple</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Upload a photo of your plant's leaves and our AI will help identify potential diseases,
        ensuring your garden stays healthy and thriving.
      </p>
    </div>
  );
};

export default Hero;

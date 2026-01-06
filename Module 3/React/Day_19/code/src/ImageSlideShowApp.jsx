import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ImageSlideshowApp = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ];
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-4">
      <Card className="p-4 flex flex-col items-center">
        <img src={images[index]} alt={`Image ${index + 1}`} className="mb-4" />
        <div className="space-x-2">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </Card>
    </div>
  );
};

export default ImageSlideshowApp;

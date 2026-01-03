import { useState, useEffect } from "react";

const IPhoneMockup = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/meditation.png", "/graphic.png", "/match.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground rounded-full z-10" />
          
          {/* Screenshot Images */}
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Moora app screenshot ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  currentImage === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;

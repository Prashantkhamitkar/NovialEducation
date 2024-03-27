import React, { useEffect, useState } from "react";

const Slider = () => {
  const data = [
    "https://www.ashokitech.com/./uploads/banner/861619361_1706689802.jpg",
    "https://www.ashokitech.com/./uploads/banner/1941900377_1706689842.jpg",
    "https://www.ashokitech.com/./uploads/banner/1157051454_1706689821.jpg",
    "https://www.ashokitech.com/./uploads/banner/284575878_1706689765.jpg",
    "https://www.ashokitech.com/./uploads/banner/1941900377_1706689842.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="carousel-container flex">
        {data.map((item, index) => (
          <img
            key={index}
            className={`carousel-item w-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
            src={item}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

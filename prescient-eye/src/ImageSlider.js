import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import content from "./Content";
 
function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  
  const images = content.map(item => item.image);

  useEffect(() => {
    // Set initial opacity to 0
    const image = document.querySelector(".slider-img");
    image.style.opacity = 0;

    // Animate opacity to 1
    const animation = image.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    });

    return () => {
      // Stop animation when component unmounts
      animation.cancel();
    }
  }, [currentImage]);

  return (
    <motion.div className="relative flex min-h-full">

      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt="slider"
        className="w-full object-fit rounded-3xl slider-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute h-full flex w-full items-center justify-between p-4">
        <button
          onClick={prevImage}
          className="z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left opacity-20 hover:opacity-100" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>

        </button>
        <button
          onClick={nextImage}
          className="z-10"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right opacity-20 hover:opacity-100" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>
          
        </button>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-2 cursor-pointer ${
              currentImage === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentImage(index)}
          ></div>
        ))}
      </div>
      
    </motion.div>
  );
}

export default ImageSlider;

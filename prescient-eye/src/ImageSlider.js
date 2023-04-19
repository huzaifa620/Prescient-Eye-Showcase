import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
  ];
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
    <motion.div className="relative flex">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt="slider"
        className="w-full h-96 object-cover rounded-3xl slider-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute h-full flex w-full items-center justify-between p-4">
        <button
          onClick={prevImage}
          className="z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
          
        </button>
        <button
          onClick={nextImage}
          className="z-10"
        > 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/></svg>
          
        </button>
      </div>
    </motion.div>
  );
}

export default ImageSlider;

import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import content from "./Content";

const Features = () => {

  const [currentChar, setCurrentChar] = useState(0);
  const updateText = (text, delay) => {
    const textLength = text.length;
    let currentIndex = 0;
  
    const intervalId = setInterval(() => {
      setCurrentChar(currentIndex);
      currentIndex++;
  
      if (currentIndex === textLength) {
        clearInterval(intervalId);
      }
    }, delay);
  
    return intervalId;
  }  


  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  
  const images = content.map(item => item.image);
  const titles = content.map(item => item.title);
  const descs = content.map(item => item.desc);

  useEffect(() => {
    // Set initial opacity to 0
    const image = document.querySelector(".slider-img");
    const title = document.querySelector("h1.text-4xl");
    image.style.opacity = 0;
    title.style.opacity = 0;
  
    // Animate opacity to 1
    const opacityAnimation = image.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    });

    const titleAnimation = title.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards"
    });
  
    // Start typewriter animation
    const text = descs[currentImage];
    const delay = 50;
    const textAnimation = updateText(text, delay);
  
    return () => {
      // Stop animations when component unmounts
      opacityAnimation.cancel();
      titleAnimation.cancel();
      clearInterval(textAnimation);
    }
  }, [currentImage]);
  

  return (
    <div className='flex w-full space-x-6 p-24 h-screen'>
        <div className='w-3/4 flex flex-col space-y-12 h-[75%]'>

          <p className='text-5xl'>Prescient Eye System is capable of integration of following features:</p>

          <h1 className='text-4xl tracking-widest font-bold uppercase'>
            {titles[currentImage]}
          </h1>

          <motion.div className="relative flex flex-col">

            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="slider"
              className="w-full object-fit rounded-3xl slider-img  border-4 border-black dark:border-white h-[500px] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            <div className="absolute h-full flex w-full items-center justify-between p-4 -mt-8">
              <button
                onClick={prevImage}
                className="z-10"
              >
                <svg viewBox="-2 0 12 12" id="meteor-icon-kit__solid-chevron-left-xs" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M7.0607 9.0393C7.6464 9.6251 7.6464 10.5749 7.0607 11.1607C6.4749 11.7464 5.5251 11.7464 4.9393 11.1607L0.93934 7.1607C0.35355 6.5749 0.35355 5.6251 0.93934 5.0393L4.9393 1.03934C5.5251 0.45355 6.4749 0.45355 7.0607 1.03934C7.6464 1.62513 7.6464 2.57487 7.0607 3.16066L4.1213 6.1L7.0607 9.0393z" fill="#758CA3"></path></g></svg>

              </button>
              <button
                onClick={nextImage}
                className="z-10"
              > 
                <svg viewBox="-2 0 12 12" id="meteor-icon-kit__solid-chevron-right-xs" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M0.93934 9.0393L3.8787 6.1L0.93934 3.16066C0.35355 2.57487 0.35355 1.62513 0.93934 1.03934C1.52513 0.45355 2.4749 0.45355 3.0607 1.03934L7.0607 5.0393C7.6464 5.6251 7.6464 6.5749 7.0607 7.1607L3.0607 11.1607C2.4749 11.7464 1.52513 11.7464 0.93934 11.1607C0.35355 10.5749 0.35355 9.6251 0.93934 9.0393z" fill="#758CA3"></path></g></svg>
                
              </button>
            </div>

            <div className="bottom-0 w-full flex justify-center mt- mb-4">
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

        </div>

        <div className='w-1/2 flex items-center justify-center'>
          <div className='w-full flex items-center justify-center text-center h-1/2 text-5xl'>
            {descs[currentImage].substring(0, currentChar)}
          </div>
        </div>
    </div>
  )
}

export default Features

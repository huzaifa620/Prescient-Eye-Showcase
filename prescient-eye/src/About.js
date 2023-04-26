import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import content from "./Content";

const About = () => {

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

    // Switch images automatically after 5 seconds
    const switchImage = setTimeout(() => {
      setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }, 10000);
  
    return () => {
      // Stop animations when component unmounts
      opacityAnimation.cancel();
      titleAnimation.cancel();
      clearInterval(textAnimation);
      clearTimeout(switchImage);
    }
  }, [currentImage]);
  

  return (

    <div className='flex flex-col w-full p-24 h-screen'>
        <div className='flex items-center px-24 pt-24 text-5xl font-bold tracking-widest pl-[11%]'>
            Icarus Enineering
        </div>

        <div className='flex w-full h-screen space-x-6'>
            <div className='w-1/2 flex flex-col space-y-12'>

                <motion.div className="relative flex flex-col items-center justify-center h-full">

                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt="slider"
                        className="object-fit rounded-full slider-img  border-4 border-black dark:border-white h-[75%] w-[65%] mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />

                    <div className="absolute h-full flex w-[65%] items-center justify-between p-4 -mt-8">
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
    </div>
        
  )
}

export default About

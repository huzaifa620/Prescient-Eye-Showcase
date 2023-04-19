import { useState } from "react";
import './VerticalDotsSlider.css'

function VerticalSlider() {
  const slides = [
    {
      id: 1,
      content: "Icarus Engineering is pioneer working on artificial intelligence (Computer Vision) based solutions for years. Designing smart vision based Video Content Analytics (VCA)solutions."
    },
    {
      id: 2,
      content: "Prescient Eye is a software based Video Content Analytics (VCA) that provides certain level of identification of real time alerts in case of unattended or suspicious individual, motion detection, unauthorized firearm detection, sucide bomber detection, anomaly detection or milicious activities like robery, stealing, assault, fighting, explosion, arrest or road accidents."
    },
    {
      id: 3,
      content: "Icarus Engineering has expertise in developing AI and Deep Neural Network based VCA softwares that are used to detect, identify and distinguish various objects in live video feeds."
    },
    {
      id: 4,
      content: "Slide 4"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const renderSlides = () => {
    return slides.map((slide, index) => {
      return (
        <div
          key={slide.id}
          className={`item items-center justify-center h-screen ${
            index === activeSlide ? "active flex" : "hidden"
          }`}
        >
          <p className="text-black shadow-2xl w-3/4 h-3/4 dark:text-white text-xl text-justify flex align-middle rounded-3xl p-6 items-center">{slide.content}</p>
        </div>
      );
    });
  };

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const renderDots = () => {
    return slides.map((slide, index) => {
      return (
        <button
          key={slide.id}
          className={`dot ${index === activeSlide ? "active" : ""}`}
          onClick={() => handleSlideClick(index)}
        ></button>
      );
    });
  };

  return (
    <div className="myslider h-96 flex space-x-4">
      <div className="slider-container flex-1 overflow-hidden">{renderSlides()}</div>
      <div className="dots-container flex flex-col space-y-8 justify-center items-center">{renderDots()}</div>
    </div>
  );
}

export default VerticalSlider
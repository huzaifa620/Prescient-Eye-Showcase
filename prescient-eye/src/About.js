import React from 'react'
import ImageSlider from './ImageSlider'
import ListSlider from './ListSlider'

const About = () => {
  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200/FF0000",
    "https://via.placeholder.com/300x200/0000FF",
  ];

  return (
    <div className='flex w-full space-x-6 p-24'>
        <div className='w-1/2'>
            <ImageSlider images={images} />
        </div>

        <div className='w-1/2'>
            <ListSlider />
        </div>
    </div>
  )
}

export default About
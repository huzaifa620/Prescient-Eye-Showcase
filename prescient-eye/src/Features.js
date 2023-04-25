import React from 'react'
import ImageSlider from './ImageSlider'
import ListSlider from './ListSlider'

const Features = () => {

  return (
    <div className='flex w-full space-x-6 p-24'>
        <div className='w-1/2 flex flex-col items-center space-y-4'>
          <h1 className='text-5xl tracking-widest font-bold'>
            Robbery Detection
          </h1>
          <ImageSlider />
        </div>

        <div className='w-1/2 flex items-center justify-center'>
          <div className="border rounded-3xl w-full flex items-center justify-center text-center shadow-2xl h-1/2 text-2xl">
              Real-time autonomus monitoring and survellience
          </div>
        </div>
    </div>
  )
}

export default Features
import React from 'react'
import ImageSlider from './ImageSlider'

const Features = () => {

  return (
    <div className='flex w-full space-x-6 p-24 h-screen'>
        <div className='w-3/4 flex flex-col space-y-12 h-[75%]'>
          <h1 className='text-5xl tracking-widest font-bold uppercase'>
            Robbery Detection
          </h1>
          <ImageSlider />
        </div>

        <div className='w-1/2 flex items-center justify-center'>
          <div className="w-full flex items-center justify-center text-center h-1/2 text-4xl">
              Real-time autonomus monitoring and survellience
          </div>
        </div>
    </div>
  )
}

export default Features
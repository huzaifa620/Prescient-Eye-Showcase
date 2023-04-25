import React from 'react'
import ImageSlider from './ImageSlider'
import ListSlider from './ListSlider'

const Features = () => {

  return (
    <div className='flex w-full space-x-6 p-24'>
        <div className='w-1/2'>
          <ImageSlider />
        </div>

        <div className='w-1/2'>
            <ListSlider />
        </div>
    </div>
  )
}

export default Features
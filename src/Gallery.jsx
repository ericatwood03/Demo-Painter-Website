import React from 'react'
import Carousel from './Carousel';

function Gallery({reference}) {
  return (
    <div  ref={reference} className=' p-20'>
        <Carousel />
    </div>
  )
}

export default Gallery
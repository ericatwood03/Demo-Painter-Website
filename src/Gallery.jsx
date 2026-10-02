import React from 'react'
import unsplash1 from './assets/unsplash1.jpg'
import unsplash2 from './assets/unsplash2.jpg'
import unsplash3 from './assets/unsplash3.jpg'
import unsplash4 from './assets/unsplash4.jpg'

function Gallery({reference}) {
  return (
    <div  ref={reference} className=' p-20'>
        <img src={unsplash1} alt="" />
    </div>
  )
}

export default Gallery
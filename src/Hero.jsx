import React from 'react'
import PaintJob from './assets/paintjob.jpg'

function Hero({reference}) {
  return (
    <div 
        ref={reference}
        className='h-100 md:h-200 bg-cover bg-right lg:bg-center -mt-2 bg-gray-600 bg-blend-multiply'
        style={{ backgroundImage: `url(${PaintJob})` }}
      >
        <div className='flex flex-col-reverse md:flex-col place-items-center pt-25 md:pt-120 sm:text-2xl md:text-3xl font-bold text-white gap-y-10'>
          <div className='place-items-center'>
            <h1 className=''>Professional Painting Services</h1>
            <h1 className=''>Transforming Homes With Quality Craftmanship</h1>
          </div>
          <div className='pt-10'>
            <button className='cursor-pointer p-2 bg-[#996515] rounded-sm text-2xl font-bold text-black'>
              Get A Free Quote
            </button>
          </div>
        </div>
      </div>
  )
}

export default Hero
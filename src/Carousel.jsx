import React, { useState } from 'react'
import unsplash1 from './assets/unsplash1.jpg'
import unsplash2 from './assets/unsplash2.jpg'
import unsplash3 from './assets/unsplash3.jpg'
import unsplash4 from './assets/unsplash4.jpg'
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

function Carousel() {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);
    const [slide, setSlide] = useState(0);

    const hoverLeftClass = 
        hoverLeft
        ? 'absolute self-center text-7xl text-[#F8F4ED] left-1 2xl:left-45 2xl:text-9xl border rounded-full border-gray-600 bg-gray-600 transition transition-colors transition-transform transition-discrete duration-200 ease-in-out'
        : 'absolute self-center text-7xl text-[#5C4033] left-1 2xl:left-45 2xl:text-9xl transition delay-450 transition-colors transition-transform transition-discrete duration-200 ease-in-out';
    
    const toggleHoverLeft = () => setHoverLeft(!hoverLeft);
    
    const hoverRightClass = 
        hoverRight
        ? 'absolute self-center text-7xl text-[#F8F4ED] right-1 2xl:right-45 2xl:text-9xl border rounded-full border-gray-600 bg-gray-600 transition transition-colors transition-transform transition-discrete duration-200 ease-in-out'
        : 'absolute self-center text-7xl text-[#5C4033] right-1 2xl:right-45 2xl:text-9xl transition delay-450 transition-colors transition-transform transition-discrete duration-200 ease-in-out';
    
    const toggleHoverRight = () => setHoverRight(!hoverRight);

    const slides = [
        unsplash1,
        unsplash2,
        unsplash3,
        unsplash4,
    ]
    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    }
    


  return (
    <div className='flex flex-row justify-center'>
        <LuChevronLeft onPointerEnter={toggleHoverLeft} onPointerLeave={toggleHoverLeft} onClick={prevSlide} 
            className={hoverLeftClass}/>
        <div className='flex flex-row overflow-hidden place-content-center'>
            {slides.map((img, id) => {
                return <img className={slide === id ? 'rounded-md xs:min-w-8/10 2xl:max-w-7/10 shadow-lg' : "hidden"} src={img} alt={img.alt} key={id} />
            })}
        </div>
        <LuChevronRight onPointerEnter={toggleHoverRight} onPointerLeave={toggleHoverRight} onClick={nextSlide} 
        className={hoverRightClass} />
    </div>
  )
}

export default Carousel
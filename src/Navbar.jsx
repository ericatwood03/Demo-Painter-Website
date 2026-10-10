import React, { useState } from 'react'
import { LuCircleChevronDown } from "react-icons/lu";
import { LuCircleChevronUp } from "react-icons/lu";

function DropButton({isUp}) {
  if(isUp){
    return <LuCircleChevronUp />
  } else {
    return <LuCircleChevronDown />
  }
}

function NavLink({children, linkFunction}){
  
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover); 

  const hoverClass = 
    hover
    ? 'cursor-pointer transition transition-all transition-discrete duration-100 text-white drop-shadow-sm drop-shadow-white'
    : undefined;
  
  return(
    <a onClick={linkFunction} className={hoverClass} onPointerEnter={toggleHover} onPointerLeave={toggleHover}> {children} </a>
  );
  //<a className={hoverClass} id='1' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Home</NavLink>
}

export default function Navbar({linkFunction}) {
  const [showDropdown, setShowDropDown] = useState(true);
  // const linkClass = ({isActive}) => 
  //   isActive 
  //     ? 'text-white drop-shadow-sm drop-shadow-white'
  //     : 'transition delay-100 duration-250 ease-in-out hover:scale-115 hover:text-black';
  const dropdownClass = 
    showDropdown
      ? 'max-h-100 transition-all transition-discrete duration-300 flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0 justify-center'
      : 'max-h-0 transition-all transition-discrete duration-300 overflow-hidden flex flex-col sm:flex-row gap-x-10 gap-y-4 sm:gap-y-0 justify-center';
  
    
  function handleClick() {
    setShowDropDown(!showDropdown);
  }

  return (
    <>
      <nav className='bg-[#EADCC3] fixed sm:static right-0 left-0'>
        <div className='text-nowrap sm:text-wrap text-center font-semibold text-xl sm:text-2xl text-221F1A md:tracking-wider '>
          <div className='flex flex-col py-6 sm:py-8 gap-y-1 sm:gap-y-8 sm:gap-x-12'>
            <div className='font-story text-3xl sm:text-5xl font-normal '> Painter's World </div>
            <div className={dropdownClass}>
              <NavLink linkFunction={() => linkFunction("sec1")}>Home</NavLink>
              <NavLink linkFunction={() => linkFunction("sec2")}>Services</NavLink>
              <NavLink linkFunction={() => linkFunction("sec3")}>About</NavLink>
              <NavLink linkFunction={() => linkFunction("sec4")}>Gallery</NavLink>
              <NavLink linkFunction={() => linkFunction("sec5")}>Reviews</NavLink>
              <NavLink linkFunction={() => linkFunction("sec6")}>Contact</NavLink>
            </div>
            <button onClick={handleClick} className='inline sm:hidden self-center transition transition-all'>
              <DropButton isUp={showDropdown} />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

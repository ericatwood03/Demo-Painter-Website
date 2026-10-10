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

function Bar({title, children}){
    
    function handleClick() {
        setShowDropDown(!showDropdown);
    }

    const [showDropdown, setShowDropDown] = useState(0);
    
    const serviceClass =
        showDropdown
        ? 'max-h-100 transition transition-all transition-discrete duration-300'
        : 'max-h-0 transition transition-all transition-discrete duration-300 overflow-hidden -mb-3'
    
    return (
        <div className='flex flex-col gap-3 border rounded-xl bg-[#EADCC3] border-[#EADCC3] w-8/10 p-4'>
            <div className='flex flex-row'>
                <h1 className='font-bold text-3xl'>{title}</h1>
                <button onClick={handleClick} className='ml-auto text-3xl cursor-pointer'>
                    <DropButton isUp={showDropdown} />
                </button>
            </div>
            <div className={serviceClass}>
                <p className='indent-8'>
                    {children}
                </p>
            </div>  
        </div>
    )
}

function Services({reference}) {

  return (
    <div ref={reference} className='my-20'>
        <h1 className='justify-self-center text-5xl font-extrabold mb-15'>Services</h1>
        <div className='flex flex-col place-items-center justify-center gap-y-8'>
            <Bar title = 'Interior Painting'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Laborum occaecat rerum est anim amet sint non dolor. Est commodo quo 
                            facilis imperdiet quod distinctio cumque facilis.
                            Eum laborum provident molestias repellendus quas voluptate quo. 
                            Facilis incididunt deserunt autem laborum labore aute. 
                            Et id expedita et anim quod est dolorum odio sint sint vel. 
                            Esse laboris dolorem sint molestias at quo. Est occaecat similique 
                            placeat voluptate eligendi fuga et.
                            Atque ut et cupidatat sunt in illum proident est vero. 
                            Qui anim molestias maxime et in facilis id harum. Ullamco et culpa et 
                            sint labore laborum ex officia quis quo voluptatum sint. Dolorem 
                            molestias in occaecat odio distinctio possimus soluta. Id placeat 
                            cillum tempore voluptate repellendus lorem reprehenderit maxime 
                            molestias qui.
            </Bar>
            <Bar title = 'Exterior Painting'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Laborum occaecat rerum est anim amet sint non dolor. Est commodo quo 
                            facilis imperdiet quod distinctio cumque facilis.
                            Eum laborum provident molestias repellendus quas voluptate quo. 
                            Facilis incididunt deserunt autem laborum labore aute. 
                            Et id expedita et anim quod est dolorum odio sint sint vel. 
                            Esse laboris dolorem sint molestias at quo. Est occaecat similique 
                            placeat voluptate eligendi fuga et.
                            Atque ut et cupidatat sunt in illum proident est vero. 
                            Qui anim molestias maxime et in facilis id harum. Ullamco et culpa et 
                            sint labore laborum ex officia quis quo voluptatum sint. Dolorem 
                            molestias in occaecat odio distinctio possimus soluta. Id placeat 
                            cillum tempore voluptate repellendus lorem reprehenderit maxime 
                            molestias qui.
            </Bar>
            <Bar title = 'Cabinet Painting'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Laborum occaecat rerum est anim amet sint non dolor. Est commodo quo 
                            facilis imperdiet quod distinctio cumque facilis.
                            Eum laborum provident molestias repellendus quas voluptate quo. 
                            Facilis incididunt deserunt autem laborum labore aute. 
                            Et id expedita et anim quod est dolorum odio sint sint vel. 
                            Esse laboris dolorem sint molestias at quo. Est occaecat similique 
                            placeat voluptate eligendi fuga et.
                            Atque ut et cupidatat sunt in illum proident est vero. 
                            Qui anim molestias maxime et in facilis id harum. Ullamco et culpa et 
                            sint labore laborum ex officia quis quo voluptatum sint. Dolorem 
                            molestias in occaecat odio distinctio possimus soluta. Id placeat 
                            cillum tempore voluptate repellendus lorem reprehenderit maxime 
                            molestias qui.
            </Bar>
            <Bar title = 'Custom Painting'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                            Laborum occaecat rerum est anim amet sint non dolor. Est commodo quo 
                            facilis imperdiet quod distinctio cumque facilis.
                            Eum laborum provident molestias repellendus quas voluptate quo. 
                            Facilis incididunt deserunt autem laborum labore aute. 
                            Et id expedita et anim quod est dolorum odio sint sint vel. 
                            Esse laboris dolorem sint molestias at quo. Est occaecat similique 
                            placeat voluptate eligendi fuga et.
                            Atque ut et cupidatat sunt in illum proident est vero. 
                            Qui anim molestias maxime et in facilis id harum. Ullamco et culpa et 
                            sint labore laborum ex officia quis quo voluptatum sint. Dolorem 
                            molestias in occaecat odio distinctio possimus soluta. Id placeat 
                            cillum tempore voluptate repellendus lorem reprehenderit maxime 
                            molestias qui.
            </Bar>
        </div>
    </div>
  )
}

export default Services
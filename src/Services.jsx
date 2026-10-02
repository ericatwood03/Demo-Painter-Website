import React from 'react'

function Services({reference}) {
  return (
    <div ref={reference} className='h-200 content-center'>
        <h1 className='justify-self-center text-5xl font-extrabold'>Services</h1>
        <div className='h-120 flex flex-col place-items-center justify-center gap-y-8'>
            <div className='border rounded-xl bg-[#EADCC3] border-[#EADCC3] w-8/10 p-4'>
                <h1 className='font-bold text-3xl'>Interior Painting</h1>
            </div>
            <div className='border rounded-xl bg-[#EADCC3] border-[#EADCC3] w-8/10 p-4'>
                <h1 className='font-bold text-3xl'>Exterior Painting</h1>
            </div>
            <div className='border rounded-xl bg-[#EADCC3] border-[#EADCC3] w-8/10 p-4'>
                <h1 className='font-bold text-3xl'>Cabinet Painting</h1>
            </div>
            <div className='border rounded-xl bg-[#EADCC3] border-[#EADCC3] w-8/10 p-4'>
                <h1 className='font-bold text-3xl'>Interior Painting</h1>
            </div>  
        </div>
    </div>
  )
}

export default Services
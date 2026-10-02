import React from 'react'

function Reviews({reference}) {
  return (
    <div  ref={reference} className='bg-[#F8F4ED]'>
        <div className='justify-self-center w-8/10 2xl:w-5/10 py-18'>
            <div className="zyff-testimonials"
                data-zyff-widget="testimonials"
                data-zyff-id="Yig3RSYTxrG4vg">  
            </div>
            <script src="https://www.zyff.app/w/testimonials.js" async></script>
        </div>
    </div>
  )
}

export default Reviews
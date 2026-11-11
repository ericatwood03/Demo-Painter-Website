import React from 'react'

function Contact({reference}) {
  return (
    <div ref={reference} className='py-20'>
        <div className='w-full flex justify-center'>
            <form className="flex flex-col sm:text-xl px-4 items-center py-30 rounded-lg bg-[#EADCC3] gap-y-2 sm:gap-y-6 max-w-90 sm:max-w-full w-full sm:w-auto" action="" method='post'>
                <h1 className='font-extrabold text-5xl -mt-20 pb-20 text-nowrap '>Contact Us</h1>
                <div className='w-full flex flex-col sm:flex-row gap-2 items-center sm:items-auto'>
                    <div className='w-full flex flex-col'>
                    <label className="font-bold" htmlFor="fname" >First Name</label>
                    <input className='border rounded-sm px-1' type="text" id="fname" name="fname" placeholder='Joe' required></input>
                    </div>
                    <div className='w-full flex flex-col'>
                    <label className="font-bold" htmlFor="lname">Last Name</label>
                    <input className='border rounded-sm px-1' type="text" id="lname" name="lname" placeholder='Doe' required></input>
                    </div>
                </div>
                <div className='w-full flex flex-col sm:flex-row gap-2 items-center sm:items-auto'>
                    <div className='w-full flex flex-col'>
                    <label className="font-bold" htmlFor="phone">Phone Number</label>
                    <input className='border rounded-sm px-1' type="tel" id="phone" name="phone" placeholder='123-456-7899' required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                    </div>
                    <div className='w-full flex flex-col'>
                    <label className="font-bold" htmlFor="email">Email</label>
                    <input className='border rounded-sm px-1' type="email" id="email" name="email" placeholder='JoeDoe12@gmail.com' required></input>
                    </div>
                </div>
                <div className='w-full flex flex-col items-start'>
                    <label className="font-bold" htmlFor="message">Message</label>
                    <textarea className='w-full box-border border rounded-sm px-1' id="message" name="message" placeholder='Tell us about your project...' rows="3" cols="44" required></textarea>
                </div>
                <div className='self-center translate-y-20'>
                    <input className="text-white text-2xl font-extrabold border bg-[#996515] border-[#996515] rounded-lg px-3 py-1" type="submit"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
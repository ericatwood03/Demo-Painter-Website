import React from 'react'

function About({reference}) {
  return (
    <div ref={reference} className='h-auto sm:h-260 content-center bg-[#F8F4ED]'>
        <div className=' rounded-xl flex flex-col place-self-center items-center w-8/10 max-w-120 bg-[#EADCC3] gap-y-8 px-2 sm:px-25 py-14 my-20'>
            <h1 className=' text-5xl font-extrabold'> About Us </h1>
            <p className=' text-lg sm:text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce felis tellus, facilisis eget tellus quis, luctus consequat velit. 
                Quisque sollicitudin, nibh quis tristique pellentesque, nisl dui laoreet felis, 
                at sagittis neque quam non urna. Vivamus eu eros dictum, gravida velit a, mollis dolor. 
                Praesent ut porttitor mauris. Fusce nunc ex, vestibulum vitae auctor a, blandit nec arcu. 
                Quisque eu ante velit. Donec ac quam neque. Praesent elementum nisl sed condimentum volutpat. 
                Maecenas rutrum auctor enim, eget pretium massa faucibus vel. Aenean feugiat metus ligula, 
                eu condimentum dui lacinia in. Aliquam facilisis elit urna, non maximus libero ullamcorper ac. 
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
        </div>
    </div>
  )
}

export default About
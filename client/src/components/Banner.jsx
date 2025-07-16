import React from 'react'

export default function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
    <div className='w-full md:w-1/2 md:mt-32 mt-12'>
       <div className='space-y-12'>
         <h1 className='text-4xl font-bold m'> Welcome, learners. Let's get learning <span className='text-green-500'>something new!!!</span></h1>
        <p className='text-xl font-semibold '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus voluptates aspernatur atque, veniam vel velit quidem maiores commodi deleniti laudantium sapiente ex modi numquam culpa qui nihil repudiandae temporibus.
        </p>
       </div>
    </div>
    <div className='w-full md:w-1/2'>Right</div>
    </div>
    </>
  )
}

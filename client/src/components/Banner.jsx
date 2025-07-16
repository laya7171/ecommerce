import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../../public/banner_bg_robo.png"

export default function Banner() {
  return (
    <>
    <div >
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
    <div className='w-full md:w-1/2 md:mt-38 mt-12'>
       <div className='space-y-12'>
         <h1 className='text-5xl font-bold m'> Welcome, learners. Let's get learning <span className='text-green-500'>something new!!!</span></h1>
        <p className='text-xl font-semibold '>
            At SikshayaLaya, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school and home.
        </p>
        <div >
            <Link to="/courses"><button className='bg-white text-green-800 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 text-2xl font-bold m'>Explore Course</button></Link>
        </div>
       </div>
    </div>
    <div className='w-full md:w-1/2 ml-16 mt-12  md:mt-6'>
      <img src={banner} alt="Banner" className='w-full h-auto ' />
    </div>
    </div>
    </div>
    </>
  )
}

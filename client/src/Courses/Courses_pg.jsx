import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import list from '../list.json'
import Courses from '../components/Courses'

function Courses_pg() {
  console.log(list)
  return (
    <>
      <Navbar />    
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <Courses/>
      </div>
        <Footer />
    </>
  )
}

export default Courses_pg
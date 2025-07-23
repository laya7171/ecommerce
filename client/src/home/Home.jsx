import React from 'react'   
import { BrowserRouter } from 'react-router-dom'
import Navbar  from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/footer.jsx'
import FreeCourse from '../components/FreeCourse.jsx'
import CourseDetail from '../components/Course_detail.jsx'
import '../App.css'

// Change function name to start with capital letter
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeCourse />
      <CourseDetail />
      <Footer/>
    </>
  )
}

// Change export to match
export default Home
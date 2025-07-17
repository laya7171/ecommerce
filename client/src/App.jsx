import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar  from './components/navbar.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/footer.jsx'
import FreeCourse from './components/FreeCourse.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <FreeCourse />
      <Footer />
    </BrowserRouter>
  )
}

export default App

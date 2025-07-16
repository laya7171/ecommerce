import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar  from './components/navbar.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Footer />
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import './App.css'
import Home from './home/home.jsx'
import {Routes, Route} from 'react-router-dom'
import Courses_pg from './Courses/Courses_pg.jsx'

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Paid_courses" element={<Courses_pg/>} />
   </Routes>
   </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Aboute from './Screens/Aboute'
import Contact from './Screens/Contact'
import '.././src/App.css'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navbar />} >
    <Route path="/" element={<Home/>} />
    <Route path="/Aboute" element={<Aboute />} />
    <Route path="/Contact" element={<Contact />} />
    
    </Route>
   
  </Routes>
)
  
}

export default App
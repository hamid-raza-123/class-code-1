import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Aboute">Aboute</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            
        </ul>
        <Outlet/>
    </div>
  )
}

export default Navbar
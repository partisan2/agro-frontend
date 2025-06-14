import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router';
import logo from "../assets/IMG_7708.JPG";
import backgroundImage from "../assets/background.jpg"



const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-white/30 shadow-md sticky top-0 z-50 backdrop-opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <NavLink to="/" className="flex items-center">
        <img src={logo} alt="AISMEX Logo" className="h-[80px]" />
        </NavLink>
        <nav className="hidden md:flex space-x-6">
        <NavLink to="/" smooth={true} className="text-2xl hover:text-green-600 hover:cursor-pointer">Home</NavLink>
        <ScrollLink to="search" smooth={true} className="text-2xl hover:text-green-600 hover:cursor-pointer">Search</ScrollLink>
        <NavLink to="/about" smooth={true} className="text-2xl hover:text-green-600 hover:cursor-pointer">About</NavLink>
        </nav>
        <NavLink to="/contact" className="bg-green-600 text-white px-4 py-2 rounded-full mr-4">Contact Us</NavLink>
    </div>
  )
}

export default Navbar
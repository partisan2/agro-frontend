import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import logo from "../assets/IMG_7708.JPG"
import Search from '../components/Search';

const Home = () => {
  return (
    <div className='font-[Jost]'>
      <header className="flex justify-between items-center p-2 bg-white shadow-md sticky top-0 z-50">
        <ScrollLink to="#" className="flex items-center">
          <img src={logo} alt="AISMEX Logo" className="h-[80px]" />
        </ScrollLink>
        <nav className="hidden md:flex space-x-6">
          <ScrollLink to="home" smooth={true} className="text-2xl hover:text-green-600">Home</ScrollLink>
          <ScrollLink to="search" smooth={true} className="text-2xl hover:text-green-600">Search</ScrollLink>
          <ScrollLink to="about" smooth={true} className="text-2xl hover:text-green-600">About</ScrollLink>
        </nav>
        <ScrollLink to="contact" className="bg-green-600 text-white px-4 py-2 rounded-full">Contact Us</ScrollLink>
      </header>
      <section id="home" className="text-center py-20 px-6 bg-green-50 w-full h-[100vh] flex justify-center items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Agricultural Information System for Smallholder Minor Export Crop Sector</h1>
          <p className="max-w-3xl mx-auto mb-6">
            Welcome to AISMEX, where we provide valuable information to smallholder farmers about tea, rubber, and coconut. Our goal is to empower Sri Lankan agriculture by equipping smallholder farmers with the latest knowledge and updates on these vital crops.
          </p>
          <ScrollLink to="search" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">Get Started</ScrollLink>
        </div>
      </section>
      {/* search */}
      <section id="search" className="py-20 px-6">
        <Search/>
      </section>
    </div>
  )
}

export default Home
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import backgroundImage from "../assets/background.jpg"
import Search from '../components/Search';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='font-[Jost]'>
      <Navbar />
      <section id="home" className={`text-center py-20 px-6 bg-green-50 w-full h-[100vh] flex justify-center items-center`}
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Agricultural Information System</h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">for Smallholder Minor Export Crop Sector</h1>
          <p className="max-w-3xl mx-auto mb-6 text-xl">
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
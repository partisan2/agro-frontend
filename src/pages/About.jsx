import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full flex flex-col justify-center items-center h-[100vh] bg-slate-50'>
            <div className='w-3/5 rounded-xl shadow-2xl backdrop-opacity-10 bg-green-50'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-3xl py-4 mt-4 font-semibold  text-green-800'>About AISMEX</h1>
                </div>
                <div className='w-full flex justify-center py-2 pb-6 '>
                    <p className='w-4/5 text-xl pb-4 text-clip font-thin'>
                        AISMEX (Agricultural Information System for Minor Export Crops) is a digital platform developed through a research initiative aimed at addressing the information-related challenges faced by smallholder farmers in the Kurunegala District of Sri Lanka. 
                        Focused on crops such as betel, pepper, ginger, turmeric, and cinnamon. AISMEX provides accessible, timely, and localized agricultural information to support better decision-making. The content is developed based on field-level data collected from farmers and aims to bridge the gap between rural farmers and modern agricultural knowledge through ICT.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
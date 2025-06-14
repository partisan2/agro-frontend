import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
          <div className="max-w-xl w-full bg-green-50 p-8 rounded-2xl shadow-md">
            <h1 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-6">
              If you have any questions, feedback, or would like to collaborate,
              please feel free to get in touch with the developer of this platform:
            </p>
            
            <div className="space-y-4 text-gray-800">
              <div>
                <span className="font-semibold">👤 H.A.D.S. Weerasingha</span>
              </div>
              <div>
                <span className="font-semibold">📧 Email:</span>{' '}
                <a href="mailto:dilaniweerasingha2000@gmail.com" className="text-blue-600 hover:underline">
                  dilaniweerasingha2000@gmail.com
                </a>
              </div>
              <div>
                <span className="font-semibold">📍 Location:</span> Kurunegala District, Sri Lanka
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
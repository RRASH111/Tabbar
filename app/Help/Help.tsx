import Image from 'next/image'
import React from 'react'

const Help = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <Image
      src={'/GetStarted.png'}
      alt="Get Started"
      width={500}
      height={500}
      className='rounded-xl shadow-2xl shadow-white/30 mb-4 md:mb-0 mr-0 md:mr-16'
    />
    <div className="text-center md:text-start">
      <Image src={'/Logo.png'} width={50} height={50} alt="logo" className="inline-block w-12 mb-6"/>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Get Started</h1>
      <p className="text-sm sm:text-base md:text-base lg:text-base">1. Pin the Extension in your browser for easy access</p>
      <p className="text-sm sm:text-base md:text-base lg:text-base">2. Open TabBar in any page by pressing <span className='shortcut'>Ctrl</span> <span className='shortcut'>⇧</span> <span className='shortcut'>K</span> for Windows,</p>
      <p className="text-sm sm:text-base md:text-base lg:text-base">OR <span className='shortcut'>⌘</span> <span className='shortcut'>⇧</span> <span className='shortcut'>K</span> for MAC.</p>
    </div>
  </div>
</div>
    
  )
}

export default Help
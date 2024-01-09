import Image from 'next/image'
import React from 'react'

const Help = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
        <Image src={'/GetStarted.png'} alt="Get Started" width={500} height={500}
          className='rounded-xl shadow-2xl shadow-white/30'
        />
        <div className="text-start ml-16 mb-48">
          <Image src={'/logo.png'} width={50} height={50} alt="logo" className="inline-block w-12 mb-6"/>
          <h1 className="text-xl">Get Started</h1>
          <p>1. Pin the Estention in your browser for easy access</p>
          <p>2. Open TabBar in any page by pressing <span className='shortcut'>Ctrl</span> <span className='shortcut'>⇧</span> <span className='shortcut'>K</span>
          for Windows,</p>
          <p> OR <span className='shortcut'>⌘</span> <span className='shortcut'>⇧</span> <span className='shortcut'>K</span> For MAC</p>
        </div>
    </div>
    
  )
}

export default Help
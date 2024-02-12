import { Button } from '@/components/ui/button'
import React from 'react'
import { Chrome } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center h-screen ">
        <div className="text-center bg:text-8xl md:text-5xl sm:text-2xl">Welcome to TabBar</div>
        <div className="text-center bg:text-3xl md:text-2xl sm:text-xl pt-2">Your Productivity Command Center for Chrome!</div>
            <div className="flex flex-col items-center justify-center"> 
            <Link href='https://chromewebstore.google.com/detail/tabbar-bookmark-history-t/gkkfhngobmbklnhnlmlgdfjoikmcfppp'>
            <Button
                variant='outline'
                className='mr-5 mt-5 p-4 sm:p-6 text-xl sm:text-lg md:text-xl lg:text-2xl rounded-xl shadow-xl bg-slate-800 hover:bg-slate-200 hover:text-black'
                >
                <Chrome className='mr-2 h-6 w-6'/> Download for Chrome 
                </Button>
            </Link>
            </div>
            
        <Image src={"/1.png"} width={500} height={500} alt="logo" className="inline-block mt-5 rounded-xl shadow-2xl shadow-zinc-700"/>
    </div>
    </div>
  )
}

export default Hero

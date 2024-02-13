import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Chrome } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className='flex items-center bg-slate-900 py-3 px-5'>
  <div className='flex items-center mr-auto ml-5 mt-3 mb-2'>
    <Image src={"/Logo.png"} width={50} height={50} alt="logo" className="inline-block w-12"/>
    <h1 className="text-2xl md:text-xl font-semibold ml-2 mt-2 mb-2 inline-block">TabBar</h1>
  </div>
  <div className='hidden md:flex justify-center flex-1 mt-2'> {/* Hide on small screens */}
    <div className='px-5 text-xl text-slate-50 hover:text-blue-600'><Link href='/'>Home</Link></div>
    <div className='px-5 text-xl text-slate-50 hover:text-blue-600'><Link href='/help'>Help</Link></div>
  </div>
  <div className='md:hidden flex items-center'> {/* Show on small screens */}
    <div className='px-2 text-l text-slate-50 hover:text-blue-600'><Link href='/'>Home</Link></div>
    <div className='px-2 text-l text-slate-50 hover:text-blue-600'><Link href='/help'>Help</Link></div>
  </div>
  <div className='hidden md:block'> {/* Hide on small screens */}
  <Link href='https://chromewebstore.google.com/detail/tabbar-bookmark-history-t/gkkfhngobmbklnhnlmlgdfjoikmcfppp'>
    <Button variant='outline' className='mr-5 text-l rounded-xl bg-slate-800 p-2 mt-2 hover:bg-slate-200 hover:text-black'>
      <Chrome className='mr-2 h-6 w-6'/> Download for Chrome 
    </Button>
    </Link>
  </div>
  <div className='md:hidden'> {/* Show on small screens */}
    
  </div>
</nav>
  )
}

export default Navbar
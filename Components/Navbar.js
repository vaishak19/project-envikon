import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="bg-green-600 px-6 py-3  my-4 rounded-xl h-12 flex item-center justify-between">
        <Link href="/">Envikon Logo</Link>
        <div className='flex gap-10 text-white font-bold'>
            <Link href="/Services" >Services</Link>
            <Link href="/About">About</Link>
            <Link href="/">Home</Link>
            <Link href="/ContactUs">Contact Us</Link>
        </div>        
    </div>
    </>
  )
}

export default Navbar
import MobileNav from '@/components/MobileNav'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-center items-center text-gray-200 text-2xl'>
      <MobileNav />
    </nav>
  )
}

export default Navbar

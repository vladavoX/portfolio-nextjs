import MobileNav from '@/components/MobileNav'
import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillHome,
  AiFillInfoCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillProject
} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='md:fixed md:left-0 md:top-0 md:h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 text-2xl'>
      <aside className='hidden md:flex flex-col justify-between h-full px-4 py-8'>
        <p>VA</p>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link
              href='#home'
              className='hover:text-green-600 duration-150'
            >
              <AiFillHome />
            </Link>
          </li>
          <li>
            <Link
              href='#about'
              className='hover:text-green-600 duration-150'
            >
              <AiFillInfoCircle />
            </Link>
          </li>
          <li>
            <Link
              href='#projects'
              className='hover:text-green-600 duration-150'
            >
              <AiFillProject />
            </Link>
          </li>
          <li>
            <Link
              href='#contact'
              className='hover:text-green-600 duration-150'
            >
              <AiFillMail />
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link
              href='https://github.com/vladavoX'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub />
            </Link>
          </li>
          <li>
            <Link
              href='https://linkedin.com/in/va99'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillLinkedin />
            </Link>
          </li>
        </ul>
      </aside>
      <MobileNav />
    </nav>
  )
}

export default Navbar

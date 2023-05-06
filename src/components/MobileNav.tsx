'use client'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai'
import { motion } from 'framer-motion'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className='md:hidden'>
      {isOpen && (
        <div className='flex flex-col items-center justify-evenly absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-gray-900 to-gray-800'>
          <ul className='flex flex-col items-center gap-4'>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              <Link
                href='#home'
                className='flex items-center gap-4'
              >
                <AiFillHome />
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <Link
                href='#about'
                className='flex items-center gap-4'
              >
                <AiFillInfoCircle />
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
            >
              <Link
                href='#projects'
                className='flex items-center gap-4'
              >
                <AiFillProject />
                Projects
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.8 }}
            >
              <Link
                href='#contact'
                className='flex items-center gap-4'
              >
                <AiFillMail />
                Contact
              </Link>
            </motion.li>
          </ul>
          <ul className='flex flex-col items-center gap-4'>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.9 }}
            >
              <Link
                href='www.github.com/vladavoX'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4'
              >
                <AiFillGithub />
                Github
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 1 }}
            >
              <Link
                href='www.linkedin.com/in/va99'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4'
              >
                <AiFillLinkedin />
                LinkedIn
              </Link>
            </motion.li>
          </ul>
        </div>
      )}
      <div className='fixed top-4 right-4'>
        <Hamburger
          size={24}
          color='#E5E7EB'
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
    </div>
  )
}

export default MobileNav

'use client'
import Hamburger from 'hamburger-react'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    isOpen && document.body.classList.add('overflow-hidden')
    !isOpen && document.body.classList.remove('overflow-hidden')
  }, [isOpen])
  return (
    <div className='md:hidden'>
      {isOpen && (
        <div className='flex flex-col items-center justify-evenly fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-gray-900 to-gray-800'>
          <ul className='flex flex-col items-center gap-4'>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              <a
                href='#home'
                className='flex items-center gap-4'
                onClick={() => setIsOpen(prev => !prev)}
              >
                <AiFillHome />
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <a
                href='#about'
                className='flex items-center gap-4'
                onClick={() => setIsOpen(prev => !prev)}
              >
                <AiFillInfoCircle />
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
            >
              <a
                href='#projects'
                className='flex items-center gap-4'
                onClick={() => setIsOpen(prev => !prev)}
              >
                <AiFillProject />
                Projects
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.8 }}
            >
              <a
                href='#contact'
                className='flex items-center gap-4'
                onClick={() => setIsOpen(prev => !prev)}
              >
                <AiFillMail />
                Contact
              </a>
            </motion.li>
          </ul>
          <ul className='flex flex-col items-center gap-4'>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.9 }}
            >
              <a
                href='https://github.com/vladavoX'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4'
                onClick={() => setIsOpen(prev => !prev)}
              >
                <AiFillGithub />
                Github
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 1 }}
            >
              <a
                href='https://linkedin.com/in/va99'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4'
                onClick={() => setIsOpen(prev => !prev)}
              >
                <AiFillLinkedin />
                LinkedIn
              </a>
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

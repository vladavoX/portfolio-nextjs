import MobileNav from '@/components/MobileNav'
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
    <nav className='md:fixed md:left-0 md:top-0 md:h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 text-2xl border-r-2 border-gray-700'>
      <aside className='hidden md:flex flex-col justify-between items-center h-full px-4 py-8'>
        <p>VA</p>
        <ul className='flex flex-col gap-4'>
          <li>
            <a
              href='#home'
              className='hover:text-green-600 duration-150'
            >
              <AiFillHome />
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='hover:text-green-600 duration-150'
            >
              <AiFillInfoCircle />
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='hover:text-green-600 duration-150'
            >
              <AiFillProject />
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-green-600 duration-150'
            >
              <AiFillMail />
            </a>
          </li>
        </ul>
        <ul className='flex flex-col gap-4'>
          <li>
            <a
              href='https://github.com/vladavoX'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-green-600 duration-150'
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/va99'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-green-600 duration-150'
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </aside>
      <MobileNav />
    </nav>
  )
}

export default Navbar

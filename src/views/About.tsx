import Links from '@/components/Links'

import SectionTopText from '@/components/SectionTopText'
import { HobbiesIcons, TechIcons } from './about/Icons'

const About = () => {
  return (
    <section
      id='about'
      className='h-screen text-gray-50 flex items-center w-full snap-start text-justify'
    >
      <div className='lg:border-2 lg:border-gray-700 rounded-xl lg:p-8 p-4 w-full text-sm md:text-lg font-semibold lg:bg-gradient-to-br lg:from-gray-900 lg:to-gray-800 flex items-center gap-8'>
        <div className='flex flex-col gap-4 w-1/2'>
          <span className='green-span'>&lt;section&gt;</span>
          <SectionTopText text='about me' />
          <div className='pl-4'>
            <span className='green-span'>&lt;h2&gt;</span>
            <h1 className='pl-4 text-lg md:text-2xl'>
              Dedicated and driven Full stack Developer with more than 3 years
              of experience, with a passion for creating beautiful, innovative,
              user-friendly and functional full stack applications.
            </h1>
            <span className='green-span'>&lt;/h2&gt;</span>
          </div>
          <Links />
          <span className='green-span'>&lt;/section&gt;</span>
        </div>
        <div className='flex flex-col gap-4 text-md md:text-xl w-1/2'>
          <div className='p-8 bg-gray-900 rounded-xl border-l-2 border-gray-700 flex flex-col items-center gap-4 w-full'>
            <h3>Technologies</h3>
            <TechIcons />
          </div>
          <div className='p-8 bg-gray-900 rounded-xl border-l-2 border-gray-700 flex flex-col items-center gap-4 w-full'>
            <h3>Hobbies & interest</h3>
            <HobbiesIcons />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

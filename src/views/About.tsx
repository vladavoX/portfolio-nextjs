import Links from '@/components/Links'

const About = () => {
  return (
    <section
      id='about'
      className='h-screen text-gray-50 flex items-center w-full snap-start'
    >
      <div className='lg:border-2 lg:border-gray-700 rounded-xl lg:p-8 p-4 w-full text-sm md:text-lg font-semibold lg:bg-gradient-to-br lg:from-gray-900 lg:to-gray-800'>
        <div className='flex flex-col gap-4'>
          <span className='green-span'>&lt;section&gt;</span>
          <div className='pl-4'>
            <span className='green-span'>&lt;p&gt;</span>
            <p className='pl-4 uppercase text-gray-200'>about me</p>
            <span className='green-span'>&lt;/p&gt;</span>
          </div>
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
      </div>
    </section>
  )
}

export default About

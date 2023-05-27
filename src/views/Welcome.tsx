import Links from '@/components/Links'
import SectionTopText from '@/components/SectionTopText'

const Welcome = () => {
  return (
    <section
      id='home'
      className='h-screen text-gray-50 flex items-center w-full snap-start'
    >
      <div className='lg:border-2 lg:border-gray-700 rounded-xl lg:p-8 p-4 w-full text-sm md:text-lg font-semibold lg:bg-gradient-to-br lg:from-gray-900 lg:to-gray-800'>
        <div className='flex flex-col gap-4'>
          <span className='green-span'>&lt;section&gt;</span>
          <SectionTopText text='vladimir aleksic / novi sad, serbia' />
          <div className='pl-4'>
            <span className='green-span'>&lt;h1&gt;</span>
            <h1 className='pl-4 text-2xl md:text-4xl'>
              Welcome!
              <br />
              I am Vladimir,
              <br />
              Full stack Developer,
              <br />
              Passionate about programming.
            </h1>
            <span className='green-span'>&lt;/h1&gt;</span>
          </div>
          <Links />
          <span className='green-span'>&lt;/section&gt;</span>
        </div>
      </div>
    </section>
  )
}

export default Welcome

import Links from "@/components/Links"
import SectionTopText from "@/components/SectionTopText"

const projects = [
  {
    id: 1,
    name: 'fagus',
    
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen text-gray-50 flex items-center w-full snap-start text-justify"
    >
      <div className='lg:border-2 lg:border-gray-700 rounded-xl lg:p-8 p-4 w-full text-sm md:text-lg font-semibold lg:bg-gradient-to-br lg:from-gray-900 lg:to-gray-800'>
        <div className='flex flex-col gap-4'>
          <span className='green-span'>&lt;section&gt;</span>
          <SectionTopText text='projects' />
          <div className='pl-4'>
            
          </div>
          <Links />
          <span className='green-span'>&lt;/section&gt;</span>
        </div>
      </div>
    </section>
  )
}

export default Projects
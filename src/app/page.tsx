import Welcome from '@/views/Welcome'
import About from '@/views/About'
import Projects from '@/views/Projects'

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-gray-900 to-gray-800 px-4 md:px-20 lg:px-32 font-mono snap-y snap-mandatory'>
      <Welcome />
      <About />
      <Projects />
    </main>
  )
}

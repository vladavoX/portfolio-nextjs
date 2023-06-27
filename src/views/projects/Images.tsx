import Image from 'next/image'

import fagus from '../../../public/fagus.png'
import adena from '../../../public/adena.png'

const projects = [
  {
    id: 1,
    name: 'FagusNS 021',
    img: fagus
  },
  {
    id: 2,
    name: 'Adena Farms',
    img: adena
  },
  {
    id: 3,
    name: 'FagusNS 021',
    img: fagus
  },
  {
    id: 4,
    name: 'Adena Farms',
    img: adena
  },
  {
    id: 5,
    name: 'FagusNS 021',
    img: fagus
  },
  {
    id: 6,
    name: 'Adena Farms',
    img: adena
  }
]

const Images = () => {
  return (
    <div className='py-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center'>
      {projects.map((project) => (
        <div
          key={project.id}
          className='group relative rounded-2xl shadow-md bg-gray-700 border-2 border-gray-700'
        >
          <div className='bg-gray-900 rounded-t-2xl h-14 text-green-500 flex justify-center items-center'>
            <p>{project.name}</p>
          </div>
          <Image
            src={project.img}
            alt={project.name}
            className='w-80 h-60 object-cover object-center rounded-b-2xl'
          />
          <div className='px-4 text-sm text-center cursor-default absolute bottom-0 left-0 w-full h-60 bg-gray-900 bg-opacity-100 rounded-b-2xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:border-t-2 border-gray-700'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
              voluptas sint. Voluptate officiis laborum, cupiditate ipsa qui
              quaerat, facere velit fuga porro magni sequi. Accusantium nobis
              laboriosam aut obcaecati nemo.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Images

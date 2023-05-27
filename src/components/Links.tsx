import Link from 'next/link'

const Links = () => {
  return (
    <div className='pl-4'>
      <span className='green-span'>&lt;a&gt;</span>
      <div className='pl-4 uppercase text-gray-200'>
        <a
          href='#home'
          className='cursor-pointer hover:text-green-600 duration-150'
        >
          home{' '}
        </a>
        /
        <a
          href='#about'
          className='cursor-pointer hover:text-green-600 duration-150'
        >
          {' '}
          about{' '}
        </a>
        /
        <a
          href='#projects'
          className='cursor-pointer hover:text-green-600 duration-150'
        >
          {' '}
          projects{' '}
        </a>
        /
        <a
          href='#contact'
          className='cursor-pointer hover:text-green-600 duration-150'
        >
          {' '}
          contact
        </a>
      </div>
      <span className='green-span'>&lt;/a&gt;</span>
    </div>
  )
}

export default Links

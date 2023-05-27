import Image from 'next/image'

import aws from '../../../public/aws.svg'
import react from '../../../public/react.svg'
import nodejs from '../../../public/nodejs.svg'
import ts from '../../../public/ts.svg'
import js from '../../../public/js.svg'
import css3 from '../../../public/css3.svg'
import figma from '../../../public/figma.svg'
import git from '../../../public/git.svg'
import html5 from '../../../public/html5.svg'
import mongo from '../../../public/mongo.svg'
import mysql from '../../../public/mysql.svg'
import nextjs from '../../../public/nextjs.svg'
import redux from '../../../public/redux.svg'
import sass from '../../../public/sass.svg'
import tailwind from '../../../public/tailwind.svg'
import basketball from '../../../public/basketball.svg'
import code from '../../../public/code.svg'
import gaming from '../../../public/gaming.svg'
import plane from '../../../public/plane.svg'

const techIcons = [
  { name: 'AWS', icon: aws, alt: 'aws' },
  { name: 'React', icon: react, alt: 'react' },
  { name: 'Node.js', icon: nodejs, alt: 'nodejs' },
  { name: 'TypeScript', icon: ts, alt: 'typescript' },
  { name: 'JavaScript', icon: js, alt: 'javascript' },
  { name: 'CSS3', icon: css3, alt: 'css3' },
  { name: 'Figma', icon: figma, alt: 'figma' },
  { name: 'Git', icon: git, alt: 'git' },
  { name: 'HTML5', icon: html5, alt: 'html5' },
  { name: 'MongoDB', icon: mongo, alt: 'mongodb' },
  { name: 'MySQL', icon: mysql, alt: 'mysql' },
  { name: 'Next.js', icon: nextjs, alt: 'nextjs' },
  { name: 'Redux', icon: redux, alt: 'redux' },
  { name: 'Sass', icon: sass, alt: 'sass' },
  { name: 'Tailwind', icon: tailwind, alt: 'tailwind' }
]

const hobbiesIcons = [
  { name: 'Basketball', icon: basketball, alt: 'basketball' },
  { name: 'Code', icon: code, alt: 'code' },
  { name: 'Gaming', icon: gaming, alt: 'gaming' },
  { name: 'Traveling', icon: plane, alt: 'traveling' }
]

const TechIcons = () => {
  return (
    <div className='grid grid-cols-3 text-5xl justify-items-center gap-y-4 w-full'>
      {techIcons.map((icon) => (
        <Image
          key={icon.name}
          src={icon.icon}
          alt={icon.alt}
          width={50}
          height={50}
        />
      ))}
    </div>
  )
}

const HobbiesIcons = () => {
  return (
    <div className='grid grid-cols-4 text-5xl justify-items-center gap-y-4 w-full'>
      {hobbiesIcons.map((icon) => (
        <Image
          key={icon.name}
          src={icon.icon}
          alt={icon.alt}
          width={50}
          height={50}
        />
      ))}
    </div>
  )
}

export { TechIcons, HobbiesIcons }

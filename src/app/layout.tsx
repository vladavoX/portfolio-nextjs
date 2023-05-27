import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vladimir Aleksic',
  description:
    'Explore the impressive portfolio of a talented full-stack developer, showcasing expertise in web development, front-end design, and back-end programming. Witness the fusion of creativity and technical prowess, with a range of innovative projects and cutting-edge solutions. Discover a versatile skill set that combines modern frameworks, languages, and tools, bringing dynamic and interactive experiences to life. Get inspired and witness the power of code through this captivating portfolio website."'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

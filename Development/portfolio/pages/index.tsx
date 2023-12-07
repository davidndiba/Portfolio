import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import LeftSide from '@/components/leftSide'
import RightSide from '@/components/RightSide'
import { motion  } from 'framer-motion'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
      <Navbar/>
      <div className='w-full h-[88vh] xl!flex items-center gap-20 justify-between'>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'
        >
          <LeftSide/>
          </motion.div> 
        </div>
        <div className='h-[88vh] mx-auto p-4'>
          <Banner />
           <About/>
          <Skills/>
          <Projects/>
          <Archive/>
          <Contact/>
          <Footer/>
        </div>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'
        >
        
          </motion.div> 
        <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ delay: 1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'
        >
          <RightSide/>
          </motion.div> 
    </main>
  )
}

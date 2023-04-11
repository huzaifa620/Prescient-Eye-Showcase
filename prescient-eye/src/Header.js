import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import logo from './logo4.png'

const Header = () => {

  const [isDark, setisDark] = useState(true)

  const toggleDark = () => {
    document.body.classList.toggle('dark')
    setisDark(!isDark)
  }

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='sticky top-0 p-5 mt-2 flex flex-col items-center md:items-start justify-between w-full lg:w-[85%] mx-auto z-20 h-fit'>

      <div className='w-full flex items-center justify-between'>
        <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='hidden md:flex flex-col text-[#141414] dark:text-[#f1f3f2] cursor-pointer space-y-2 font-bold h-full'>

          <a href="#home">
            home
          </a>

          <a href="#about" className='opacity-40'>
            about
          </a>

          <a href="#features" className='opacity-40'>
            features
          </a>

          <a href="#diagnose" className='opacity-40'>
            diagnose
          </a>

        </motion.div>

        <motion.div initial={{ y: -100, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center space-x-4 h-full'>
          <img className='rounded-full h-16 w-16' src={logo} alt=''/>
          <div className='text-lg font-bold'>Prescient Eye</div>
        </motion.div>

        <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row-reverse md:flex-row items-center text-[#141414] dark:text-[#f1f3f2] cursor-pointer space-x-4 h-full'>

          <a href="#contactUs" className='hidden md:flex space-x-1 items-center bg-transparent px-3 py-1 rounded-3xl border border-[#141414] dark:border-[#f1f3f2]'>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>

            <span>Contact Us</span>
          </a>

          {!openMenu ? (<svg onClick={() => {setOpenMenu(!openMenu)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>) : (
          <svg onClick={() => {setOpenMenu(!openMenu)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /> </svg> 
          )}

          {isDark ? <SunIcon onClick={toggleDark} className='h-6' /> : <MoonIcon onClick={toggleDark} className='h-6' />}

        </motion.div>

      </div> 
      {openMenu && (

        <div className="w-full h-fit bg-[#141414] dark:bg-[#f1f3f2] md:hidden items-center flex flex-col space-y-2 font-medium p-4 text-[#f1f3f2] dark:text-[#141414] absolute mt-[20%]">
          <a className='border border-[#f1f3f2] dark:border-[#141414] w-1/3 text-center p-1' href="#home">
            Home
          </a>

          <a href="#about" className='opacity-50'>
            About
          </a>

          <a href="#features" className='opacity-50'>
            Features
          </a>

          <a href="#diagnose" className='opacity-50'>
            Diagnose
          </a>
        </div>

      )}

    </header>
  )
}

export default Header
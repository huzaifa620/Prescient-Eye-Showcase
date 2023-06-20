import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import logo from './logo4.png'
import { ThemeContext } from './Context';

const Header = ({section}) => {

  const { isDark, toggleTheme } = useContext(ThemeContext)

  const fillColor = isDark ? 'white' : 'black'
  const strokeColor = isDark ? 'black' : 'white'
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        setOpenMenu(false)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    };
  }, [section]);

  return (
    <header className='p-5 mt-2 flex flex-col items-center md:items-start justify-between w-full px-[4%] mx-auto z-20 h-fit font-sans'>

      <div className='w-full flex items-center md:items-start justify-between'>
        <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='hidden md:flex flex-col text-[#141414] dark:text-[#f1f3f2] cursor-pointer space-y-2 font-bold w-[215px] h-full'>

          <a href="#home" className={section[0] === 1 ? "opacity-100" : "opacity-40"}>
            Home
          </a>

          <a href="#diagnose" className={section[3] === 1 ? "opacity-100" : "opacity-40"}>
            Diagnose
          </a>

          <a href="#features" className={section[2] === 1 ? "opacity-100" : "opacity-40"}>
            Features
          </a>

        </motion.div>

        <motion.div initial={{ y: -100, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center space-x-4 w-full md:w-[215px] h-full'>
          <img className='rounded-full h-16 w-16' src={logo} alt=''/>
          <div className='text-lg font-bold text-black dark:text-white'>Prescient Eye</div>
        </motion.div>

        <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row-reverse md:flex-row items-center text-[#141414] dark:text-[#f1f3f2] cursor-pointer md:justify-end space-x-4 w-[215px] h-full'>

          {!openMenu ? (<svg onClick={() => {setOpenMenu(!openMenu)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>) : (
          <svg onClick={() => {setOpenMenu(!openMenu)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /> </svg> 
          )}

          {isDark ? <SunIcon onClick={toggleTheme} className='h-6 md:mt-[10%]' /> : <MoonIcon onClick={toggleTheme} className='h-6 md:mt-[10%]' />}

        </motion.div>

      </div>
      {openMenu && (

        <div className="w-full absolute h-full z-50 bg-[#141414] dark:bg-[#f1f3f2] md:hidden items-center flex flex-col space-y-2 font-medium p-4 text-[#f1f3f2] dark:text-[#141414] mt-[20%]">
          <a href="#home" onClick={() => setOpenMenu(false)} className={section[0] === 1 ? 'border border-[#f1f3f2] dark:border-[#141414] w-1/3 text-center p-1' : "opacity-50"}>
            Home
          </a>

          <a href="#diagnose" onClick={() => setOpenMenu(false)} className={section[3] === 1 ? 'border border-[#f1f3f2] dark:border-[#141414] w-1/3 text-center p-1' : "opacity-50"}>
            Diagnose
          </a>

          <a href="#features" onClick={() => setOpenMenu(false)} className={section[2] === 1 ? 'border border-[#f1f3f2] dark:border-[#141414] w-1/3 text-center p-1' : "opacity-50"}>
            Features
          </a>

        </div>

      )}

    </header>
  )
}

export default Header
"use client";
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    open: {
      width: "200px",
      height: "2.5rem",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      width: "40px",
      height: "2.5rem",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const inputVariants = {
    visible: {
      opacity: 1,
      width: "100%",
      transition: { duration: 0.3 },
    },
    hidden: {
      opacity: 0,
      width: "0px",
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className='h-fit flex justify-end lg:justify-between w-full lg:w-[80rem] mt-2 mr-2'>

      <motion.div className='flex items-center bg-white rounded-lg p-2 shadow-sm w-10 lg:w-52' initial={false} animate={isOpen ? "open" : "closed"} variants={containerVariants}>
        <CiSearch onClick={() => setIsOpen(!isOpen)} className='text-xl'/>
        <motion.input type="text" placeholder='Search' name="search" id="searchBar" className={`bg-transparent outline-none px-2 ${!isOpen ? 'hidden' : 'block'}`} initial="hidden" animate={isOpen ? "visible" : "hidden"} variants={inputVariants}/>
      </motion.div>

      <div className='lg:flex gap-4 flex-row-reverse items-center hidden'>
        <img src="https://placehold.co/600x400" alt="..." className='w-10 h-10 object-cover rounded-full'/>
        <div className='flex gap-3 items-center'>
          <button className='hover:bg-notif rounded-full w-7 h-7 flex items-center justify-center transition duration-300 ease-in-out'>
            <IoMoonOutline className='text-xl'/>
          </button>
          <button className='hover:bg-notif rounded-full w-7 h-7 flex items-center justify-center transition duration-300 ease-in-out'>
            <IoIosNotificationsOutline className='text-2xl'/>
          </button>
        </div>
      </div>
    </nav>

  )
}

export default nav
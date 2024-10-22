"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { GoHome } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { LuBookCopy } from "react-icons/lu";
import { IoInformationCircleOutline, IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const sidebar = () => {
  const sideItems = [
    { icon: <GoHome className="text-lg lg:text-2xl" />, title: "Beranda", link: "/" },
    { icon: <HiOutlineUsers className="text-lg lg:text-2xl" />, title: "Siswa", link: "/siswa" },
    { icon: <FaRegUser className="text-lg lg:text-2xl" />, title: "Guru", link: "/guru" },
    { icon: <LuBookCopy className="text-lg lg:text-2xl" />, title: "Mata Pelajaran", link: "/mata-pelajaran" },
    { icon: <IoInformationCircleOutline className="text-lg lg:text-2xl" />, title: "Tentang Kami", link: "/tentangkami" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.5,
      filter: "blur(10px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="bg-white shadow-lg py-5 px-3 pl-5 h-[46rem] w-72 rounded-lg hidden lg:block">
        <h1 className="font-semibold text-3xl">X RPL 1</h1>

        <ul className="mt-14 flex flex-col gap-7">
          {sideItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link} className="flex items-center text-center gap-3">
                  {item.icon}
                  <span className="text-base font-semibold">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-white w-10 h-10 flex justify-center items-center rounded-xl lg:hidden mt-2 ml-2 absolute">
        <GiHamburgerMenu className="text-xl" />
      </button>

      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} variants={variants} className="bg-white shadow-lg py-5 px-3 pl-5 h-[46rem] w-72 rounded-lg absolute lg:hidden">
        <button onClick={() => setIsOpen(false)} className="lg:hidden">
          <IoCloseOutline className="text-2xl" />
        </button>
        <h1 className="font-semibold text-3xl">X RPL 1</h1>

        <ul className="mt-14 flex flex-col gap-7">
          {sideItems.map((item, index) => {
            return (
              <motion.li key={index} variants={itemVariants}>
                <a href={item.link} className="flex items-center text-center gap-3">
                  {item.icon}
                  <span className="text-base font-semibold">{item.title}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
};

export default sidebar;

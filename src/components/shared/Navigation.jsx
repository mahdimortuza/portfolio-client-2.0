import { IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { RiTwitterXLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navList = (
    <ul className="font-raleway font-semibold text-lg mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-[#222A35]">
      
      
      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink
            className={({ isActive }) =>
              (
                "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                {
                  " bg-red-500 text-white": isActive,
                }
              )
            }
            to="/about"
          >
            About
          </NavLink>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/technologies"
          
          className="px-3 py-2 cursor-pointer"
        >
          Technologies
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/projects"
          
          className="px-3 py-2 cursor-pointer"
        >
          Work
        </Link>
      </motion.li>

      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/contact"
          
          className="px-3 py-2 cursor-pointer"
        >
          Contact
        </Link>
      </motion.li>

      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="/blogs" 
          className="px-3 py-2 cursor-pointer"
        >
          Blogs
        </Link>
      </motion.li>

      
    </ul>
  );

  const social = (
    <ul className="flex gap-6 md:gap-9 ">
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>
      <li className="hidden md:block"></li>

      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://www.linkedin.com/in/mahdi-mortuza">
          <FaLinkedinIn className="w-6 h-5 text-[#222A35]" />
        </a>
      </motion.li>

      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://github.com/mahdimortuza">
          <FaGithub className="w-6 h-5 text-[#222A35]" />
        </a>
      </motion.li>

      <motion.li
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="https://twitter.com/mahdi_mortuza">
          <RiTwitterXLine className="w-6 h-5 text-[#222A35]" />
        </a>
      </motion.li>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#FEFAF6]">
      <div className="flex items-center justify-between text-black max-w-[1350px] mx-auto">
        <div className="mr-4 hidden lg:block">{navList}</div>

        <motion.a
          href="/"
          whileHover={{
            scale: 1.09,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={logo}></img>
        </motion.a>

        <div className="flex  items-center gap-4">
          <div className="hidden md:block">{social}</div>

          <IconButton
            className="ml-auto text-inherit bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HiBars2 className=" h-[34px] w-[34px] " />
            ) : (
              <HiBars2 className=" h-[34px] w-[34px] " />
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div> {navList}</div>
        <div className="">{social}</div>
      </MobileNav>
    </Navbar>
  );
};

export default StickyNavbar;

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navList = (
    <motion.ul
      className="font-raleway font-semibold text-lg flex gap-5 md:gap-14 text-[#222A35] "
      // initial={{ opacity: 0, marginBottom: 30 }}
      // whileInView={{ opacity: 1, marginBottom: 0 }}
      // transition={{ delay: 0.5, duration: .5 }}
    >
      <li>
        <Link
          to="about"
          
          className="px-3 py-2 cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="technologies"
          
          className="px-3 py-2 cursor-pointer"
        >
          Technologies
        </Link>
      </li>
      <li>
        <Link
          to="projects"
           
          className="px-3 py-2 cursor-pointer"
        >
          Work
        </Link>
      </li>

      <li>
        <Link
          to="contact"
         
          className="px-3 py-2 cursor-pointer"
        >
          Contact
        </Link>
      </li>


      <li>
        <Link
          to="/blogs"
          className="px-3 py-2 cursor-pointer"
        >
          Blogs
        </Link>
      </li>

       
    </motion.ul>
  );

  const social = (
    <ul className="flex item-center justify-center gap-16 ">
      <li>
        <a href="https://www.linkedin.com/in/mahdi-mortuza">
          <FaLinkedinIn className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>

      <li>
        <a href="https://github.com/mahdimortuza">
          <FaGithub className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>

      <li>
        <a href="https://twitter.com/mahdi_mortuza">
          <RiTwitterXLine className="w-6 h-5 text-[#222A35]" />
        </a>
      </li>
    </ul>
  );
  return (
    <div className="pb-10 flex flex-col items-center mt-[60px] md:mt-[120px]">
      <motion.a
        href="/"
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img
          className="w-12 md:w-16 h-9 md:h-12"
          src={logo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        ></motion.img>
      </motion.a>
      <motion.div
        className="mt-8"
        // initial={{ opacity: 0, marginLeft: 100 }}
        // whileInView={{ opacity: 1, marginLeft: 0 }}
        // transition={{ delay: 0.5, duration: 0.8 }}
      >
        {navList}
      </motion.div>
      <motion.div
        className="mx-auto mt-8" 
      > 
        {social}
      </motion.div>

      <h1 className=" mt-[76px] font-raleway text-[15px] font-[400] text-center text-[#5C606C]">
        &copy; Copyright Mahdi Mortuza, {year}
      </h1>
    </div>
  );
};

export default Footer;

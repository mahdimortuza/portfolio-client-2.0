import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgObject from "../../../assets/bg-objects/obj-1.svg";
import fgObj1 from "../../../assets/fg-objects/fg-1.png";
import fgObj2 from "../../../assets/fg-objects/fg-2.png";
import img from "../../../assets/image/mahdi.png";
import resume from "../../../assets/resume/Mahdi_Mortuza_Resume.pdf";


const Hero = () => {

  const laptop = { 
    animate: { 
      scale: 1,
      y: 15,
      transition: {
        duration: .5,
        y: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div
      name="about"
      className="relative px-4 lg:px-8 bg-[#FEFAF6] max-w-[1350px] mx-auto pb-[37px] md:pb-16"
    >
      <img className="absolute top-0 right-0" src={bgObject}></img>

      <div className=" flex flex-col md:flex-row md:items-end md:justify-between pt-10 md:pt-5">
        <div className="md:w-[600px]">
          <motion.h1
            className="font-playfair text-[rgb(19,34,56)] text-[48px] md:text-[56px] font-bold leading-[50px] md:leading-[64px]"
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ dpuration: 1 }}
          >
            Hi 👋 <br />
            I’m Mahdi Mortuza
          </motion.h1>
          <motion.p
            className="mt-[17px] md:mt-[27px] font-raleway font-medium text-[20px] md:text-[30px] text-[#556070] leading-[24px] md:leading-[40px]"
            initial={{ opacity: 0, marginBottom: -15 }}
            whileInView={{ opacity: 1, marginBottom: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A full-stack web developer. I solve web problems by crafting
            scalable products using NextJS and MERN stack technology.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start mt-[26px] md:mt-[60px] font-raleway leading-[40px] text-[18px] md:text-xl font-bold gap-7"
            initial={{ opacity: 0, marginLeft: 15 }}
            whileInView={{ opacity: 1, marginLeft: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link to="/contact">
            <motion.button
              className="px-[14px] md:px-5 py-2 md:py-[10px] bg-gradient-to-r from-[#75B4F1] to-[#A573F0] 
             rounded-[4px] text-white"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Let’s Talk
            </motion.button>
</Link>
            <motion.button
              className="px-[14px] md:px-5 py-2 md:py-[10px] text-[#4285F4] border-2  border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={resume} download={resume}>
                My Resume
              </a>
            </motion.button>
          </motion.div>
        </div>
        <div className="relative">
          <img
            src={fgObj1}
            className="absolute left-0 top-10 md:top-16 w-[45px] h-[43px] md:w-[72px]  md:h-[69px] "
          />
          <motion.img
            className=""
            initial={{ opacity: 0, marginRight: 20 }}
            whileInView={{ opacity: 1, marginRight: 0 }}
            transition={{ duration: 1 }}
            src={img}
          ></motion.img>
          <img
            src={fgObj2}
            className="absolute right-28 -mt-[15] md:-mt-[20px] h-[38px] md:w-[72px]  md:h-[69px]"
          />
        </div>
      </div>

 <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        className="cursor-pointer" 
      >     
      <motion.div
      className=""
      variants={laptop}
      animate="animate"
      >
      
        <FaChevronDown className="text-[#132238] mt-[20px] mx-auto text-[30px]" />
      
      </motion.div>
      </Link>
    </div>
  );
};

export default Hero;

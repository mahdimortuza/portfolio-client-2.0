import { motion } from "framer-motion";
// import express from "../../../assets/logos/express.svg";
// import firebase from "../../../assets/logos/firebase.svg";
// import mongodb from "../../../assets/logos/mongodb.svg";
// import mongoose from "../../../assets/logos/mongoose.svg";
// import node from "../../../assets/logos/node.svg";
// import redux from "../../../assets/logos/redux.svg";
import { Link } from "react-router-dom";
import next from "../../../assets/logos/next.svg";
import node from "../../../assets/logos/node.svg";
import react from "../../../assets/logos/react.svg";
import tailwind from "../../../assets/logos/tailwind.svg";
import ts from "../../../assets/logos/ts.svg";


const Technologies = () => {
  return (
    <div
      name="skills"
      className="max-w-[1350px] mx-auto px-4 lg:px-8 mt-[35px] md:mt-[70px] pt-1 md:pt-[84px]"
    >
      <div className=" flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-8 ">
        <h1
          className="font-playfair text-[38px] md:text-[40px] text-left md:text-right leading-[40px] md:leading-[66px]"
          // initial={{ opacity: 0, marginLeft: -100 }}
          // whileInView={{ opacity: 1, marginLeft: 0 }}
          // transition={{ delay: 0.5, duration: 0.5 }}
        >
          What   Technologies <br /> I use
        </h1>
        <motion.div
          className="w-[176px] h-[1px] md:w-[1px] md:h-[230px] bg-[#132238]"
          initial={{ opacity: 0, marginBottom: 0 }}
          whileInView={{ opacity: 1, marginBottom: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        ></motion.div>
        <p
          className="w-full md:w-[612px] font-raleway text-[20px] md:text-[30px] font-medium leading-[24px] md:leading-[40px]"
          // initial={{ opacity: 0, marginRight: -100 }}
          // whileInView={{ opacity: 1, marginRight: 0 }}
          // transition={{ delay: 0.5, duration: 0.5 }}
        >
          I assure stability, security, and a unique UX with tailored front-end
          and back-end technologies.
        </p>
      </div>

      {/* technologies all images */}
      <div className="flex flex-row md:flex-col justify-between md:gap-16 px-10 md:px-0 items-center mt-[40px] md:mt-[100px] mb-[160px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          
        <div
            // initial={{ opacity: 0, marginBottom: -15 }}
            // whileInView={{ opacity: 1, marginBottom: 0 }}
            // transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          > <motion.img   
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={react}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">ReactJS</span>
          </div>
          
          <div
            // initial={{ opacity: 0, marginBottom: -15 }}
            // whileInView={{ opacity: 1, marginBottom: 0 }}
            // transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          > <motion.img   
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={next}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">NextJS</span>
          </div>

          <div
            // initial={{ opacity: 0, marginBottom: -15 }}
            // whileInView={{ opacity: 1, marginBottom: 0 }}
            // transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          > <motion.img   
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={tailwind}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">Tailwind CSS</span>
          </div>


          <div
            // initial={{ opacity: 0, marginBottom: -15 }}
            // whileInView={{ opacity: 1, marginBottom: 0 }}
            // transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          > <motion.img   
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={node}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">NodeJS</span>
          </div>

          <div
            // initial={{ opacity: 0, marginBottom: -15 }}
            // whileInView={{ opacity: 1, marginBottom: 0 }}
            // transition={{ delay: 0.7, duration: 1 }}
            className="tooltip"
          > <motion.img   
              className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
              src={ts}
              whileHover={{
                scale: 1.09,
                transition: { duration: 0.1 },
              }}
            />
            <span className="tooltiptext">TypeScript</span>
          </div>
          
        </div>
        
        <Link to='/technologies'>
        <motion.button
              className="px-[14px] md:px-5 py-2 md:py-[10px] text-[#4285F4] border-2  border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
               View All
            </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Technologies;

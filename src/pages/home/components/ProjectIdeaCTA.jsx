import { motion } from "framer-motion";
import titleBg from "../../../assets/bg-objects/section-title-bg.svg";
import obj2 from "../../../assets/fg-objects/fg-1.png";
import obj1 from "../../../assets/fg-objects/fg-2.png";

const ProjectIdeaCTA = () => {
  return (
    <div className="bg-[#FEFAF6] max-w-[1350px] mx-auto pb-[83px] pt-[40px] md:pt-[95px] px-4 lg:px-8">
      <div
        className="bg-cover h-[200px] md:bg-auto md:h-[450px] bg-no-repeat bg-center flex justify-center items-center relative"
        style={{ backgroundImage: `url(${titleBg})` }}
      >
        <img
          className="absolute top-16 right-[530px] w-[45px] md:w-[53px] h-[46px] md:h-[51px]"
          src={obj1}
        />
        <h1
          className=" text-[#132238] text-center text-[32px] md:text-[56px] font-bold leading-[40px] md:leading-[66px] font-playfair"
          // initial={{ opacity: 0, marginTop: 15 }}
          // whileInView={{ opacity: 1, marginTop: 0 }}
          // transition={{ delay: 0.5, duration: 1 }}
        >
          Have a project idea? <br /> Discuss now!
        </h1>

        <motion.button
          className="absolute -bottom-5 md:bottom-[68px] text-[18px] md:text-[20px] text-white leading-[24px] font-bold bg-gradient-to-r from-[#75B4F1] to-[#A573F0]  rounded-[4px] px-[16px] py-[8px]"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a href=" https://www.linkedin.com/in/mahdi-mortuza/">Let’s Talk</a>
        </motion.button>

        <img
          className="absolute -bottom-10 md:bottom-10 left-[30px] md:left-[300px] w-[40px] md:w-[72px] h-[40px] md:h-[69px] "
          src={obj2}
        />
      </div>
    </div>
  );
};

export default ProjectIdeaCTA;

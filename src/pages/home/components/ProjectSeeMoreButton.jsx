 import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const ProjectSeeMoreButton = () => {
  return (
    <div className=" flex flex-col items-center ">
   <Link to="projects">
   <motion.button
              className="mt-6 px-[14px] md:px-5 py-2 md:py-[10px] text-[#4285F4] border-2  border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
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
  )
}

export default ProjectSeeMoreButton
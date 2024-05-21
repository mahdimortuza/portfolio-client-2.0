import { motion } from "framer-motion"
import { useParams } from "react-router-dom"
import defaultImg from "../../assets/projects/default.webp"
import Container from "../../components/container/Container"
import { useGetSingleProjectQuery } from "../../redux/api/projectApi"
import ErrorUI from "../../ui/ErrorUI"
import LoadingUI from "../../ui/LoadingUI"

const ProjectDetail = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetSingleProjectQuery(id)
  
  if (isLoading) {
    return <LoadingUI />
  }

  if (isError) {
    return <ErrorUI />
  }

  const project = data.data
  const projectImage = project.image || defaultImg

  return (
    <Container>
      <div className="my-10"> 
        <div className="flex flex-col items-center">
          <img
            className="w-[350px] md:w-[800px]"
            src={projectImage}
            alt="Project Image"
            onError={(e) => e.currentTarget.src = defaultImg}
          />
          <div className="my-10 grid grid-cols-2 md:flex gap-5">
            <a href={project.liveLink}>
              <motion.button
                className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
              >
                Live app link
              </motion.button>
            </a>
            <a href={project.githubFrontend}>
              <motion.button
                className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
              >
                FrontEnd code
              </motion.button>
            </a>
            <a href={project.githubBackend}>
              <motion.button
                className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
              >
                BackEnd code
              </motion.button>
            </a>
            <a href={project.erDiagram}>
              <motion.button
                className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
              >
                ER diagram
              </motion.button>
            </a>
            <a href={project.dataRelationDiagram}>
              <motion.button
                className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
              >
                ER model
              </motion.button>
            </a>
          </div>
        </div>
          <h1 className="text-2xl md:text-4xl font-bold">{project.title}</h1>
          <h3 className="text-xl md:text-3xl">{project.subTitle}</h3>
          <p className="mt-5 text-lg">{project.descriptionPara1}</p>
          <p className="mt-5 text-lg">{project.descriptionPara2}</p>
          <p className="mt-5 text-lg">{project.descriptionPara3}</p>
      </div>
    </Container>
  )
}

export default ProjectDetail

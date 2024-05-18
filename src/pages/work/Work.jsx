import { Image } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/projects/default.webp";
import Container from "../../components/container/Container";
import { useGetAllProjectsQuery } from "../../redux/api/projectApi";
import ErrorUI from "../../ui/ErrorUI";
import LoadingUI from "../../ui/LoadingUI";

const Work = () => {
  const { data, isLoading, isError } = useGetAllProjectsQuery();

  if (isLoading) {
    return <LoadingUI />;
  }

  if (isError) {
    return <ErrorUI />;
  }
  
  const projects = data.data;

  return (
    <Container>
      <h1
          className="font-playfair text-[38px] md:text-[40px] text-center md:text-center leading-[40px] md:leading-[66px] my-10"
           
        >
          Some of my recent<br />  projects
        </h1>

      <div className="my-10 grid md:grid-cols-4 gap-10">
        {projects.map((item) => (
          <div key={item._id} className="flex flex-col justify-center border border-black rounded-lg p-1">
            <Image
              className="w-[300px] h-[250px] rounded-md"
              src={item.image || defaultImg}
              fallback={defaultImg}
            />
            <h2 className="mt-4 text-xl font-semibold px-2">{item.title}</h2>
            <div className="flex justify-end gap-4 mt-4">
              <Link to={item.liveLink}>
                <motion.button
                  className="px-[8px] md:px-3 py-1 md:py-[6px] bg-gradient-to-r from-[#75B4F1] to-[#A573F0] 
                  rounded-[4px] text-white"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Live site
                </motion.button>
              </Link>
              <Link to={`/projects/${item._id}`}>
                <motion.button
                  className="px-[8px] md:px-3 py-1 md:py-[4px] text-[#4285F4] border-2 border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  See more 👉
                </motion.button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Work;

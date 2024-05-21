import { Image } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/projects/default.webp";
import Container from "../../components/container/Container";
import { useGetAllBlogsQuery } from "../../redux/api/blogApi";
import ErrorUI from "../../ui/ErrorUI";
import LoadingUI from "../../ui/LoadingUI";


const Blogs = () => {
  const { data, isLoading, isError } = useGetAllBlogsQuery({});
  if (isLoading) {
    return <LoadingUI />;
  }
  if (isError) {
    return <ErrorUI />;
  }
  const blogs = data.data;
  // console.log(blogs);

  return (
    <Container>
      <h1 className="font-playfair text-[38px] md:text-[40px] text-center md:text-center leading-[40px] md:leading-[66px] my-10">
        Read my blogs here.
      </h1>
      <div className="grid md:grid-cols-4 gap-5">
        {blogs.map((item) => (
          <div
            key={item._id}
            className="flex flex-col justify-center border border-black rounded-lg p-2"
          >
            {/* <Image
              className="w-[300px] h-[250px] rounded-md"
              src={item.image || defaultImg}
              fallback={defaultImg}
            /> */}

            <Image className="mx-auto" 
               src={item.image || defaultImg} 
              fallback={defaultImg}
                />
            <p className="text-sm mt-2">
              Category: {""}
              <span className="text-xs">{item.category}</span>
            </p>
            <h4 className="font-semibold text-xl  mt-3">{item.title}</h4>
            <p className=" mt-1">{item.blog}</p>
            <div className="flex justify-end mt-2">
              <Link to={`/blogs/${item._id}`}>
                <motion.button
                  className="px-[4px] md:px-[4px] py-[2px] md:py-[2px] text-[#4285F4] border-2  border-[#4285F4] hover:bg-gradient-to-r from-[#75B4F1] to-[#A573F0] hover:text-white rounded-[4px]"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  See more👉
                </motion.button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blogs;

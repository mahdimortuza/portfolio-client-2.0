import { useParams } from "react-router-dom"
import defaultImg from "../../assets/projects/default.webp"
import Container from "../../components/container/Container"
import { useGetSingleBlogQuery } from "../../redux/api/blogApi"
import ErrorUI from "../../ui/ErrorUI"
import LoadingUI from "../../ui/LoadingUI"


 

const BlogDetail = () => {
    const {id} = useParams()
    const {data, isLoading, isError} = useGetSingleBlogQuery(id)
    if (isLoading) {
        return <LoadingUI />;
      }
      if (isError) {
        return <ErrorUI />;
      }
      const blog = data.data;
      // console.log(blog)
      const blogImage = blog.image || defaultImg
  return (
    <Container>
        <div className="my-10">
        <img 
        className="w-[350px] md:w-[400px]"
        src={blogImage}
            onError={(e) => e.currentTarget.src = defaultImg}
            />
        <p className="text-sm ">Category: <span>{blog.category}</span></p>
        <span className='text-xs'>Created at: {blog.createdAt}</span>
        <h1 className="mt-4 text-2xl md:text-4xl font-bold">{blog.title}</h1>
        <p className="mt-5 text-lg">{blog.blogPara1}</p>
        <p className="mt-5 text-lg">{blog.blogPara2}</p>
        <p className="mt-5 text-lg">{blog.blogPara3}</p>
        </div>
    </Container>
  )
}

export default BlogDetail
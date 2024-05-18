import { useParams } from "react-router-dom"

 

const BlogDetail = () => {
    const {id} = useParams()
    console.log(id)

  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail
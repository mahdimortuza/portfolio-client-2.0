import { Spin } from 'antd';
import Container from "../../components/container/Container";
import { useGetTechnologiesQuery } from "../../redux/api/baseApi";
 

const Skills = () => {
  const {data, isLoading, isError} = useGetTechnologiesQuery()
 
  if(isLoading){
    return <div className="h-screen flex items-center justify-center">
      <div className="example">
    <Spin size="large" />
  </div>
    </div>
  }
  if(isError){
    return <div className="h-screen flex items-center justify-center">
      <p>Something went wrong.</p>
    </div>
  }
  const technologies = data.data
  return (
    <Container>
      <h1
          className="font-playfair text-[38px] md:text-[40px] text-center md:text-center leading-[40px] md:leading-[66px]"
           
        >
          What   Technologies <br /> I use
        </h1>
      <div className="my-10 grid grid-cols-4 md:grid-cols-7 gap-5 items-center md:px-32">
      {
        technologies.map(technology => <div key={technology._id}
          className="tooltip "
        > <img   
            className="w-[62px] h-[62px] md:w-[80px] md:h-[80px] cursor-pointer"
            src={technology.image}
            
          />
          <span className="tooltiptext">{technology.title}</span>
        </div>)
      }
      </div>
    </Container>
  )
}

export default Skills
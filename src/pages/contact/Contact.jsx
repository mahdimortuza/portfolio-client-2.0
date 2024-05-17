import Container from "../../components/container/Container"
import Contact from "../home/components/Contact"
 

const ContactNow = () => {
  return (
    <Container> 
      <h1
          className="font-playfair text-[38px] md:text-[40px] text-center md:text-center leading-[40px] md:leading-[66px] my-10"
        >
          Let&apos;s get connected
        </h1>
        <div className="">
<Contact />
        </div>
    </Container>
  )
}

export default ContactNow
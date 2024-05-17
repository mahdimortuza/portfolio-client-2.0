import { Toaster } from 'sonner';
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectIdeaCTA from "./components/ProjectIdeaCTA";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const Home = () => {
  return (
    <div>
      <Toaster /> 
      <Hero />
      <Technologies />
      <Projects />
      <ProjectIdeaCTA />
      <Contact />  
    </div>
  );
};

export default Home;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import About from '../pages/about/About';
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Skills from "../pages/skills/Skills";
import Work from "../pages/work/Work";
const router = createBrowserRouter([
  {
    path: '/', 
    element: <MainLayout /> ,
    errorElement: <ErrorPage />,
   children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/technologies',
      element: <Skills />
    },
    {
      path: '/projects',
      element: <Work />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/blogs',
      element: <Blogs />
    }
     
   ]
  },  
  
  
]);
export default router;
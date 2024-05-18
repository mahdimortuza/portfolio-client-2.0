import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import About from '../pages/about/About';
import BlogDetail from "../pages/blogDetail/BlogDetail";
import Blogs from "../pages/blogs/Blogs";
import ContactNow from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import ProjectDetail from "../pages/projectDetail/ProjectDetail";
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
      path: '/projects/:id',
      element: <ProjectDetail />
    },
    {
      path: '/contact',
      element: <ContactNow />
    },
    {
      path: '/blogs',
      element: <Blogs />
    }, 
    {
      path: '/blogs/:id',
      element: <BlogDetail />
    }
     
   ]
  },  
  
  
]);
export default router;
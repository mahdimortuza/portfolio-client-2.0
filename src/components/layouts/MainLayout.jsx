import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import StickyNavbar from "../shared/Navigation";

 

const MainLayout = () => {
  return (
    <>
    <StickyNavbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout
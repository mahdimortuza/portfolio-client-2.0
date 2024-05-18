import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";

const AdminLayout = () => {
  return (
   <> 
   <Sidebar />
   <Outlet />
   </>
  )
}

export default AdminLayout
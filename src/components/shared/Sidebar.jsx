import { Link } from "react-router-dom";
 

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-slate-100 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 bg-red-300">
      <nav className="flex flex-col gap-5">
      
        <Link
          to="/admin/dashboard" 
          className="px-3 py-2 cursor-pointe text-white hover:bg-white hover:text-red-500 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/technology-management"
          className="px-3 py-2 cursor-pointe text-white hover:bg-white hover:text-red-500 rounded-lg"
        >
          Manage technology
        </Link>       

        <Link
          to="/admin/project-management"
          className="px-3 py-2 cursor-pointe text-white hover:bg-white hover:text-red-500 rounded-lg"
        >
          Manage projects
        </Link>

        <Link
          to="/admin/blog-management"
          className="px-3 py-2 cursor-pointe text-white hover:bg-white hover:text-red-500 rounded-lg"
        >
          Manage Blogs
        </Link>

        <Link
          to=""
          className="px-3 py-2 cursor-pointe text-white hover:bg-white hover:text-red-500 rounded-lg"
        >Home
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
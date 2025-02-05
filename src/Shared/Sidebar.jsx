// @ts-ignore
import { useState } from "react";

import { BookText, Database, FlaskConical, FolderKanban, Home, Menu, Send, Users2, X, ShoppingBag, GraduationCap, Code2 } from "lucide-react";
// Remove projectData import as it's no longer needed
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Remove isProjectsOpen state as it's no longer needed
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/", icon: Home },
    { title: "Research & Development", path: "/research", icon: FlaskConical },
    { title: "Projects", path: "/projects", icon: FolderKanban }, // Remove hasDropdown property
    { title: "Team Members", path: "/team", icon: Users2 },

    { title: "Teaching & Training", path: "/teaching", icon: GraduationCap },
    { title: "Publications & Talks", path: "/publications", icon: BookText },
    { title: "Research Data", path: "/data", icon: Database },
    { title: "Product", path: "/software", icon: Code2 },

    { title: "Shop", path: "/shop", icon: ShoppingBag },
    { title: "Contact", path: "/contact", icon: Send },
  ];

  const activeIndex = menuItems.findIndex((item) => {
    if (item.path === "/shop") {
      return location.pathname === "/shop" || location.pathname === "/checkout";
    }
    if (item.path === "/projects") {
      return location.pathname === "/projects" || location.pathname.startsWith("/projects/");
    }
    if (item.path === "/research") {
      return location.pathname === "/research" || location.pathname.startsWith("/research/");
    }
    if (item.path === "/software") {
      return location.pathname === "/software" || location.pathname.startsWith("/software/");
    }
    return item.path === location.pathname;
  });

  // Categorize projects by status
  // const categorizedProjects = projectData.reduce((acc, project) => {
  //   const status = project.project_status.toLowerCase();
  //   if (!acc[status]) {
  //     acc[status] = [];
  //   }
  //   acc[status].push(project);
  //   return acc;
  // }, {});

  // const dropdownVariants = {
  //   hidden: {
  //     opacity: 0,
  //     height: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   visible: {
  //     opacity: 1,
  //     height: "auto",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-primary text-secondary z-50">
        <div className="flex items-center justify-between p-4 max-w-full mx-auto">
          <div className="flex items-center gap-2 z-50">
            <img src="/logo-white.png" alt="Big Matrix" className="h-8 w-8" />
            <span className="font-light text-sm whitespace-nowrap">BIG MATRIX RESEARCH</span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-secondary/10">
            <div className="max-w-full mx-auto overflow-hidden">
              <ul className="py-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = item.path === "/shop" 
                    ? location.pathname === "/shop" || location.pathname === "/checkout"
                    : item.path === "/projects"
                    ? location.pathname === "/projects" || location.pathname.startsWith("/projects/")
                    : item.path === "/research"
                    ? location.pathname === "/research" || location.pathname.startsWith("/research/")
                    : item.path === "/software"
                    ? location.pathname === "/software" || location.pathname.startsWith("/software/")
                    : location.pathname === item.path;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-6 py-3
                        ${isActive ? "bg-secondary text-primary" : "text-secondary hover:bg-secondary/10"}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </li>
                  );
                })}

              </ul>
            </div>
          </nav>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-primary text-secondary flex-col overflow-hidden">
 
        <div className="p-2 border-b border-white">
          <div className="aspect-square w-full max-w-[180px] mx-auto">
            <img src="/logo-white.png" alt="Big Matrix" className="w-full h-full object-contain" />
          </div>
        </div>

        <nav className="flex-1 relative py-8">
          {/* Active Background */}
          <div
            className="absolute left-1 w-full h-12 transition-transform duration-300 ease-in-out z-0"
            style={{
              transform: `translateY(${activeIndex * 48}px)`,
            }}
          >
            {/* Main white background with outward curve */}
            <div className="absolute inset-0 right-[-24px] bg-secondary rounded-l-xl">
              <svg className="absolute right-0 top-0 h-full w-6 text-secondary" viewBox="0 0 24 48" fill="currentColor" preserveAspectRatio="none">
                <path d="M0 0L0 48C8 48 24 40 24 24C24 8 8 0 0 0Z" />
              </svg>
            </div>
          </div>

          <ul className="relative z-10">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.path === "/shop" ? location.pathname === "/shop" || location.pathname === "/checkout" : item.path === "/projects" ? location.pathname === "/projects" || location.pathname.startsWith("/projects/") : item.path === "/research" ? location.pathname === "/research" || location.pathname.startsWith("/research/") : location.pathname === item.path;
              return (
                <li key={item.path} className="h-12">
                  <Link to={item.path} className="flex items-center h-full gap-4 px-6 transition-colors duration-300">
                    <Icon
                      className={`w-5 h-5 transition-colors duration-300 shrink-0
                      ${isActive ? "text-primary" : "text-secondary"}`}
                    />
                    <span
                      className={`text-sm transition-colors duration-300 truncate
                      ${isActive ? "text-primary font-medium" : "text-secondary"}`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <div className="p-2 mb-2 rounded-lg text-xs mx-auto bg-white font-semibold tracking-widest text-black ">BIG MATRIX RESEARCH</div> */}
      </div>
    </>
  );
};

export default Sidebar;


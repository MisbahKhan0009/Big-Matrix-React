// @ts-ignore
import { useState, useEffect } from "react";
import { BookText, Database, FlaskConical, FolderKanban, Home, Menu, Send, Users2, X, ShoppingBag, GraduationCap, Code2, ChevronDown, ChevronRight, ChevronUp, Building2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import teamMembersData from "../data/teamMembers.json";
import { getUniquePositions } from "../utils/getUniquePositions";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeopleOpen, setIsPeopleOpen] = useState(false);
  const [peopleHoverTimer, setPeopleHoverTimer] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePeopleMouseEnter = () => {
    const timer = setTimeout(() => {
      setIsPeopleOpen(true);
    }, 200);
    setPeopleHoverTimer(timer);
  };

  const handlePeopleMouseLeave = () => {
    if (peopleHoverTimer) {
      clearTimeout(peopleHoverTimer);
    }
    setIsPeopleOpen(false);
  };

  useEffect(() => {
    return () => {
      if (peopleHoverTimer) {
        clearTimeout(peopleHoverTimer);
      }
    };
  }, [peopleHoverTimer]);

  const positions = getUniquePositions(teamMembersData);

  const menuItems = [
    { title: "Home", path: "/", icon: Home },
    { title: "Partners", path: "/partners", icon: Building2 },
    { title: "Research", path: "/research", icon: FlaskConical },
    { title: "Projects", path: "/projects", icon: FolderKanban },
    { title: "People", path: "/team", icon: Users2 },
    { title: "Teaching & Training", path: "/teaching", icon: GraduationCap },
    { title: "Publications & Talks", path: "/publications", icon: BookText },
    { title: "Research Data", path: "/data", icon: Database },
    { title: "Research Product", path: "/software", icon: Code2 },
    { title: "Shop", path: "/shop", icon: ShoppingBag },
    { title: "Contact", path: "/contact", icon: Send },
  ];

  const getPositionIndex = () => {
    if (location.pathname === "/team") {
      const params = new URLSearchParams(location.search);
      const position = params.get("position");
      if (position) {
        const index = positions.findIndex((pos) => pos.toLowerCase().replace(/\s+/g, "-") === position);
        return index >= 0 ? index : 0;
      }
    }
    return 0;
  };

  // Unified isActive logic for both mobile and desktop
  const getIsActive = (item) => {
    if (item.path === "/shop") return location.pathname === "/shop" || location.pathname === "/checkout";
    if (item.path === "/projects") return location.pathname === "/projects" || location.pathname.startsWith("/projects/");
    if (item.path === "/research") return location.pathname === "/research" || location.pathname.startsWith("/research/");
    if (item.path === "/software") return location.pathname === "/software" || location.pathname.startsWith("/software/");
    return location.pathname === item.path;
  };

  const activeIndex = menuItems.findIndex((item) => getIsActive(item));
  const positionIndex = getPositionIndex();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-primary text-secondary z-50">
        <div className="flex items-center justify-between p-4 max-w-full mx-auto">
          <Link to="/">
            <div className="flex items-center gap-2 z-50">
              <img src="/logo-white.svg" alt="Big Matrix" className="h-8 w-8" />
              <span className="font-light text-sm whitespace-nowrap">BIG MATRIX RESEARCH</span>
            </div>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-secondary/10">
            <ul className="py-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = getIsActive(item);

                if (item.path === "/team") {
                  return (
                    <li key={item.path}>
                      <button onClick={() => setIsPeopleOpen(!isPeopleOpen)} className={`flex items-center justify-between w-full px-6 py-3 ${isActive ? "bg-secondary text-primary" : "text-secondary hover:bg-secondary/10"}`}>
                        <div className="flex items-center gap-4">
                          <Icon className="w-5 h-5" />
                          <span className="text-sm">{item.title}</span>
                        </div>
                        {isPeopleOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </button>
                      {isPeopleOpen && (
                        <ul className="bg-secondary/5">
                          {positions.map((position) => (
                            <li key={position}>
                              <button
                                onClick={() => {
                                  navigate(`/team?position=${position.toLowerCase().replace(/\s+/g, "-")}`);
                                  setIsOpen(false);
                                }}
                                className="flex items-center pl-16 py-2 text-sm text-secondary hover:bg-secondary/10 w-full text-left"
                              >
                                {position}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.path}>
                    <Link to={item.path} onClick={() => setIsOpen(false)} className={`flex items-center gap-4 px-6 py-3 ${isActive ? "bg-secondary text-primary" : "text-secondary hover:bg-secondary/10"}`}>
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed z-50 left-0 top-0 h-full w-64 shadow-lg bg-primary text-secondary flex-col overflow-hidden">
        <div className="border-b bg border-white">
          <Link to="/">
            <div className="w-full max-w-[240px] mx-auto">
              <img src="/logo-white.svg" alt="Big Matrix" className="w-full h-36 object-cover" />
            </div>
          </Link>
        </div>

        <nav className="flex-1 relative py-8">
          {/* Active Background */}
          <div className="absolute left-1 w-full h-12 transition-transform duration-300 ease-in-out z-0" style={{ transform: `translateY(${activeIndex * 48}px)` }}>
            <div className="absolute inset-0 right-[-24px] bg-secondary rounded-l-xl">
              <svg className="absolute right-0 top-0 h-full w-6 text-secondary" viewBox="0 0 24 48" fill="currentColor" preserveAspectRatio="none">
                <path d="M0 0L0 48C8 48 24 40 24 24C24 8 8 0 0 0Z" />
              </svg>
            </div>
          </div>

          <ul className="relative z-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = getIsActive(item);

              if (item.path === "/team") {
                return (
                  <li 
                    key={item.path} 
                    className="relative" 
                    onMouseEnter={handlePeopleMouseEnter}
                    onMouseLeave={handlePeopleMouseLeave}
                  >
                    <Link to="/team" className={`flex items-center justify-between w-full h-12 px-6 transition-colors duration-300 ${isActive ? "text-primary" : "text-secondary"}`}>
                      <div className="flex items-center gap-4">
                        <Icon className="w-5 h-5" />
                        <span className={`text-sm ${isActive ? "font-medium" : ""}`}>{item.title}</span>
                      </div>
                      {isPeopleOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Link>
                    <div className={`absolute right-6 w-3/4 mx-auto bg-white/10 backdrop-blur-md border border-white/40 mt-1 rounded-xl shadow-lg transition-all duration-300 ease-in-out ${isPeopleOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ top: "100%" }}>
                      <ul className="py-2">
                        {positions.map((position) => (
                          <li key={position}>
                            <Link to={`/team${position === "All" ? "" : `?position=${position.toLowerCase().replace(/\s+/g, "-")}`}`} className="flex items-center px-6 py-2 text-sm text-secondary hover:bg-secondary/10">
                              {position}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.path} className="h-12">
                  <Link to={item.path} className={`flex items-center h-full gap-4 px-6 transition-colors duration-300 ${isActive ? "text-primary" : "text-secondary"}`}>
                    <Icon className="w-5 h-5" />
                    <span className={`text-sm ${isActive ? "font-medium" : ""}`}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

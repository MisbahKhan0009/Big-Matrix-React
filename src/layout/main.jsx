import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Sidebar from "../Shared/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow lg:ml-64">
        <main className="flex-grow pt-[60px] lg:pt-0"> {/* Added padding-top for mobile/tablet */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Sidebar from "../Shared/Sidebar";

const Main = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow md:ml-64">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;

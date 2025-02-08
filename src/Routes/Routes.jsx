import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/main.jsx";
import Contact from "../Modules/Contact.jsx";
import HomePage from "../Modules/HomePage";
import Publications from "../Modules/Publications.jsx";
import TeamMembers from "../Modules/TeamMembers.jsx";
import NotFound from "../Shared/NotFound.jsx";
import Projects from "../Modules/Projects.jsx";
import ProjectDetails from "../Modules/ProjectDetails.jsx";
import Shop from "../Modules/Shop";
import Checkout from "../Modules/Checkout";
import TeachingAndTraining from "../Modules/TeachingAndTraining.jsx";
import Research from "../Modules/Research.jsx";
import ResearchAreaDetails from "../Modules/ResearchAreaDetails.jsx";
import Data from "../Modules/Data.jsx";
import Software from "../Modules/Software.jsx";
import SoftwareDetails from "../Modules/SoftwareDetails.jsx";
import Partners from "../Modules/Partners.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <TeamMembers />,
      },

      { path: "/publications", element: <Publications /> },
      { path: "/projects", element: <Projects /> },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/teaching",
        element: <TeachingAndTraining />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/research/:areaId",
        element: <ResearchAreaDetails />,
      },
      {
        path: "/data",
        element: <Data />,
      },
      {
        path: "/software",
        element: <Software />,
      },
      {
        path: "/software/:softwareId",
        element: <SoftwareDetails />,
      },
      { path: "/partners", element: <Partners /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

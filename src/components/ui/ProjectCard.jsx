/* eslint-disable */
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden border border-primary/20 hover:shadow-lg transition-shadow">
      <div className="w-full flex items-center justify-center">
        <div className="h-36 sm:h-48 w-full">
          <img 
            src={project.project_banner || "/default-project.jpg"} 
            alt={project.projectname}
            className="w-full h-full object-contain px-4"
          />
        </div>
      </div>
      <div className="w-full p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">{project.projectname}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2">Project ID: {project.projectid}</p>
        
        <div className="space-y-2 text-xs sm:text-sm">
          <p className="line-clamp-1"><span className="font-medium">Funded by:</span> {project.funded_by}</p>
          
          <div className="hidden sm:block">
            <p className="font-medium mb-1">Principal Investigator:</p>
            <div className="flex items-center gap-2">
              <span>{project.pi.split('(')[0]}</span>
              <a 
                href={`mailto:${project.pi.match(/\((.*?)\)/)[1]}`}
                className="text-primary hover:text-primary/80"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile PI view */}
          <div className="sm:hidden">
            <p className="font-medium inline mr-2">PI:</p>
            <span className="text-xs">{project.pi.split('(')[0]}</span>
          </div>

          {project.co_pi_1 && (
            <>
              <div className="hidden sm:block">
                <p className="font-medium mb-1">Co-Principal Investigator:</p>
                <div className="flex items-center gap-2">
                  <span>{project.co_pi_1.split('(')[0]}</span>
                  <a 
                    href={`mailto:${project.co_pi_1.match(/\((.*?)\)/)[1]}`}
                    className="text-primary hover:text-primary/80"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Mobile Co-PI view */}
              <div className="sm:hidden">
                <p className="font-medium inline mr-2">Co-PI:</p>
                <span className="text-xs">{project.co_pi_1.split('(')[0]}</span>
              </div>
            </>
          )}
          <p className="text-xs sm:text-sm"><span className="font-medium">Duration:</span> {project.Project_duration}</p>
          <button 
            onClick={() => navigate(`/projects/${project.project_nav_name}`)}
            className="w-full sm:w-auto mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
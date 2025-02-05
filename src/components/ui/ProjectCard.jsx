/* eslint-disable */
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden border border-primary/20 hover:shadow-lg transition-shadow">
      <div className="w-full flex items-center justify-center">
        <div className="h-48 w-full">
          <img 
            src={project.project_banner || "/default-project.jpg"} 
            alt={project.projectname}
            className="w-full h-full object-fit"
          />
        </div>
      </div>

      <div className="w-full p-6">
        <h3 className="text-xl font-semibold mb-2">{project.projectname}</h3>
        <p className="text-sm text-gray-600 mb-2">Project ID: {project.projectid}</p>
        
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Funded by:</span> {project.funded_by}</p>
          
          <div>
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

          {project.co_pi_1 && (
            <div>
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
          )}

          <p><span className="font-medium">Duration:</span> {project.Project_duration}</p>

          <button 
            onClick={() => navigate(`/projects/${project.project_nav_name}`)}
            className="mt-10 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
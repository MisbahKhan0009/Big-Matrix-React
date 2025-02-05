import { FlaskConical } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";
import projectData from "../data/projectData.json";
import Banner from "../Shared/Banner";

const Projects = () => {
  // Group projects by status
  const groupedProjects = projectData.reduce((acc, project) => {
    const status = project.project_status || 'other';
    acc[status] = acc[status] || [];
    acc[status].push(project);
    return acc;
  }, {});

  // Format status for display (capitalize first letter)
  const formatStatus = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div>
      <Banner bannerText={"Projects"} bannerBg={"/project.jpg"} bannerIcon={FlaskConical} />
      <div className="container mx-auto ">
        {Object.entries(groupedProjects).map(([status, projects]) => (
          <div key={status} className="m-12 text-4xl">
            <h2 className="text-3xl font-light mb-6 text-center">
              {formatStatus(status)} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
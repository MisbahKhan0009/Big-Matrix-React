import { Mail } from "lucide-react";
import { useParams } from "react-router-dom";
import Banner from "../Shared/Banner";
import projectData from "../data/projectData.json";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.project_nav_name === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }
  const getAcronym = (name) => {
    return name
      .split(" ") // Split by spaces
      .map((word) => word[0]?.toUpperCase()) // Take the first letter of each word
      .join(""); // Join them together
  };

  return (
    <div>
      <Banner bannerText={"Project"} bannerBg={project.project_banne || "/project.jpg"} />;
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white p-8">
          {/* Project Header */}
          <div className="mb-8">
            <h1 className="md:text-3xl text-xl text-center font-semibold mb-4">{project.projectname}</h1>
            <p className="text-gray-600 text-center">Project ID: {project.projectid}</p>
          </div>

          {/* Project Info */}
          <div className="grid gap-8">
            <div>
              <h2 className="text-xl text-center mx-auto  bg-primary/10 w-fit p-1 rounded-lg font-medium mb-6">Project Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Funded by</h3>
                  <p>{project.funded_by}</p>
                </div>

                <div>
                  <h3 className="font-medium">Principal Investigator</h3>
                  <div className="flex items-center gap-2">
                    <span>{project.pi.split("(")[0]}</span>
                    <a href={`mailto:${project.pi.match(/\((.*?)\)/)[1]}`} className="text-primary">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {project.co_pi_1 && (
                  <div>
                    <h3 className="font-medium">Co-Principal Investigator</h3>
                    <div className="flex items-center gap-2">
                      <span>{project.co_pi_1.split("(")[0]}</span>
                      <a href={`mailto:${project.co_pi_1.match(/\((.*?)\)/)[1]}`} className="text-primary">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-medium">Duration</h3>
                  <p>{project.Project_duration}</p>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            {project.project_overview && (
              <div>
                <h2 className="text-xl font-medium mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">{project.project_overview}</p>
              </div>
            )}

            {/* Project Outcome */}
            {project.project_outcome && project.project_outcome !== "N/A" && (
              <div>
                <h2 className="text-xl font-medium mb-4">Project Outcome</h2>
                <p className="text-gray-600 text-justify leading-relaxed">{project.project_outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

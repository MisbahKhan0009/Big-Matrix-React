import { FlaskConical, Users2, BookText, FolderKanban, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Banner from "../Shared/Banner";
import researchAreas from "../data/researchAreas.json";
import teamMembers from "../data/teamMembers.json";
import papers from "../data/papers.json";

const ResearchAreaDetails = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { areaId } = useParams();
  const area = researchAreas.areas.find((a) => a.id === areaId);

  const findMemberDetails = (name) => {
    return teamMembers.find(member => member.name.toLowerCase() === name.toLowerCase());
  };

  const handleMemberClick = (name) => {
    const memberDetails = findMemberDetails(name);
    setSelectedMember(memberDetails);
  };

  if (!area) {
    return <div>Research area not found</div>;
  }

  // Add this line to define areaPapers
  const areaPapers = papers.filter(paper => paper.fields?.includes(area.id));

  return (
    <div>
      <Banner bannerText={area.title} bannerBg={area.image} bannerIcon={FlaskConical} />

      <div className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-thin mb-6 text-primary">Overview</h2>
          <p className="text-gray-600 leading-relaxed">{area.description}</p>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users2 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-thin text-primary">Team</h2>
          </div>
          
          {area.teamLeader && (
            <div className="mb-8">
              <h3 className="text-2xl font-thin mb-4 text-primary">Team Leader</h3>
              <button 
                onClick={() => handleMemberClick(area.teamLeader.name)}
                className="text-xl text-black underline"
              >
                {area.teamLeader.name}
              </button>
            </div>
          )}

          {area.teamMembers && area.teamMembers.length > 0 && (
            <div>
              <h3 className="text-2xl font-thin mb-4 text-primary">Team Members</h3>
              <ul className="space-y-2">
                {area.teamMembers.map(member => (
                  <li key={member.email}>
                    <button 
                      onClick={() => handleMemberClick(member.name)}
                      className="text-xl text-black underline"
                    >
                      {member.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.section>

       
        

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FolderKanban className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-thin text-primary">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {area.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {project.images && project.images[0] && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <>
          {/* Darker Blurred Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setSelectedMember(null)}
          />
          
          {/* Modal Content */}
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-start gap-6">
                <img 
                  src={selectedMember.photo.startsWith('http') 
                    ? selectedMember.photo 
                    : `/${selectedMember.photo}`
                  } 
                  alt={selectedMember.name} 
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{selectedMember.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedMember.designation}</p>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span>{" "}
                      <a href={`mailto:${selectedMember.email}`} className="text-primary hover:underline">
                        {selectedMember.email}
                      </a>
                    </p>
                    {selectedMember.orcid && (
                      <p className="text-gray-600">
                        <span className="font-medium">ORCID:</span>{" "}
                        <a href={selectedMember.orcid} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          View Profile
                        </a>
                      </p>
                    )}
                    {selectedMember.github && (
                      <p className="text-gray-600">
                        <span className="font-medium">GitHub:</span>{" "}
                        <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          View Profile
                        </a>
                      </p>
                    )}
                    {selectedMember.google_scholar && selectedMember.google_scholar !== "a@a.com" && (
                      <p className="text-gray-600">
                        <span className="font-medium">Google Scholar:</span>{" "}
                        <a href={selectedMember.google_scholar} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          View Profile
                        </a>
                      </p>
                    )}
                    {selectedMember.portfolio && (
                      <p className="text-gray-600">
                        <span className="font-medium">Portfolio:</span>{" "}
                        <a href={selectedMember.portfolio} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          View Website
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResearchAreaDetails;
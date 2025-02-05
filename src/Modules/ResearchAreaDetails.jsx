import { FlaskConical, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Banner from "../Shared/Banner";
import researchAreas from "../data/researchAreas.json";
import ProjectSlider from "../components/ui/ProjectSlider";


const ResearchAreaDetails = () => {
  const { areaId } = useParams();
  const area = researchAreas.areas.find((a) => a.id === areaId);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!area) {
    return <div>Research area not found</div>;
  }

  return (
    <div>
      <Banner bannerText={area.title} bannerBg={area.image} bannerIcon={FlaskConical} />

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-10/12 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {area.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <div className="w-full h-full">
                      <img
                        src={project.images[0]}  
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        
                      />
                    </div>
                  ) : (
                    <div className="h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-6">
                      <h3 className="text-sm text-center text-gray-600 font-medium">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <motion.h3 className="md:text-2xl text-lg font-semibold  mb-3 text-primary">
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <div className="min-h-screen px-4 py-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <ProjectSlider 
                    images={selectedProject.images || []}
                    projectTitle={selectedProject.title}
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-thin text-center text-primary mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p>{selectedProject.description}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchAreaDetails;
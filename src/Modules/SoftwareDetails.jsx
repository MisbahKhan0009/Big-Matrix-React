import { useParams, useLocation } from "react-router-dom";
import Banner from "../Shared/Banner";
import { Code2, ArrowUpRightFromSquare } from "lucide-react";
import { motion } from "framer-motion";
import softwareData from "../data/softwareData.json";
import NotFound from "../Shared/NotFound";

const SoftwareDetails = () => {
  const { softwareId } = useParams();
  const software = softwareData.software.find(s => s.id === parseInt(softwareId));

  if (!software) {
    return <NotFound />;
  }

  return (
    <div>


      <Banner bannerText={software.title} bannerBg={software.image} bannerIcon={Code2} />
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <img src={software.image} alt={software.title} className="w-full rounded-lg shadow-md" />
          </div>

          <div className="prose max-w-none">
            <h1 className="text-3xl font-semibold mb-6 text-primary">{software.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{software.longDescription}</p>

            {software.features && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {software.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {software.technologies && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {software.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            
            <div className="flex gap-4 mt-8">
              {software.demoLink && (
                <a 
                  href={software.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                >
                  Live Demo <ArrowUpRightFromSquare className="w-4 h-4" />
                </a>
              )}
              {software.documentationLink && (
                <a 
                  href={software.documentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                >
                  Documentation <ArrowUpRightFromSquare className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default SoftwareDetails;
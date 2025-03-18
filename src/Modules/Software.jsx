import Banner from "../Shared/Banner";
import { Code2, ArrowRight, Package, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import softwareData from "../data/softwareData.json";

const Software = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      <Banner bannerText={"Research Software"} bannerBg={"/software.jpg"} bannerIcon={Code2} />

      <div className="container mx-auto px-4 py-12">
        <div className="w-11/12 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl font-light text-center text-primary mb-12">Software List</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softwareData.software.map((software) => (
                <Link 
                  key={software.id}
                  to={`/software/${software.id}`}
                  className="block group"
                >
                  <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: software.id * 0.1 }}
                    className="relative h-full bg-white/30 backdrop-blur-md rounded-2xl p-6 
                             border border-white/30 shadow-lg hover:shadow-2xl 
                             transition-all duration-500 overflow-hidden
                             hover:bg-white/40 group-hover:scale-[1.02]"
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12" />
                    
                    <div className="relative">
                      {/* Image Container */}
                      <div className="mb-8 rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-500">
                        <img 
                          src={software.image} 
                          alt={software.title} 
                          className="w-full h-64 object-cover transform transition-transform duration-700 
                                   group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Package className="text-primary w-6 h-6" />
                          <h3 className="text-xl font-semibold text-primary">{software.title}</h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {software.shortDescription}
                        </p>

                        <div className="pt-4 flex items-center text-primary font-medium group/link">
                          <span className="mr-2">Learn More</span>
                          <ExternalLink className="w-4 h-4 transform transition-transform duration-300 
                                                 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Software;
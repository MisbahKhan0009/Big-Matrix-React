import Banner from "../Shared/Banner";
import { Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import softwareData from "../data/softwareData.json";

const Software = () => {
  return (
    <div>
      <Banner bannerText={"Research Software"} bannerBg={"/software.jpg"} bannerIcon={Code2} />

      <div className="container mx-auto px-4 py-12">
        <div className="w-11/12 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-4xl w-full text-center mx-auto text-primary mb-8">Software List</h2>

              <div className="space-y-8">
                {softwareData.software.map((software) => (
                  <motion.section
                    key={software.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: software.id * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mb-8">
                      <img 
                        src={software.image} 
                        alt={software.title} 
                        className="rounded-xl max-w-4xl mx-auto shadow-md w-full hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight className="text-primary w-5 h-5" />
                      <h3 className="text-lg font-bold text-primary">{software.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">{software.shortDescription}</p>
                    <Link 
                      to={`/software/${software.id}`}
                      className="text-blue-500 hover:underline inline-flex items-center gap-2"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.section>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Software;
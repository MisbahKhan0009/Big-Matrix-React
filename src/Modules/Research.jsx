import { FlaskConical, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../Shared/Banner";
import researchAreas from "../data/researchAreas.json";

const Research = () => {
  return (
    <div>
      <Banner bannerText="Research Areas" bannerBg="/research-banner.jpg" bannerIcon={FlaskConical} />
      <div className="container w-11/12 mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-thin text-center mb-12 text-primary">
          Our Research Focus Areas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
          {researchAreas.areas.map((area, index) => (
            <motion.div key={area.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ y: -5 }} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="h-56 overflow-hidden relative group">
                <img src={area.image} alt={area.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{area.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{area.description}</p>
                <div className="mt-auto">
                  <Link to={`/research/${area.id}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all group">
                    <span className="border-b-2 border-transparent group-hover:border-primary transition-all">Explore Research</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;

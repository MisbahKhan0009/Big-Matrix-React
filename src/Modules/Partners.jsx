import { Building2, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Banner from "../Shared/Banner";
import partnersData from "../data/partners.json";

const Partners = () => {
  const { partners } = partnersData;
  const stats = partnersData.stats || {
    successRate: "95%",
    activePartners: "+1000",
    industryAwards: "+50",
    globalOffices: "+25",
  };
  const categories = partnersData.categories || ["All", ...new Set(partners.map((p) => p.category))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? partners : partners.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <Banner bannerText={"Project"} />;
      <div className="container w-11/12 mx-auto px-4">
        {/* Partners Logo Section */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {partners.map((partner) => (
              <motion.div key={partner.id} className="flex items-center justify-center p-4" whileHover={{ scale: 1.05 }}>
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-4">Our Success Stories</h2>
          <p className="text-center text-gray-600 mb-12">Explore our portfolio of successful partner collaborations</p>

          <div className="flex gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full ${selectedCategory === category ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg" whileHover={{ y: -10 }}>
                <div className="relative h-48">
                  <img src={project.projectImage} alt={project.projectTitle} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">{project.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.projectTitle}</h3>
                  <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Partners Say</h2>
          <p className="text-center text-gray-600 mb-12">Discover why leading companies choose to partner with us for their critical projects</p>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.slice(0, 3).map((partner) => (
              <motion.div key={partner.id} className="bg-white p-6 rounded-xl shadow-lg" whileHover={{ scale: 1.02 }}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={partner.logo} alt={partner.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold">{partner.name}</h4>
                    <p className="text-gray-600 text-sm">Industry Partner</p>
                  </div>
                </div>
                <p className="text-gray-700">{partner.review}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(stats).map(([key, value]) => (
            <motion.div key={key} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-4xl font-bold text-primary mb-2">{value}</h3>
              <p className="text-gray-600">{key.replace(/([A-Z])/g, " $1").trim()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

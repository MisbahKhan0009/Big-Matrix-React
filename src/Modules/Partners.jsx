import { Building2, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Banner from "../Shared/Banner";
import partnersData from "../data/partners.json";

const Partners = () => {
  const { partners } = partnersData;
  const categories = ["All", ...new Set(partners.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPartners = selectedCategory === "All" ? partners : partners.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === filteredPartners.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [filteredPartners.length]);

  return (
    <div className="flex-grow">
      <Banner bannerText={"Partners"} bannerBg={"/partner-banner.jpg"} bannerIcon={Building2} />

      <div className="container w-11/12 mx-auto px-4">
        {/* Partners Logo Section */}
        <div className="py-20">
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-thin text-center mb-12 text-primary">
            {/* Updated Testimonials Section */}
            <div className="py-20">
              <h2 className="text-3xl font-bold text-center mb-4">What Our Partners Say</h2>


              <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center gap-6 mb-6">
                      <img src={filteredPartners[currentIndex].logo} alt={filteredPartners[currentIndex].name} className="w-20 h-20 object-contain" />
                      <div>
                        <h4 className="text-xl font-semibold">{filteredPartners[currentIndex].name}</h4>
                        <p className="text-gray-600">{filteredPartners[currentIndex].category}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic">&ldquo;{filteredPartners[currentIndex].review}&rdquo;</p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-6">
                  {filteredPartners.map((_, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-4" : "bg-gray-300"}`} />
                  ))}
                </div>
              </div>
            </div>
            Our trusted partners
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <motion.div key={partner.id} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                  <img src={partner.logo} alt={partner.name} className="h-24 w-auto mb-4 object-contain" />
                </a>
                <h3 className="text-lg font-semibold text-center mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 text-center mb-4">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

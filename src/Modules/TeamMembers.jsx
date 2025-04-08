// src/components/TeamMembers.jsx
import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import teamMembersData from "../data/teamMembers.json";
import advisorTestimonials from "../data/advisorTestimonials.json";
import Banner from "../Shared/Banner";
import Card from "../components/ui/card";
import { getUniquePositions } from "../utils/getUniquePositions";

const TeamMembers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPosition, setSelectedPosition] = useState("All");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const positions = getUniquePositions(teamMembersData);
  
  // Update the position handler to modify URL
  const handlePositionClick = (position) => {
    if (position === "All") {
      setSearchParams({});
    } else {
      const formattedPosition = position.toLowerCase().replace(/\s+/g, "-");
      setSearchParams({ position: formattedPosition });
    }
    setSelectedPosition(position);
  };

  useEffect(() => {
    const positionParam = searchParams.get('position');
    if (positionParam) {
      const formattedPosition = positionParam.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setSelectedPosition(formattedPosition);
    } else {
      setSelectedPosition("All");
    }
  }, [searchParams]);

  useEffect(() => {
    const filtered = selectedPosition === "All"
      ? teamMembersData
      : teamMembersData.filter(member => member.position === selectedPosition);

    setFilteredMembers(filtered);
  }, [selectedPosition]);

  // Add auto-sliding effect
  useEffect(() => {
    if (selectedPosition === "Advisor") {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex === advisorTestimonials.testimonials.length - 1 ? 0 : prevIndex + 1)
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [selectedPosition]);

  return (
    <div className="w-full">
      <Banner bannerText={"Team Members"} bannerBg={"/team.png"} bannerIcon={Users} />

      {/* Add Advisor Testimonials Slider */}
      {selectedPosition === "Advisor" && (
        <div className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Advisor's Insights</h2>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={advisorTestimonials.testimonials[currentIndex].photo}
                      alt={advisorTestimonials.testimonials[currentIndex].name}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">
                        {advisorTestimonials.testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {advisorTestimonials.testimonials[currentIndex].designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic">
                    &ldquo;{advisorTestimonials.testimonials[currentIndex].comment}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6">
                {advisorTestimonials.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container w-11/12 mx-auto py-8">
        {/* Position Filter Tabs */}
        <div className="flex overflow-x-auto">
          <div className="flex justify-center space-x-1 border-b mx-auto w-full border-gray-200">
            {positions.map((position) => (
              <button
                key={position}
                onClick={() => handlePositionClick(position)}
                className={`px-4 py-2 text-sm font-medium min-w-[100px] whitespace-nowrap transition-all duration-200
                  ${selectedPosition === position 
                    ? "border-b-2 border-primary text-primary" 
                    : "text-gray-500 hover:text-primary hover:border-b-2 hover:border-primary/30"
                  }`}
              >
                {position}
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mt-8">
          {selectedPosition === "All" ? (
            <div className="space-y-8">
              {/* Team Leader Section */}
              <div className="max-w-sm mx-auto">
                {filteredMembers
                  .filter(member => member.position === "Team Leader")
                  .map(member => (
                    <Card key={member.id} memberData={member} />
                  ))}
              </div>
              
              {/* Other Members Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {filteredMembers
                  .filter(member => member.position !== "Team Leader")
                  .map(member => (
                    <Card key={member.id} memberData={member} />
                  ))}
              </div>
            </div>
          ) : (
            <div className={`grid gap-4 ${
              selectedPosition === "Team Leader" 
                ? "grid-cols-1 max-w-sm mx-auto" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
            }`}>
              {filteredMembers.map((member) => (
                <Card key={member.id} memberData={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;


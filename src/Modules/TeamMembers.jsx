// src/components/TeamMembers.jsx
import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import teamMembersData from "../data/teamMembers.json";
import Banner from "../Shared/Banner";
import Card from "../components/ui/Card";

const TeamMembers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPosition, setSelectedPosition] = useState("All");
  const [filteredMembers, setFilteredMembers] = useState([]);
  
  const positions = ["All", "Team Leader", "Collaborator", "Researcher", "Former Researcher"];
  
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

  return (
    <div>
      <Banner bannerText={"Peoples"} bannerBg={"/team.png"} bannerIcon={Users} />
      
      <div className="container w-11/12 mx-auto py-8">
        {/* Position Filter Tabs */}
        <div className="flex overflow-x-auto">
          <div className="flex justify-center space-x-1 border-b mx-auto w-full border-gray-200">
            {positions.map((position) => (
              <button
                key={position}
                onClick={() => handlePositionClick(position)}
                className={`px-4 py-2 text-sm font-medium min-w-[100px] transition-all duration-200
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


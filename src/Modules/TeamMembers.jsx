// src/components/TeamMembers.jsx
import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import Card from "../components/ui/card";
import teamMembersData from "../data/teamMembers.json";
import Banner from "../Shared/Banner";

const TeamMembers = () => {
  const [groupedMembers, setGroupedMembers] = useState({});

  useEffect(() => {
    const positionOrder = ["Team Leader", "Collaborator", "Researcher", "Former Researcher"];
    
    const sortedMembers = [...teamMembersData].sort((a, b) => {
      return positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position);
    });

    const grouped = sortedMembers.reduce((acc, member) => {
      acc[member.position] = acc[member.position] || [];
      acc[member.position].push(member);
      return acc;
    }, {});

    setGroupedMembers(grouped);
  }, []);

  return (
    <div>
      <Banner bannerText={"Team Members"} bannerBg={"/team.png"} bannerIcon={Users} />
      <div className="container w-11/12 max-w-7xl mx-auto">
        {Object.entries(groupedMembers).map(([position, members]) => (
          <div key={position} className="mb-8">
            <h2 className="text-5xl font-light text-center mt-4 capitalize">{position}</h2>
            <div 
              className={`grid gap-4 mt-6 ${
                position === "Team Leader" 
                  ? "grid-cols-1 max-w-sm mx-auto" 
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
              }`}
            >
              {members.map((member) => (
                <Card key={member.id} memberData={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

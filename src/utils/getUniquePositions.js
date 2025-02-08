export const getUniquePositions = (teamMembers) => {
  const positions = ["All", ...new Set(teamMembers.map(member => member.position))];
  return positions.sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    if (a === "Team Leader") return -1;
    if (b === "Team Leader") return 1;
    return a.localeCompare(b);
  });
};
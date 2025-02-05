/* eslint-disable */
// src/components/Publications.jsx
import { faFilter, faSearch, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PublicationCard from "../components/ui/PublicationCard";
import PublicationModal from "../components/ui/PublicationModal";
import papersData from "../data/papers.json";
import Banner from "../Shared/Banner";
import { Paperclip } from "lucide-react";
import Fuse from "fuse.js";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [selectedPaperType, setSelectedPaperType] = useState("ALL");
  const [selectedSort, setSelectedSort] = useState("DATE");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const cardsPerPage = 15;

  useEffect(() => {
    setPublications(papersData);
    setFilteredPublications(papersData);
  }, []);

  const fuseOptions = {
    keys: ["paper_title", "author_name", "journal_name", "short_description"],
    threshold: 0.4,
  };
  const fuse = new Fuse(publications, fuseOptions);

  const getUniquePaperTypes = () => {
    if (!publications) return [];
    const types = [...new Set(publications.map((pub) => pub.paper_type))];
    return ["ALL", ...types.filter(Boolean)];
  };

  const getMonthNumber = (month) => {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return String(monthNames.indexOf(month) + 1).padStart(2, "0");
  };

  const handleOpenModal = (paperId) => {
    const publication = publications.find((pub) => pub.paper_id === paperId);
    setSelectedPublication(publication);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPublication(null);
  };

  useEffect(() => {
    let filtered = [...publications];

    if (searchQuery) {
      const searchResults = fuse.search(searchQuery);
      filtered = searchResults.map((result) => result.item);
    }

    if (selectedPaperType !== "ALL") {
      filtered = filtered.filter((pub) => pub.paper_type === selectedPaperType);
    }

    if (selectedSort === "DATE") {
      filtered.sort((a, b) => {
        const dateA = new Date(`${a.year}-${getMonthNumber(a.month)}-${a.day}`);
        const dateB = new Date(`${b.year}-${getMonthNumber(b.month)}-${b.day}`);
        return dateB - dateA;
      });
    }

    setFilteredPublications(filtered);
    setCurrentPage(1);
  }, [selectedPaperType, selectedSort, searchQuery, publications]);

  const totalPages = Math.ceil(filteredPublications.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredPublications.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div>
      <Banner bannerText={"Publications"} bannerBg={"/publication.jpg"} bannerIcon={Paperclip} />
      <div className="container mx-auto px-4 sm:px-10 p-4 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-10">
          <div className="w-full md:w-1/3 relative">
            <input 
              type="text" 
              placeholder="Search publications..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/20" 
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <select 
                value={selectedPaperType} 
                onChange={(e) => setSelectedPaperType(e.target.value)} 
                className="w-full md:w-auto appearance-none py-2 pl-3 pr-8 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/20"
              >
                {getUniquePaperTypes().map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon icon={faFilter} className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 max-w-full overflow-hidden">
          {currentCards.map((publication) => (
            <PublicationCard key={publication.paper_id} publication={publication} onOpenModal={handleOpenModal} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center mt-16 mb-10 gap-2">
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
              disabled={currentPage === 1} 
              className="px-4 py-2 border border-primary text-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <div className="flex flex-wrap gap-2 justify-center">
              {[...Array(totalPages)].map((_, index) => (
                <button 
                  key={index + 1} 
                  onClick={() => setCurrentPage(index + 1)} 
                  className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg ${
                    currentPage === index + 1 ? "bg-primary text-white" : "border border-primary text-primary"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
              disabled={currentPage === totalPages} 
              className="px-4 py-2 border border-primary text-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {modalOpen && <PublicationModal publication={selectedPublication} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default Publications;

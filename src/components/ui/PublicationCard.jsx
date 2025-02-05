/* eslint-disable */
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const PublicationCard = ({ publication, onOpenModal }) => {
  return (
    <motion.div className="bg-white p-4 border-b border-gray-200 hover:bg-gray-50" whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="md:text-xl text-base font-medium text-gray-900 mb-1">{publication.paper_title}</h3>
          <p className="md:text-sm text-xs bg-gray-300 border-l-2 border-l-black w-fit px-2 text-gray-600 mb-2">{publication.author_name}</p>

          <p className="md:text-sm text-xs text-green-600 bg-green-500/10 p-1 rounded-full w-fit">
            {publication.journal_name}, {publication.year}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {publication.link && (
            <div className="relative group">
              <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-grey hover:text-grey/80">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">See Publication</div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationCard;

/* eslint-disable */
// src/components/PublicationModal.jsx
import { faArrowUpRightFromSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PublicationModal = ({ publication, onClose }) => {
  if (!publication) return null;

  return (
    <AnimatePresence>
      {publication && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="bg-white p-8 rounded-lg max-w-2xl w-11/12 relative"
          >
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">
              <FontAwesomeIcon icon={faTimes} />
            </motion.button>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col">
              <h2 className="text-xl font-bold text-primary mb-3">{publication.paper_title}</h2>
              <p className="text-gray-700 text-justify text-sm mb-4">{publication.long_description}</p>
              {publication.journal_name && (
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-gray-500 text-xs mb-2">
                  Journal: <span className="text-green-500 bg-green-500/20 border ml-1 border-green-500 w-fit px-2 rounded-full text-xs font-semibold">{publication.journal_name}</span>
                </motion.p>
              )}
              <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-gray-500 bg-gray-500/20 p-2 rounded-r-lg border border-l-gray-500 text-xs font-semibold my-3">
                {publication.author_name}
              </motion.p>
              {publication.link && (
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={publication.link} target="_blank" rel="noopener noreferrer" className="text-secondary bg-primary p-2 w-fit text-sm flex items-center">
                  See Publication <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PublicationModal;

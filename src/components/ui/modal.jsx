/* eslint-disable */
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ onClose, socialLinks, memberData }) => (
  <AnimatePresence>
    <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(e) => e.target === e.currentTarget && onClose()} transition={{ duration: 0.2 }}>
      <motion.div className="bg-white p-6 rounded-lg max-w-sm w-11/12 relative" initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
          ×
        </motion.button>
        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg font-semibold mb-4">
          Contact Information
        </motion.h3>
        <motion.ul className="space-y-3">
          {socialLinks.map(
            (link, index) =>
              memberData[link.platform] && (
                <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * (index + 1) }}>
                  <motion.a whileHover={{ scale: 1.03, x: 5 }} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                    <link.icon className="text-primary mr-3 text-xl" />
                    {link.label}
                  </motion.a>
                </motion.li>
              )
          )}
        </motion.ul>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default Modal;

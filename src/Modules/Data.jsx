import Banner from "../Shared/Banner";
import { Database, Info } from "lucide-react";
import DataTable from "../components/ui/DataTable"
import MachineLearningTable from "../components/ui/MachineLearningTable"
import morData from "../data/morData.json";
import biLinearData from "../data/biLinearData.json";
import machineLearningData from "../data/machineLearningData.json";
import { transformData } from "../lib/dataTransformer";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip"

const Data = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <div>
      <Banner bannerText={"Research Data"} bannerBg={"/DataAndSoft.webp"} bannerIcon={Database} />

      <motion.div 
        className="container w-10/12 mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="my-10"
          variants={sectionVariants}
        >
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-primary">LINEAR TIME INVARIANT SYSTEM</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-5 h-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-white">Comprehensive data for linear time-invariant systems analysis</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-gray-600 mb-4">
            Explore our collection of linear time-invariant system datasets, perfect for system analysis and modeling.
          </p>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <DataTable data={transformData(morData)} headers={["", "DATA CLASS", " ", "REPOSITORY LINK"]} />
          </div>
        </motion.div>

        <motion.div 
          className="my-10"
          variants={sectionVariants}
        >
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-primary">BI-LINEAR SYSTEM</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-5 h-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-white">Specialized datasets for bi-linear system research</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-gray-600 mb-4">
            Access our curated bi-linear system datasets, designed for advanced mathematical modeling and analysis.
          </p>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <DataTable data={transformData(biLinearData)} headers={["", "DATA CLASS", " ", "REPOSITORY LINK"]} />
          </div>
        </motion.div>

        <motion.div 
          className="my-10"
          variants={sectionVariants}
        >
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-primary">MACHINE LEARNING DATA</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-5 h-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-white">Diverse datasets for machine learning and AI research</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-gray-600 mb-4">
            Discover our comprehensive machine learning datasets, suitable for various AI and deep learning applications.
          </p>
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <MachineLearningTable data={machineLearningData} headers={["DATA CLASS", "DATA NAME", "REPOSITORY LINK"]} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Data;
/* eslint-disable */
import { useRef } from "react";
import { Button } from "../components/ui/button";
import { SparklesCore } from "../components/ui/sparkles";
import { Target, Lightbulb, ShieldCheck, Flag } from "lucide-react";
import { motion, useInView } from "framer-motion";

const HomePage = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true });

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const cardData = [
    {
      title: "Mission",
      description: "At Big Matrix Research, our mission is to advance the frontiers of mathematical modeling, computational methods, and machine learning by developing innovative solutions that address complex, data-driven challenges. We aim to bridge the gap between theoretical research and practical applications, empowering industries and fostering interdisciplinary collaboration to create transformative impacts on science, technology, and society.",
      icon: <Target className="h-6 w-6 text-red-500" />,
      bgColor: "bg-red-500/20",
      iconColor: "text-red-500",
      hoverColor: "group-hover:bg-red-500/25",
    },
    {
      title: "Vision",
      description: "We envision Big Matrix Research as a global leader in computational and mathematical innovation, driving groundbreaking discoveries that revolutionize how data is understood and utilized. By uniting expertise, fostering collaboration, and nurturing curiosity, we aspire to shape a future where theoretical advancements seamlessly translate into real-world solutions, enabling a smarter, more connected, and sustainable world.",
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-500",
      hoverColor: "group-hover:bg-blue-500/25",
    },
    {
      title: "Core Values",
      description: "At Big Matrix Research, we are driven by a commitment to excellence, integrity, and innovation. We believe in fostering a culture of collaboration and inclusivity where diverse ideas thrive. Transparency in research, ethical practices, and respect for intellectual contributions form the foundation of our work. By prioritizing quality over quantity, we aim to create meaningful advancements that benefit not only academia but also industry and society.",
      icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
      bgColor: "bg-green-500/20",
      iconColor: "text-green-500",
      hoverColor: "group-hover:bg-green-500/25",
    },
    {
      title: "Goals",
      description: "Our goal is to establish Big Matrix Research as a leading hub for interdisciplinary innovation and knowledge dissemination. We strive to develop cutting-edge algorithms and models that address pressing global challenges, from optimizing industrial processes to enhancing sustainability efforts. By mentoring the next generation of researchers and providing them with the tools to succeed, we aim to nurture a vibrant academic and professional community.",
      icon: <Flag className="h-6 w-6 text-yellow-500" />,
      bgColor: "bg-yellow-500/20",
      iconColor: "text-yellow-500",
      hoverColor: "group-hover:bg-yellow-500/25",
    },
  ];

  return (
    <div className="min-h-screen bg-secondary overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-secondary -z-10" />

        <div className="container mx-auto min-h-screen flex items-center justify-center px-4 py-12 lg:py-24 relative">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6 lg:space-y-8">
            {/* BIG MATRIX RESEARCH with Sparkle Effect */}
            {/* <motion.h1 variants={textRevealVariants} initial="hidden" animate="visible" className="text-4xl flex flex-col items-center justify-center lg:text-6xl font-bold tracking-tight text-primary relative">
              BIG MATRIX RESEARCH
             
            </motion.h1> */}

            {/* Logo instead of text */}
            <motion.div 
              variants={textRevealVariants} 
              initial="hidden" 
              animate="visible" 
              className="w-full max-w-[300px] lg:max-w-[400px]"
            >
              <img 
                src="/logo-white.jpg" 
                alt="Big Matrix Research Logo" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* Tagline */}
            <motion.div variants={textRevealVariants} initial="hidden" animate="visible" className="relative overflow-hidden w-fit px-4">
              <p className="text-lg lg:text-xl font-light px-4 py-2 bg-primary rounded-[6px] text-secondary">
                Transforming Complex Data into Actionable Insights
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={textRevealVariants} initial="hidden" animate="visible" className="text-black/90 text-lg text-justify leading-relaxed">
              Welcome to Big Matrix Research, where we delve into the intricate world of mathematical modeling, computational methods, and machine learning to unravel the complexities of today's data-driven challenges. As a pioneering research group, we specialize in Model Order Reduction, Computational Methods in Control Theory, Matrix Equations, Mathematical Modeling, and Machine Learning applications. Our mission is to harness the power of big data and advanced computational techniques to develop innovative solutions that bridge theoretical frameworks with real-world applications. Through collaborative research endeavors and interdisciplinary approaches, we strive to push the boundaries of knowledge and empower industries across various domains. Join us on our journey as we navigate
              through the vast matrix of possibilities, transforming complex data into actionable insights for a brighter, more informed future.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={textRevealVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row py-4 gap-4 px-4">
              <Button effect="gooeyLeft" size="lg" className="bg-primary text-lg lg:text-xl font-light text-secondary rounded-[4px]  hover:bg-primary/90">
                Explore Research
              </Button>
              <Button variant="outline" effect="hoverUnderline" size="lg" className="border-primary text-lg lg:text-xl font-light text-primary rounded-[4px] hover:bg-primary/10">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 lg:py-24 px-4 lg:px-0 min-h-screen mx-auto w-full lg:w-4/5" ref={featuresRef}>
        <motion.div variants={cardRevealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="container">
          <h1 className="text-4xl lg:text-5xl font-light text-center text-primary mb-8 lg:mb-12">Mission & Vision</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cardData.map(({ title, description, icon, bgColor, iconColor, hoverColor }, index) => (
              <motion.div key={index} variants={cardItemVariants} whileHover={{ scale: 1.02 }} className={`group flex flex-col items-center text-center p-6 rounded-xl shadow-sm border border-primary/10 hover:shadow-xl hover:border-primary/30 transform transition-all duration-300 ease-out`}>
                <div className={`p-3 ${bgColor} rounded-full mb-4 ${hoverColor} group-hover:scale-110 group-hover:rotate-12 transform transition-all duration-300`}>{icon}</div>
                <h2 className="text-2xl font-thin mb-4 text-primary group-hover:scale-105 transition-transform duration-300">{title}</h2>
                <p className="text-black/70 group-hover:text-black/90 text-justify transition-colors duration-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;

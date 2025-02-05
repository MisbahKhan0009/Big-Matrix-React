/* eslint-disable */
import React from "react";

const Banner = ({ bannerText, bannerIcon: Icon, bannerBg, children }) => {
  return (
    <section className="relative flex justify-center items-center min-h-[33vh] overflow-hidden">
      {/* Background Image */}
      {bannerBg && (
        
        <div
          className="absolute inset-0 -z-0"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
      )}

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 -z-0" />

      <div className="container mx-auto px-4 py-12 text-center relative">
        <div className="flex items-center justify-center mb-4">{Icon && <Icon size={50} color="white" />}</div>
        <h1 className="text-6xl font-light text-white mb-2">{bannerText}</h1>
        {children}
      </div>
    </section>
  );
};

export default Banner;

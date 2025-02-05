/* eslint-disable */

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// fix marker
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Banner from "../Shared/Banner";
import { Send } from "lucide-react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const position = [23.81538695, 90.42610594544826];

  return (
    <div >
      <Banner bannerText={"Contact"} bannerBg={"/public/contact.jpg"} bannerIcon={Send} />
      <div className="container mx-auto justify-center items-center px-4 py-8 flex flex-col  gap-8">
        {/* Map Section */}
        <div className="md:w-3/4 rounded-lg shadow-md overflow-hidden">
          <MapContainer center={position} zoom={17} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
            <Marker position={position}></Marker>
            <ChangeView center={position} />
          </MapContainer>
          <div className="p-3 text-gray-700 text-sm bg-gray-50 border-t border-gray-200">
            <span className="font-semibold">SAC-1025, North South University</span>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-3/4 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded focus:ring-primary focus:border-primary bg-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded focus:ring-primary focus:border-primary bg-white" />
          <input type="text" placeholder="Subject" className="w-full p-3 border rounded focus:ring-primary focus:border-primary bg-white" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded focus:ring-primary focus:border-primary bg-white" rows="5" />
          <button className="bg-primary text-white py-3 px-6 rounded hover:bg-primary/90 transition-colors">Send Email</button>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export default Contact;

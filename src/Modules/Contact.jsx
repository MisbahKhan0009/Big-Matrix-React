/* eslint-disable */
import { useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import emailjs from "@emailjs/browser"; // Import EmailJS
import Banner from "../Shared/Banner";
import { Send } from "lucide-react";

// Fix Leaflet Marker issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { toast } from "sonner";

const Contact = () => {
  const position = [23.81538695, 90.42610594544826];
  const formRef = useRef(); // Form reference

  const DefaultIcon = useMemo(() => L.icon({ iconUrl: icon, shadowUrl: iconShadow }), []);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
      (result) => {
        toast.success("Email sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        toast.error("Failed to send email. Please try again.");
      }
    );
  };

  return (
    <div>
      <Banner bannerText="Contact" bannerBg={"/contact.jpg"} bannerIcon={Send} />

      <div className="container mx-auto flex flex-col items-center py-8">
        {/* Map Section */}
        <div className="md:w-10/12 rounded-lg shadow-md overflow-hidden">
          <MapContainer center={position} zoom={17} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={DefaultIcon} />
            <ChangeView center={position} />
          </MapContainer>
          <div className="p-3 text-gray-700 text-sm bg-gray-50 border-t border-gray-200">
            <span className="font-semibold">
              SAC-1025, North South University
              <br />
              Bashundhara, Dhaka-1229, Bangladesh
            </span>
          </div>
        </div>

        {/* Form Section */}
        <form ref={formRef} onSubmit={sendEmail} className="md:w-10/12 space-y-4">
          <InputField type="text" name="name" placeholder="Your Name" required />
          <InputField type="email" name="email" placeholder="Your Email" required />
          <InputField type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded focus:ring-primary focus:border-primary bg-white" rows="5" required />
          <button type="submit" className="bg-primary text-white py-3 px-6 rounded hover:bg-primary/90 transition-colors">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

// Change Map View Hook
const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

// Reusable Input Field Component
const InputField = ({ type, name, placeholder, required }) => <input type={type} name={name} placeholder={placeholder} required={required} className="w-full p-3 border rounded focus:ring-primary focus:border-primary bg-white" />;

export default Contact;

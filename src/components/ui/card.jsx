/* eslint-disable */
import { FaGoogle, FaEnvelope, FaUser, FaGithub, FaFacebook, FaTwitter, FaLinkedinIn, FaLink } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Card = ({ memberData }) => {
  const socialLinks = [
    { platform: "email", icon: FaEnvelope, url: `mailto:${memberData.email}`, label: "Email" },
    { platform: "orcid", icon: FaUser, url: memberData.orcid, label: "ORCID" },
    { platform: "github", icon: FaGithub, url: memberData.github, label: "GitHub" },
    { platform: "facebook", icon: FaFacebook, url: memberData.facebook, label: "Facebook" },
    { platform: "twitter", icon: FaTwitter, url: memberData.twitter, label: "Twitter" },
    { platform: "linkedin", icon: FaLinkedinIn, url: memberData.linkedin, label: "LinkedIn" },
    { platform: "portfolio", icon: FaGoogle, url: memberData.portfolio, label: "Portfolio" },
  ];

  const filteredSocialLinks = socialLinks.filter((link) => memberData[link.platform]);

  return (
    <div className="flex flex-col bg-white rounded-[6px] shadow-2xl overflow-hidden mx-auto my-5 border-2 border-primary/30 transform transition duration-300 hover:shadow-2xl hover:scale-105 h-5/6 w-full relative">
      <div className="flex w-11/12 justify-center items-start pt-2">
        <img src={memberData.photo} alt={memberData.name} className="rounded-full  w-auto h-24  border-primary border-2 mx-1 object-cover" />
        <div className="flex ml-1 flex-col">
          <h2 className="text-black text-2xl mb-2 font-base">{memberData.name}</h2>
          <p className="text-gray-600 text-sm mb-5">{memberData.designation}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          {memberData.position === "Team Leader" ? (
            <div className="flex flex-wrap gap-4">
              {filteredSocialLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary text-2xl transition-transform hover:scale-125" title={link.label}>
                  <link.icon />
                </a>
              ))}
            </div>
          ) : (
            memberData.google_scholar && (
              <a 
                href={memberData.google_scholar} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex font-light rounded-[4px] items-center py-1 px-2 bg-primary border border-primary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 absolute bottom-3 right-3"
              >
                Contact
                <ArrowRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

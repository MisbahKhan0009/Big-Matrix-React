import { Github, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import { SlSocialGoogle } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/uddinmonir", label: "Github" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61566031568599", label: "Facebook" },
    { icon: SlSocialGoogle, href: "https://scholar.google.com/citations?user=ZcKnA_AAAAAJ&hl=en", label: "Google Scholar" },
  ];

  const contactInfo = [
    { icon: Mail, text: "monirresearchlab@gmail.com", label: "Email" },
    { icon: Phone, text: "+8801767076722", label: "Phone" },
    { icon: MapPin, text: "Bashundhara, Dhaka-1229, Bangladesh", label: "Address" },
  ];

  const sitemapLinks = [
    { title: "Home", path: "/" },
    { title: "Publications & Talks", path: "/publications" },
    { title: "Team Members", path: "/team" },
    { title: "Research", path: "/research" },
    { title: "Projects", path: "/projects" },
    { title: "Teaching & Training", path: "/teaching" },
    { title: "Research Data", path: "/data" },
    { title: "Research Software", path: "/software" },
    { title: "Contact", path: "/contact" },
    { title: "Shop", path: "/shop" },
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="relative bg-primary text-secondary mt-40"> {/* Changed mt-20 to mt-40 */}
      <div className="absolute inset-0 overflow-x-hidden mt-6 bg-primary skew-y-2 -translate-y-16 origin-top-right -z-10" />
      <div className="container mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/new logo.jpg" 
              alt="Big Matrix" 
              className="h-auto w-60 object-contain" // Updated image styling
            />
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, label }) => (
                <div key={label} className="flex items-center gap-3 text-secondary/90 hover:text-secondary transition-colors">
                  <Icon size={18} className="flex-shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-secondary/90 hover:text-secondary transition-colors">
                      <Icon size={24} strokeWidth={1.5} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white">Sitemap</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
              {sitemapLinks.map(({ title, path }) => (
                <Link key={path} to={path} className="text-secondary/90 hover:text-secondary transition-colors relative w-fit group">
                  <span className="relative">
                    {title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-16 pt-8 border-t border-secondary/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary/90">© {currentYear} Big-Matrix Research. All rights reserved.</p>
            <div className="flex gap-8">
              {legalLinks.map(({ text, href }) => (
                <a key={text} href={href} className="text-sm text-secondary/90 hover:text-secondary transition-colors">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

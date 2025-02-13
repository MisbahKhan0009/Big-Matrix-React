import { Github, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import { SlSocialGoogle } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/uddinmonir", label: "Github" },
    { icon: Facebook, href: "https://www.facebook.com/mohammadmonir.uddin.75", label: "Facebook" },
    { icon: SlSocialGoogle, href: "https://scholar.google.com/citations?user=ZcKnA_AAAAAJ&hl=en", label: "Google Scholar" },
  ];

  const contactInfo = [
    { icon: Mail, text: "monirresearchlab@gmail.com", label: "Email" },
    { icon: Phone, text: "+1 (555) 123-4567", label: "Phone" },
    { icon: MapPin, text: "Bashundhara, Dhaka-1229, Bangladesh", label: "Address" },
  ];

  // Using the same menu items as Sidebar
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
    <footer className="relative bg-primary text-secondary mt-20">
      <div className="absolute inset-0 bg-primary -skew-y-2 -translate-y-10 origin-top-right -z-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Big-Matrix</h3>
            <p className="text-sm">Transforming Complex Data into Actionable Insights</p>
            <div className="space-y-2">
              {contactInfo.map(({ icon: Icon, text, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={18} />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Tooltip key={label}>
                  <TooltipTrigger>
                    <a href={href} aria-label={label} className="hover:text-white transition-colors">
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
            <h4 className="text-lg font-semibold text-white underline underline-offset-4 mb-4">Sitemap</h4>
            <div className="grid grid-cols-2 gap-4">
              {sitemapLinks.map(({ title, path }) => (
                <Link key={path} to={path} className="relative w-fit inline-block text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <form className="space-y-3">
              <div className="relative">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Mail className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div> */}
        </div>

        {/* Copyright section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {currentYear} Big-Matrix Research. All rights reserved.</p>
            <div className="flex gap-6">
              {legalLinks.map(({ text, href }) => (
                <a key={text} href={href} className="text-sm hover:text-white transition-colors">
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

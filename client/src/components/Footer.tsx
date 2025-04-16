import { SOCIAL_LINKS } from "@/lib/constants";
import { SiDiscord, SiTwitch, SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { ArrowUpRight, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Stream Channels",
      links: [
        { label: "IRL Stream", url: SOCIAL_LINKS.TWITCH_MAIN },
        { label: "Gaming Stream", url: SOCIAL_LINKS.TWITCH_GAMING }
      ]
    },
    {
      title: "Social Media",
      links: [
        { label: "X / Twitter", url: SOCIAL_LINKS.X_PROFILE },
        { label: "X Community", url: SOCIAL_LINKS.X_COMMUNITY },
        { label: "Instagram", url: SOCIAL_LINKS.INSTAGRAM }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Discord Server", url: SOCIAL_LINKS.DISCORD }
      ]
    }
  ];
  
  return (
    <footer className="bg-[#0E0E10] pt-16 pb-8 border-t border-gray-800/30">
      <div className="container mx-auto px-4">
        {/* Top section with logo, description and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9] text-transparent bg-clip-text inline-block">
                Rennsz
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#9146FF] to-[#00FFFF] rounded-full mb-4"></div>
              <p className="text-gray-400 max-w-md mb-6">
                Delivering premium streaming experiences through high-quality IRL content and immersive gaming sessions.
              </p>
              
              <div className="flex space-x-3 mb-8">
                <a 
                  href={SOCIAL_LINKS.TWITCH_MAIN} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-[#9146FF] transition-all duration-300 group"
                  aria-label="Twitch"
                >
                  <SiTwitch className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={SOCIAL_LINKS.DISCORD} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-[#5865F2] transition-all duration-300 group"
                  aria-label="Discord"
                >
                  <SiDiscord className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={SOCIAL_LINKS.X_PROFILE} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-[#1D9BF0] transition-all duration-300 group"
                  aria-label="Twitter/X"
                >
                  <FaTwitter className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={SOCIAL_LINKS.INSTAGRAM} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#131316] rounded-lg flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <SiInstagram className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                        >
                          <ChevronRight className="h-3 w-3 mr-1 text-gray-500 group-hover:text-white" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get Stream Notifications</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Join the mailing list to receive notifications about upcoming streams and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
              <div className="relative flex-grow">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-[#131316] border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9146FF] focus:border-transparent text-white text-sm"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              <Button className="bg-gradient-to-r from-[#9146FF] to-[#6441A4] hover:opacity-90 rounded-lg shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>
        
        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div>
            <p>&copy; {currentYear} Rennsz. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

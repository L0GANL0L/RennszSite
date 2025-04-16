import { SOCIAL_LINKS } from "@/lib/constants";
import { SiDiscord, SiTwitch, SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#18181B] py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9146FF] to-[#00FFFF] text-transparent bg-clip-text">
              Rennsz
            </h2>
            <p className="text-gray-400 mt-2">IRL and Gaming Streamer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={SOCIAL_LINKS.TWITCH_MAIN} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#0E0E10] rounded-full flex items-center justify-center hover:bg-[#9146FF] transition"
              aria-label="Twitch"
            >
              <SiTwitch />
            </a>
            <a 
              href={SOCIAL_LINKS.DISCORD} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#0E0E10] rounded-full flex items-center justify-center hover:bg-[#5865F2] transition"
              aria-label="Discord"
            >
              <SiDiscord />
            </a>
            <a 
              href={SOCIAL_LINKS.X_PROFILE} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#0E0E10] rounded-full flex items-center justify-center hover:bg-[#1D9BF0] transition"
              aria-label="Twitter/X"
            >
              <FaTwitter />
            </a>
            <a 
              href={SOCIAL_LINKS.INSTAGRAM} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#0E0E10] rounded-full flex items-center justify-center hover:bg-[#833AB4] transition"
              aria-label="Instagram"
            >
              <SiInstagram />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Rennsz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

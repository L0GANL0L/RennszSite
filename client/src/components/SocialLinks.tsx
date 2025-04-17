import { SOCIAL_LINKS } from "@/lib/constants";
import { ExternalLink, Users, ArrowUpRight } from "lucide-react";
import { SiDiscord, SiTwitch, SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import streamerImage from "../assets/IMG_2456.png";
import { Badge } from "@/components/ui/badge";

export default function SocialLinks() {
  const socialCards = [
    {
      id: "discord",
      title: "Discord Server",
      description: "Join Rennsz's exclusive community Discord server to chat with other fans and get notified the moment streams go live.",
      icon: <SiDiscord className="text-2xl" />,
      iconBg: "#5865F2",
      gradient: "from-[#5865F2] to-[#7289DA]",
      buttonBg: "#5865F2",
      buttonHoverBg: "#4752c4",
      linkText: "Join Community",
      url: SOCIAL_LINKS.DISCORD
    },
    {
      id: "x-profile",
      title: "X Profile",
      description: "Follow Rennsz on X (Twitter) for exclusive updates, announcements, and behind-the-scenes stream highlights.",
      icon: <FaTwitter className="text-2xl" />,
      iconBg: "#1D9BF0",
      gradient: "from-[#1D9BF0] to-[#0c7abf]",
      buttonBg: "#1D9BF0",
      buttonHoverBg: "#0c7abf",
      linkText: "Follow Profile",
      url: SOCIAL_LINKS.X_PROFILE
    },
    {
      id: "x-community",
      title: "X Community",
      description: "Join Rennsz's curated X community to connect with like-minded fans and participate in premium discussions.",
      icon: <Users className="text-2xl" />,
      iconBg: "#1D9BF0",
      gradient: "from-[#1D9BF0] to-[#0c7abf]",
      buttonBg: "#1D9BF0",
      buttonHoverBg: "#0c7abf",
      linkText: "Join Community",
      url: SOCIAL_LINKS.X_COMMUNITY
    },
    {
      id: "instagram",
      title: "Instagram",
      description: "Experience Rennsz's lifestyle through premium Instagram content featuring behind-the-scenes moments and daily highlights.",
      icon: <SiInstagram className="text-2xl" />,
      iconBg: "#E1306C",
      gradient: "from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      buttonBg: "bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      buttonHoverBg: "opacity-90",
      linkText: "Follow Gallery",
      url: SOCIAL_LINKS.INSTAGRAM,
      memberCount: "Join Now"
    },
    {
      id: "twitch-main",
      title: "Main IRL Channel",
      description: "Follow Rennsz's main IRL streaming channel for high-end real-life adventures and premium experiences.",
      icon: <SiTwitch className="text-2xl" />,
      iconBg: "#9146FF",
      gradient: "from-[#9146FF] to-[#6441A4]",
      buttonBg: "#9146FF",
      buttonHoverBg: "#6441A4",
      linkText: "Follow Channel",
      url: SOCIAL_LINKS.TWITCH_MAIN,
      memberCount: "Follow Now"
    },
    {
      id: "twitch-gaming",
      title: "Gaming Channel",
      description: "Dive into Rennsz's exclusive gaming sessions with top-tier gameplay and interactive entertainment.",
      icon: <FaGamepad className="text-2xl" />,
      iconBg: "#6441A4",
      gradient: "from-[#6441A4] to-[#9146FF]",
      buttonBg: "#6441A4",
      buttonHoverBg: "#9146FF",
      linkText: "Follow Gaming",
      url: SOCIAL_LINKS.TWITCH_GAMING,
      memberCount: "Follow Now"
    },
    {
      id: "tiktok",
      title: "TikTok Content",
      description: "Experience Rennsz's viral moments and exclusive behind-the-scenes content on TikTok.",
      icon: <SiTiktok className="text-2xl" />,
      iconBg: "#000000",
      gradient: "from-[#000000] to-[#00f2ea]",
      buttonBg: "#000000",
      buttonHoverBg: "#00f2ea",
      linkText: "Follow TikTok",
      url: "https://www.tiktok.com/@rennsztok",
      memberCount: "Join Now"
    }
  ];

  return (
    <section id="socials" className="py-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[#0E0E10] opacity-50 z-0"></div>
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-cover z-0 blur-sm"
        style={{ backgroundImage: `url(${streamerImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9] text-transparent bg-clip-text">
                Connect With Rennsz
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#9146FF] to-[#00FFFF] rounded-full"></div>
          </div>
          <p className="text-gray-300 md:w-1/3 mt-4 md:mt-0 text-lg">
            Join Rennsz's exclusive community across all platforms for premium content and experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialCards.map((card) => (
            <div key={card.id} className="group">
              <div className="bg-[#0E0E10] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[0_10px_40px_-12px_rgba(145,70,255,0.4)] hover:translate-y-[-5px] h-full">
                {/* Top gradient border */}
                <div className={`h-2 w-full bg-gradient-to-r ${card.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-r p-[2px] mr-4 shadow-lg"
                      style={{ backgroundImage: `linear-gradient(to right, ${card.iconBg}, ${card.buttonHoverBg || card.iconBg})` }}
                    >
                      <div className="w-full h-full rounded-xl bg-[#0E0E10] flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                      <span className="text-gray-300 font-normal">{card.memberCount}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-8 min-h-[80px]">{card.description}</p>
                  
                  <div className="mt-auto">
                    <a 
                      href={card.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={
                        typeof card.buttonBg === 'string' && card.buttonBg.includes('gradient') 
                          ? `${card.buttonBg} rounded-xl py-4 shadow-lg mb-4 transition-all duration-300 transform hover:scale-[1.02] w-full flex items-center justify-center text-white font-medium text-lg`
                          : "rounded-xl py-4 shadow-lg mb-4 transition-all duration-300 transform hover:scale-[1.02] w-full flex items-center justify-center text-white font-medium text-lg"
                      }
                      style={{
                        background: typeof card.buttonBg === 'string' && card.buttonBg.includes('gradient') 
                          ? undefined 
                          : `linear-gradient(to right, ${card.buttonBg}, ${card.buttonHoverBg || card.buttonBg})`
                      }}
                    >
                      {card.icon}
                      <span className="ml-2">{card.linkText}</span>
                    </a>
                    
                    <a 
                      href={card.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-sm text-gray-400 hover:text-white transition-colors group"
                    >
                      <span>Visit {card.title}</span>
                      <ArrowUpRight className="h-3 w-3 ml-1 transform transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

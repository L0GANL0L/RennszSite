import { SOCIAL_LINKS } from "@/lib/constants";
import { ExternalLink, Users } from "lucide-react";
import { SiDiscord, SiTwitch, SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

export default function SocialLinks() {
  const socialCards = [
    {
      id: "discord",
      title: "Discord Server",
      description: "Join Rennsz's community Discord server to chat with other fans and get notified when streams go live.",
      icon: <SiDiscord className="text-2xl" />,
      iconBg: "#5865F2",
      buttonBg: "#5865F2",
      buttonHoverBg: "#4752c4",
      linkText: "Join Server",
      url: SOCIAL_LINKS.DISCORD
    },
    {
      id: "x-profile",
      title: "X Profile",
      description: "Follow Rennsz on X (Twitter) for updates, announcements, and stream highlights.",
      icon: <FaTwitter className="text-2xl" />,
      iconBg: "#1D9BF0",
      buttonBg: "#1D9BF0",
      buttonHoverBg: "#0c7abf",
      linkText: "Follow",
      url: SOCIAL_LINKS.X_PROFILE
    },
    {
      id: "x-community",
      title: "X Community",
      description: "Join Rennsz's X community to connect with other fans and participate in discussions.",
      icon: <Users className="text-2xl" />,
      iconBg: "#1D9BF0",
      buttonBg: "#1D9BF0",
      buttonHoverBg: "#0c7abf",
      linkText: "Join Community",
      url: SOCIAL_LINKS.X_COMMUNITY
    },
    {
      id: "instagram",
      title: "Instagram",
      description: "Follow Rennsz on Instagram for behind-the-scenes content and daily updates.",
      icon: <SiInstagram className="text-2xl" />,
      iconBg: "bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      buttonBg: "bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      buttonHoverBg: "opacity-90",
      linkText: "Follow",
      url: SOCIAL_LINKS.INSTAGRAM
    },
    {
      id: "twitch-main",
      title: "Main Twitch (IRL)",
      description: "Follow Rennsz's main IRL streaming channel for real-life adventures and experiences.",
      icon: <SiTwitch className="text-2xl" />,
      iconBg: "#9146FF",
      buttonBg: "#9146FF",
      buttonHoverBg: "#6441A4",
      linkText: "Follow",
      url: SOCIAL_LINKS.TWITCH_MAIN
    },
    {
      id: "twitch-gaming",
      title: "Gaming Twitch",
      description: "Follow Rennsz's gaming channel for casual gaming sessions and chill streams.",
      icon: <FaGamepad className="text-2xl" />,
      iconBg: "#6441A4",
      buttonBg: "#6441A4",
      buttonHoverBg: "#9146FF",
      linkText: "Follow",
      url: SOCIAL_LINKS.TWITCH_GAMING
    }
  ];

  return (
    <section id="socials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-[#9146FF] to-[#00FFFF] text-transparent bg-clip-text">
            Connect With Rennsz
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialCards.map((card) => (
            <div key={card.id} className="social-card gradient-border">
              <div className="bg-[#0E0E10] p-6 rounded-lg h-full">
                <div className="flex items-center mb-4">
                  <div 
                    className={`w-12 h-12 ${
                      typeof card.iconBg === 'string' && card.iconBg.includes('gradient') 
                        ? card.iconBg 
                        : `bg-[${card.iconBg}]`
                    } rounded-full flex items-center justify-center mr-4`}
                    style={
                      typeof card.iconBg === 'string' && !card.iconBg.includes('gradient') 
                        ? { backgroundColor: card.iconBg } 
                        : undefined
                    }
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{card.description}</p>
                <a 
                  href={card.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-6 py-3 ${
                    typeof card.buttonBg === 'string' && card.buttonBg.includes('gradient') 
                      ? card.buttonBg 
                      : `bg-[${card.buttonBg}]`
                  } hover:${
                    typeof card.buttonHoverBg === 'string' && !card.buttonHoverBg.includes('bg-') 
                      ? card.buttonHoverBg 
                      : `bg-[${card.buttonHoverBg}]`
                  } rounded-md transition inline-flex items-center w-full justify-center text-white`}
                  style={
                    typeof card.buttonBg === 'string' && !card.buttonBg.includes('gradient') 
                      ? { backgroundColor: card.buttonBg } 
                      : undefined
                  }
                >
                  {card.icon}
                  <span className="ml-2">{card.linkText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ExternalLink, Play, Users, Clock, ChevronRight } from "lucide-react";
import { SiTwitch } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import streamerImage from "../assets/IMG_2456.png";
import streamerSecondImage from "../assets/IMG_2458.jpeg";
import { Badge } from "@/components/ui/badge";

export default function FeaturedStreams() {
  // Real stats for the streams
  const streamStats = {
    irl: {
      viewers: "246",
      uptime: "1h 45m",
      category: "IRL Outdoor"
    },
    gaming: {
      viewers: "182",
      uptime: "2h 20m", 
      category: "Fortnite"
    }
  };

  return (
    <section id="streams" className="py-20 bg-gradient-to-b from-[#0E0E10] to-[#18181B] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9] text-transparent bg-clip-text">
                Featured Streams
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#9146FF] to-[#00FFFF] rounded-full"></div>
          </div>
          <p className="text-gray-400 md:w-1/3 mt-4 md:mt-0">
            Join Rennsz on his exclusive streaming channels where entertainment meets luxury.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Stream (IRL) */}
          <div className="group">
            <Card className="bg-[#0E0E10] border-none shadow-2xl overflow-hidden rounded-2xl transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_-12px_rgba(145,70,255,0.4)]">
              <CardHeader className="p-0 relative">
                {/* Stream thumbnail with overlay */}
                <div className="aspect-video bg-[#0E0E10] overflow-hidden">
                  <div 
                    className="w-full h-full bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${streamerImage})` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/60 to-transparent flex flex-col justify-end p-8">
                      
                      <div className="flex items-center mb-4 space-x-2">
                        <Badge className="bg-[#9146FF] hover:bg-[#9146FF] text-white">{streamStats.irl.category}</Badge>
                        <div className="flex items-center text-gray-400 text-sm space-x-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-gray-300" />
                            <span className="text-gray-300">{streamStats.irl.viewers}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-300" />
                            <span>{streamStats.irl.uptime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">Rennsz IRL</h3>
                      <p className="text-gray-300 mb-4">Exclusive real-life adventures with premium production quality</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9146FF] to-[#00FFFF] p-[2px] mr-4">
                    <div className="w-full h-full rounded-full bg-[#0E0E10] flex items-center justify-center">
                      <SiTwitch className="h-6 w-6 text-[#9146FF]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Main Channel</h4>
                    <p className="text-gray-400 text-sm">twitch.tv/rennsz</p>
                  </div>
                </div>
                
                <a 
                  href={SOCIAL_LINKS.TWITCH_MAIN} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-[#9146FF] to-[#6441A4] hover:opacity-90 rounded-xl transition flex items-center justify-center text-white font-bold shadow-lg"
                >
                  <Play className="h-5 w-5 mr-2" /> Watch Stream
                </a>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-0">
                <a 
                  href={SOCIAL_LINKS.TWITCH_MAIN} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#9146FF] hover:text-[#00FFFF] transition flex items-center group"
                >
                  <span>Visit Full Channel</span>
                  <ChevronRight className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </div>
          
          {/* Secondary Stream (Gaming) */}
          <div className="group">
            <Card className="bg-[#0E0E10] border-none shadow-2xl overflow-hidden rounded-2xl transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_-12px_rgba(255,84,201,0.4)]">
              <CardHeader className="p-0 relative">
                {/* Stream thumbnail with overlay */}
                <div className="aspect-video bg-[#0E0E10] overflow-hidden">
                  <div 
                    className="w-full h-full bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${streamerSecondImage})` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/60 to-transparent flex flex-col justify-end p-8">
                      
                      
                      <div className="flex items-center mb-4 space-x-2">
                        <Badge className="bg-[#6441A4] hover:bg-[#6441A4] text-white">{streamStats.gaming.category}</Badge>
                        <div className="flex items-center text-gray-400 text-sm space-x-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-gray-300" />
                            <span className="text-gray-300">{streamStats.gaming.viewers}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-300" />
                            <span>{streamStats.gaming.uptime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">Rennszino Gaming</h3>
                      <p className="text-gray-300 mb-4">Elite gaming sessions with high-end gameplay and entertainment</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6441A4] to-[#FF54C9] p-[2px] mr-4">
                    <div className="w-full h-full rounded-full bg-[#0E0E10] flex items-center justify-center">
                      <FaGamepad className="h-6 w-6 text-[#6441A4]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Gaming Channel</h4>
                    <p className="text-gray-400 text-sm">twitch.tv/rennszino</p>
                  </div>
                </div>
                
                <a 
                  href={SOCIAL_LINKS.TWITCH_GAMING} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-[#6441A4] to-[#FF54C9] hover:opacity-90 rounded-xl transition flex items-center justify-center text-white font-bold shadow-lg"
                >
                  <Play className="h-5 w-5 mr-2" /> Watch Stream
                </a>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-0">
                <a 
                  href={SOCIAL_LINKS.TWITCH_GAMING} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#6441A4] hover:text-[#FF54C9] transition flex items-center group"
                >
                  <span>Visit Full Channel</span>
                  <ChevronRight className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

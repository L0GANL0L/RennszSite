import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ExternalLink, Play } from "lucide-react";
import { SiTwitch } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";

export default function FeaturedStreams() {
  return (
    <section id="streams" className="py-16 bg-[#18181B] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-[#9146FF] to-[#00FFFF] text-transparent bg-clip-text">
            Featured Streams
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Stream (IRL) */}
          <Card className="bg-[#0E0E10] border-none shadow-lg overflow-hidden">
            <CardHeader className="p-4 bg-gradient-to-r from-[#9146FF]/20 to-[#00FFFF]/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                <h3 className="text-xl font-bold text-white">IRL Stream</h3>
              </div>
              <div className="aspect-video bg-[#0E0E10] rounded overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-[#0E0E10]/50 p-6">
                  <div className="text-center">
                    <SiTwitch className="h-10 w-10 text-[#9146FF] mb-4 mx-auto" />
                    <p className="text-lg mb-4 text-white">Main IRL Stream</p>
                    <a 
                      href={SOCIAL_LINKS.TWITCH_MAIN} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#9146FF] hover:bg-[#6441A4] rounded-md transition inline-flex items-center text-white"
                    >
                      <Play className="h-4 w-4 mr-2" /> Watch Live
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-2 text-white">Rennsz IRL</h4>
              <p className="text-gray-400 mb-4">Join Rennsz on real-life adventures and experiences!</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <a 
                href={SOCIAL_LINKS.TWITCH_MAIN} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#9146FF] hover:text-[#00FFFF] transition flex items-center"
              >
                <span>Visit Channel</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </CardFooter>
          </Card>
          
          {/* Secondary Stream (Gaming) */}
          <Card className="bg-[#0E0E10] border-none shadow-lg overflow-hidden">
            <CardHeader className="p-4 bg-gradient-to-r from-[#6441A4]/20 to-[#FF54C9]/20">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <h3 className="text-xl font-bold text-white">Gaming Stream</h3>
              </div>
              <div className="aspect-video bg-[#0E0E10] rounded overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-[#0E0E10]/50 p-6">
                  <div className="text-center">
                    <FaGamepad className="h-10 w-10 text-[#6441A4] mb-4 mx-auto" />
                    <p className="text-lg mb-4 text-white">Gaming/Chilling Stream</p>
                    <a 
                      href={SOCIAL_LINKS.TWITCH_GAMING} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#6441A4] hover:bg-[#9146FF] rounded-md transition inline-flex items-center text-white"
                    >
                      <Play className="h-4 w-4 mr-2" /> Watch Live
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-2 text-white">Rennszino Gaming</h4>
              <p className="text-gray-400 mb-4">Chill gaming sessions and casual streams!</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <a 
                href={SOCIAL_LINKS.TWITCH_GAMING} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6441A4] hover:text-[#FF54C9] transition flex items-center"
              >
                <span>Visit Channel</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

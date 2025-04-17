import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import streamerImage from "../assets/IMG_2456.png";
import streamerSecondImage from "../assets/IMG_2458.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="py-16 md:py-24 border-b border-gray-800 relative overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18181B]/60 via-[#18181B]/80 to-[#18181B] z-0"></div>
      
      {/* Streamer image background (blurred and dimmed) */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div 
          className="absolute inset-0 bg-center bg-cover filter blur-sm"
          style={{ backgroundImage: `url(${streamerSecondImage})` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          <div className="lg:w-1/2 text-left lg:pr-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9] text-transparent bg-clip-text">
                Rennsz
              </span>
            </h1>
            <div className="h-2 w-24 bg-gradient-to-r from-[#9146FF] to-[#00FFFF] rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
              Experience premium <span className="font-bold text-white">IRL and Gaming</span> content with a streamer who pushes boundaries and creates unforgettable moments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button 
                onClick={() => scrollToSection('streams')}
                className="px-8 py-6 bg-gradient-to-r from-[#9146FF] to-[#6441A4] hover:opacity-90 text-white shadow-xl rounded-xl transition-all duration-300"
                size="lg"
              >
                Watch Streams
              </Button>
              <Button 
                onClick={() => scrollToSection('socials')}
                variant="outline"
                className="px-8 py-6 border-2 border-[#9146FF] hover:bg-[#9146FF]/10 text-white shadow-xl rounded-xl transition-all duration-300"
                size="lg"
              >
                Connect
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">RM</div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">KL</div>
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">JW</div>
              </div>
              <p className="text-gray-400">Join our growing community of viewers</p>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main image with gradient border */}
              <div className="rounded-2xl p-1 bg-gradient-to-tr from-[#9146FF] via-[#00FFFF] to-[#FF54C9] shadow-2xl">
                <img 
                  src={streamerImage} 
                  alt="Rennsz - Streamer" 
                  className="rounded-xl h-full w-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-tr from-[#9146FF] to-[#00FFFF] rounded-full opacity-30 blur-md"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#00FFFF] to-[#FF54C9] rounded-full opacity-30 blur-md"></div>
              
              {/* Live badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold flex items-center shadow-lg">
                <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
                LIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiTwitch } from "react-icons/si";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0E0E10]/95 backdrop-blur-md shadow-xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9] text-transparent bg-clip-text pr-2">
              Rennsz
            </h1>
            <div className={`h-[3px] w-full bg-gradient-to-r from-[#9146FF] to-[#00FFFF] rounded-full transition-all duration-300 ${scrolled ? 'w-1/3 opacity-70' : 'w-full'}`}></div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a 
              href="#home" 
              className="nav-link active text-white font-medium text-sm uppercase tracking-wider hover:text-[#9146FF] transition py-2"
            >
              Home
            </a>
            <a 
              href="#streams" 
              className="nav-link text-white font-medium text-sm uppercase tracking-wider hover:text-[#9146FF] transition py-2"
            >
              Streams
            </a>
            <a 
              href="#socials" 
              className="nav-link text-white font-medium text-sm uppercase tracking-wider hover:text-[#9146FF] transition py-2"
            >
              Socials
            </a>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-[#9146FF] to-[#6441A4] hover:opacity-90 rounded-full flex items-center shadow-lg px-6"
            size="sm"
            onClick={() => window.open('https://www.twitch.tv/rennsz', '_blank')}
          >
            <SiTwitch className="mr-2" />
            <span>Watch Live</span>
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0E0E10]/95 backdrop-blur-md transition-all duration-300 ease-in-out border-t border-gray-800/50 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="flex items-center justify-between text-white py-3 hover:text-[#9146FF] transition border-b border-gray-800/30"
            onClick={handleNavLinkClick}
          >
            <span className="font-medium">Home</span>
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </a>
          <a 
            href="#streams" 
            className="flex items-center justify-between text-white py-3 hover:text-[#9146FF] transition border-b border-gray-800/30"
            onClick={handleNavLinkClick}
          >
            <span className="font-medium">Streams</span>
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </a>
          <a 
            href="#socials" 
            className="flex items-center justify-between text-white py-3 hover:text-[#9146FF] transition border-b border-gray-800/30"
            onClick={handleNavLinkClick}
          >
            <span className="font-medium">Socials</span>
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </a>
          
          <Button 
            className="w-full mt-4 bg-gradient-to-r from-[#9146FF] to-[#6441A4] hover:opacity-90 rounded-xl flex items-center justify-center shadow-lg"
            onClick={() => {
              window.open('https://www.twitch.tv/rennsz', '_blank');
              handleNavLinkClick();
            }}
          >
            <SiTwitch className="mr-2" />
            <span>Watch Live</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#18181B] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9146FF] to-[#00FFFF] text-transparent bg-clip-text">
            Rennsz
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="nav-link active text-white hover:text-[#9146FF] transition">
            Home
          </a>
          <a href="#streams" className="nav-link text-white hover:text-[#9146FF] transition">
            Streams
          </a>
          <a href="#socials" className="nav-link text-white hover:text-[#9146FF] transition">
            Socials
          </a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#18181B] border-t border-gray-800">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#home" 
              className="text-white py-2 hover:text-[#9146FF] transition"
              onClick={handleNavLinkClick}
            >
              Home
            </a>
            <a 
              href="#streams" 
              className="text-white py-2 hover:text-[#9146FF] transition"
              onClick={handleNavLinkClick}
            >
              Streams
            </a>
            <a 
              href="#socials" 
              className="text-white py-2 hover:text-[#9146FF] transition"
              onClick={handleNavLinkClick}
            >
              Socials
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

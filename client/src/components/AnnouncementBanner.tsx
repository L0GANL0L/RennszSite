
import { useState, useEffect } from "react";
import { FaBicycle, FaTimes } from "react-icons/fa";
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AnnouncementBanner() {
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    const announcementClosed = localStorage.getItem('announcementClosed') === 'true';
    if (announcementClosed) {
      setIsOpen(false);
    }
  }, []);
  
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('announcementClosed', 'true');
  };
  
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-black/95 backdrop-blur-xl border border-[#D4AF37] p-8 max-w-2xl">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        
        <div className="relative">
          <button 
            onClick={handleClose}
            className="absolute -right-4 -top-4 text-[#D4AF37] hover:text-white transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                <FaBicycle className="w-8 h-8 text-[#D4AF37]" />
              </div>
            </div>
            
            <h2 className="font-montserrat text-3xl font-black mb-4 bg-gradient-to-r from-[#D4AF37] to-[#6441A4] bg-clip-text text-transparent">
              STATE TO STATE ADVENTURE
            </h2>
            
            <div className="space-y-4">
              <p className="text-xl font-medium text-white/90">
                MINNEAPOLIS TO WISCONSIN BIKE TRIP
              </p>
              <p className="text-gray-400">
                Join us for an epic journey across state lines, streaming live throughout the adventure.
              </p>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={handleClose}
                className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#6441A4] text-black font-montserrat font-bold rounded-sm hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all"
              >
                STAY TUNED
              </button>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const expiryDate = new Date('2025-04-30T23:59:59');

    const checkDate = () => {
      const now = new Date();
      if (now > expiryDate) {
        setShouldShow(false);
      }
    };

    // Check date immediately
    checkDate();

    // Check localStorage for dismissed state
    const bannerDismissed = localStorage.getItem('announcementBannerDismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }

    // Set up interval for date checking
    const interval = setInterval(checkDate, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('announcementBannerDismissed', 'true');
    setIsVisible(false);
  };

  if (!shouldShow || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E10]/95 to-[#18181B]/95">
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="w-full max-w-4xl relative backdrop-blur-lg bg-black/40 p-8 rounded-2xl border border-white/10">
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute -top-2 -right-2 text-white/60 hover:text-white/90 transition-colors focus:outline-none bg-white/5 p-1 rounded-lg backdrop-blur-xl border border-white/10"
              aria-label="Dismiss announcement"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="space-y-12 text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 bg-white/5 rounded-full px-6 py-2 border border-white/10 shadow-2xl">
                  <div className="h-3 w-3 bg-[#9146FF] rounded-full animate-pulse"></div>
                  <span className="text-white/90 font-medium tracking-wide">EXCLUSIVE EVENT</span>
                </div>
                <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9] drop-shadow-2xl">
                  State to State Biking Stream
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
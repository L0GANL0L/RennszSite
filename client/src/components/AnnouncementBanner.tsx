
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);
  
  // Mock attendance stats
  const attendanceStats = {
    confirmed: 124,
    maybe: 56,
    cantMake: 23
  };
  
  useEffect(() => {
    // Check if banner should be shown (until end of April 2025)
    const expiryDate = new Date('2025-04-30T23:59:59');
    
    const checkDate = () => {
      const now = new Date();
      if (now > expiryDate) {
        setShouldShow(false);
      }
    };

    checkDate();
    const interval = setInterval(checkDate, 1000 * 60 * 60);
    
    const bannerDismissed = localStorage.getItem('announcementBannerDismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }
    
    return () => clearInterval(interval);
  }, []);
  
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('announcementBannerDismissed', 'true');
  };
  
  if (!shouldShow || !isVisible) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      <div className="w-full max-w-4xl p-8 text-center">
        <button 
          onClick={dismissBanner} 
          className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Dismiss announcement"
        >
          <X className="h-8 w-8" />
        </button>
        
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <div className="h-4 w-4 bg-white rounded-full animate-pulse mr-4"></div>
            <h2 className="text-4xl font-bold text-white">
              STATE TO STATE BIKING STREAM SOON
            </h2>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="bg-green-500/20 rounded-2xl p-6">
              <div className="text-5xl font-bold text-green-400 mb-2">
                {attendanceStats.confirmed}
              </div>
              <div className="text-xl text-green-200">Going</div>
            </div>
            
            <div className="bg-yellow-500/20 rounded-2xl p-6">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                {attendanceStats.maybe}
              </div>
              <div className="text-xl text-yellow-200">Maybe</div>
            </div>
            
            <div className="bg-red-500/20 rounded-2xl p-6">
              <div className="text-5xl font-bold text-red-400 mb-2">
                {attendanceStats.cantMake}
              </div>
              <div className="text-xl text-red-200">Can't Make It</div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mt-8">
            Join us for an epic biking adventure across state lines!
          </p>
        </div>
      </div>
    </div>
  );
}

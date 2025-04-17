
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
    const now = new Date();
    
    if (now > expiryDate) {
      setShouldShow(false);
    }
    
    // Check if user has dismissed it before
    const bannerDismissed = localStorage.getItem('announcementBannerDismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);
  
  // Hide banner when dismissed
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('announcementBannerDismissed', 'true');
  };
  
  if (!shouldShow || !isVisible) {
    return null;
  }
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full transform transition-all duration-300">
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 bg-white rounded-full animate-pulse"></div>
              <p className="font-medium text-sm md:text-base">
                <span className="font-bold">STATE TO STATE BIKING STREAM SOON</span>
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span className="px-2 py-1 bg-green-500/20 rounded">
                {attendanceStats.confirmed} Going
              </span>
              <span className="px-2 py-1 bg-yellow-500/20 rounded">
                {attendanceStats.maybe} Maybe
              </span>
              <span className="px-2 py-1 bg-red-500/20 rounded">
                {attendanceStats.cantMake} Can't Make It
              </span>
            </div>
          </div>
          <button 
            onClick={dismissBanner} 
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Dismiss announcement"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

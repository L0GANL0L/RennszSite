
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);
  const [attendanceStats, setAttendanceStats] = useState({
    confirmed: 124,
    maybe: 56,
    cantMake: 23
  });
  
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

    // Load saved stats
    const savedStats = localStorage.getItem('attendanceStats');
    if (savedStats) {
      setAttendanceStats(JSON.parse(savedStats));
    }
    
    return () => clearInterval(interval);
  }, []);
  
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem('announcementBannerDismissed', 'true');
  };

  const updateAttendance = (type) => {
    const newStats = { ...attendanceStats };
    
    // Remove one from previous selection if exists
    const userPreviousChoice = localStorage.getItem('userAttendanceChoice');
    if (userPreviousChoice && userPreviousChoice !== type) {
      newStats[userPreviousChoice] = Math.max(0, newStats[userPreviousChoice] - 1);
    }
    
    // Add one to new selection
    if (userPreviousChoice !== type) {
      newStats[type] = newStats[type] + 1;
    } else {
      // If clicking same choice, remove selection
      newStats[type] = Math.max(0, newStats[type] - 1);
      localStorage.removeItem('userAttendanceChoice');
      setAttendanceStats(newStats);
      localStorage.setItem('attendanceStats', JSON.stringify(newStats));
      return;
    }
    
    localStorage.setItem('userAttendanceChoice', type);
    setAttendanceStats(newStats);
    localStorage.setItem('attendanceStats', JSON.stringify(newStats));
  };
  
  if (!shouldShow || !isVisible) {
    return null;
  }
  
  const userChoice = localStorage.getItem('userAttendanceChoice');
  
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 px-4 sm:px-0">
            <button 
              onClick={() => updateAttendance('confirmed')}
              className={`rounded-2xl p-6 transition-all ${
                userChoice === 'confirmed' 
                  ? 'bg-green-500/40 ring-2 ring-green-400' 
                  : 'bg-green-500/20 hover:bg-green-500/30'
              }`}
            >
              <div className="text-5xl font-bold text-green-400 mb-2">
                {attendanceStats.confirmed}
              </div>
              <div className="text-xl text-green-200">Going</div>
            </button>
            
            <button 
              onClick={() => updateAttendance('maybe')}
              className={`rounded-2xl p-6 transition-all ${
                userChoice === 'maybe' 
                  ? 'bg-yellow-500/40 ring-2 ring-yellow-400' 
                  : 'bg-yellow-500/20 hover:bg-yellow-500/30'
              }`}
            >
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                {attendanceStats.maybe}
              </div>
              <div className="text-xl text-yellow-200">Maybe</div>
            </button>
            
            <button 
              onClick={() => updateAttendance('cantMake')}
              className={`rounded-2xl p-6 transition-all ${
                userChoice === 'cantMake' 
                  ? 'bg-red-500/40 ring-2 ring-red-400' 
                  : 'bg-red-500/20 hover:bg-red-500/30'
              }`}
            >
              <div className="text-5xl font-bold text-red-400 mb-2">
                {attendanceStats.cantMake}
              </div>
              <div className="text-xl text-red-200">Can't Make It</div>
            </button>
          </div>
          
          <p className="text-xl text-gray-300 mt-8">
            Join us for an epic biking adventure across state lines!
            {userChoice && (
              <span className="block mt-2 text-sm text-gray-400">
                Click your choice again to remove your RSVP
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

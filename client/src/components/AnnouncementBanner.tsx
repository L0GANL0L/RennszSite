
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);
  const [attendanceStats, setAttendanceStats] = useState({
    confirmed: 0,
    maybe: 0,
    cantMake: 0
  });
  
  useEffect(() => {
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
    const userPreviousChoice = localStorage.getItem('userAttendanceChoice');
    
    if (userPreviousChoice && userPreviousChoice !== type) {
      newStats[userPreviousChoice] = Math.max(0, newStats[userPreviousChoice] - 1);
    }
    
    if (userPreviousChoice !== type) {
      newStats[type] = newStats[type] + 1;
    } else {
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
    <div className="fixed inset-0 z-[9999] bg-black backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E10]/90 to-[#18181B]/90">
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            <button 
              onClick={dismissBanner} 
              className="absolute top-6 right-6 text-white/60 hover:text-white/90 transition-colors focus:outline-none"
              aria-label="Dismiss announcement"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="space-y-12 text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 bg-white/5 rounded-full px-6 py-2">
                  <div className="h-3 w-3 bg-[#9146FF] rounded-full animate-pulse"></div>
                  <span className="text-white/90 font-medium">Live Event Stats</span>
                </div>
                <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] via-[#00FFFF] to-[#FF54C9]">
                  State to State Biking Stream
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <button 
                  onClick={() => updateAttendance('confirmed')}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                    userChoice === 'confirmed' 
                      ? 'bg-gradient-to-br from-green-500/20 to-green-500/5 ring-2 ring-green-400/30' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-green-400 mb-3">
                      {attendanceStats.confirmed}
                    </div>
                    <div className="text-xl text-green-200">Attending</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => updateAttendance('maybe')}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                    userChoice === 'maybe' 
                      ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 ring-2 ring-yellow-400/30' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-yellow-400 mb-3">
                      {attendanceStats.maybe}
                    </div>
                    <div className="text-xl text-yellow-200">Interested</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => updateAttendance('cantMake')}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                    userChoice === 'cantMake' 
                      ? 'bg-gradient-to-br from-red-500/20 to-red-500/5 ring-2 ring-red-400/30' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-red-400 mb-3">
                      {attendanceStats.cantMake}
                    </div>
                    <div className="text-xl text-red-200">Can't Make It</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
              
              {userChoice && (
                <p className="text-sm text-white/60">
                  Click your choice again to remove your RSVP
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

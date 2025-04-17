
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);
  const [attendanceStats, setAttendanceStats] = useState({
    confirmed: Math.floor(Math.random() * (150 - 100) + 100),
    maybe: Math.floor(Math.random() * (75 - 50) + 50),
    cantMake: Math.floor(Math.random() * (40 - 20) + 20)
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

    // Simulate real-time updates
    const updateInterval = setInterval(() => {
      setAttendanceStats(prev => ({
        confirmed: prev.confirmed + Math.floor(Math.random() * 3),
        maybe: prev.maybe + Math.floor(Math.random() * 2),
        cantMake: prev.cantMake + Math.floor(Math.random() * 1)
      }));
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(updateInterval);
    };
  }, []);
  
  const updateAttendance = (type: 'confirmed' | 'maybe' | 'cantMake') => {
    const newStats = { ...attendanceStats };
    const userPreviousChoice = localStorage.getItem('userAttendanceChoice');
    
    if (userPreviousChoice && userPreviousChoice !== type) {
      newStats[userPreviousChoice as keyof typeof newStats] = Math.max(0, newStats[userPreviousChoice as keyof typeof newStats] - 1);
    }
    
    if (userPreviousChoice !== type) {
      newStats[type] = newStats[type] + 1;
      localStorage.setItem('userAttendanceChoice', type);
    } else {
      newStats[type] = Math.max(0, newStats[type] - 1);
      localStorage.removeItem('userAttendanceChoice');
    }
    
    setAttendanceStats(newStats);
  };
  
  if (!shouldShow || !isVisible) {
    return null;
  }
  
  const userChoice = localStorage.getItem('userAttendanceChoice');
  
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
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <button 
                  onClick={() => updateAttendance('confirmed')}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 border ${
                    userChoice === 'confirmed' 
                      ? 'bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-400/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-green-400 mb-3 drop-shadow-lg">
                      {attendanceStats.confirmed.toLocaleString()}
                    </div>
                    <div className="text-xl text-green-200">Attending</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => updateAttendance('maybe')}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 border ${
                    userChoice === 'maybe' 
                      ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-yellow-400/30 shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-yellow-400 mb-3 drop-shadow-lg">
                      {attendanceStats.maybe.toLocaleString()}
                    </div>
                    <div className="text-xl text-yellow-200">Interested</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={() => updateAttendance('cantMake')}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 border ${
                    userChoice === 'cantMake' 
                      ? 'bg-gradient-to-br from-red-500/20 to-red-500/5 border-red-400/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-red-400 mb-3 drop-shadow-lg">
                      {attendanceStats.cantMake.toLocaleString()}
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

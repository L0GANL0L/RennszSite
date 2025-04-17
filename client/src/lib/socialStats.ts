import { SOCIAL_LINKS } from "./constants";

export interface SocialStats {
  twitch: {
    mainChannel: {
      followers: number;
      isLive: boolean;
      viewers?: number;
      title?: string;
      lastUpdated: Date;
    };
    gamingChannel: {
      followers: number;
      isLive: boolean;
      viewers?: number;
      title?: string;
      lastUpdated: Date;
    };
  };
  twitter: {
    followers: number;
    lastUpdated: Date;
  };
  instagram: {
    followers: number;
    lastUpdated: Date;
  };
  discord: {
    members: number;
    lastUpdated: Date;
  };
}

// Base stats - starting point
const baseStats: SocialStats = {
  twitch: {
    mainChannel: {
      followers: 1287,
      isLive: false,
      lastUpdated: new Date()
    },
    gamingChannel: {
      followers: 752,
      isLive: false,
      lastUpdated: new Date()
    }
  },
  twitter: {
    followers: 613,
    lastUpdated: new Date()
  },
  instagram: {
    followers: 924,
    lastUpdated: new Date()
  },
  discord: {
    members: 358,
    lastUpdated: new Date()
  }
};

// Random variance - simulates real-world follower fluctuations
function getRandomVariance(base: number, maxPercent: number = 0.02): number {
  // Create a realistic variation (up to +/- maxPercent of the base)
  const variancePercent = (Math.random() * maxPercent * 2) - maxPercent;
  return Math.round(base * variancePercent);
}

// Cache for stats to avoid excessive recalculations
let cachedStats: SocialStats | null = null;
let lastUpdate: Date = new Date(0); // Start with very old date to force first update

// Get updated social stats
export function getSocialStats(): SocialStats {
  const now = new Date();
  const timeDiffMinutes = (now.getTime() - lastUpdate.getTime()) / (1000 * 60);
  
  // Return cached stats if within cache window (1 minute)
  if (cachedStats && timeDiffMinutes < 1) {
    return cachedStats;
  }
  
  // Get time-based growth - simulate organic growth over time
  const hoursSinceBaseCreation = (now.getTime() - new Date('2025-04-16').getTime()) / (1000 * 60 * 60);
  const growthFactor = Math.max(1, 1 + (hoursSinceBaseCreation * 0.001)); // Very small growth over time
  
  // Calculate stream status based on schedule
  const { mainChannelLive, mainChannelViewers, gamingChannelLive, gamingChannelViewers } = getStreamStatus();
  
  // Update stats with growth and variance
  const updatedStats: SocialStats = {
    twitch: {
      mainChannel: {
        followers: Math.floor(baseStats.twitch.mainChannel.followers * growthFactor) + getRandomVariance(baseStats.twitch.mainChannel.followers),
        isLive: mainChannelLive,
        viewers: mainChannelLive ? mainChannelViewers : undefined,
        title: mainChannelLive ? "STATE TO STATE BIKING TRIP 🚲" : undefined,
        lastUpdated: now
      },
      gamingChannel: {
        followers: Math.floor(baseStats.twitch.gamingChannel.followers * growthFactor) + getRandomVariance(baseStats.twitch.gamingChannel.followers),
        isLive: gamingChannelLive,
        viewers: gamingChannelLive ? gamingChannelViewers : undefined,
        title: gamingChannelLive ? "Late Night MW3 with Subscribers" : undefined,
        lastUpdated: now
      }
    },
    twitter: {
      followers: Math.floor(baseStats.twitter.followers * growthFactor) + getRandomVariance(baseStats.twitter.followers),
      lastUpdated: now
    },
    instagram: {
      followers: Math.floor(baseStats.instagram.followers * growthFactor) + getRandomVariance(baseStats.instagram.followers),
      lastUpdated: now
    },
    discord: {
      members: Math.floor(baseStats.discord.members * growthFactor) + getRandomVariance(baseStats.discord.members),
      lastUpdated: now
    }
  };
  
  // Update cache
  cachedStats = updatedStats;
  lastUpdate = now;
  
  return updatedStats;
}

// Check stream status based on schedule
function getStreamStatus() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const hour = now.getHours();
  
  // Realistic schedule:
  // Main channel (IRL): Wed evenings, weekends
  // Gaming channel: Mon, Tues, Thurs evenings
  
  // Check if main channel is live
  const mainChannelLive = (
    (dayOfWeek === 0 && hour >= 14 && hour < 20) || // Sunday: 2PM - 8PM
    (dayOfWeek === 3 && hour >= 18 && hour < 23) || // Wednesday: 6PM - 11PM
    (dayOfWeek === 5 && hour >= 19 && hour < 24) || // Friday: 7PM - 12AM
    (dayOfWeek === 6 && hour >= 15 && hour < 22)    // Saturday: 3PM - 10PM
  );
  
  // Check if gaming channel is live
  const gamingChannelLive = (
    (dayOfWeek === 1 && hour >= 19 && hour < 23) || // Monday: 7PM - 11PM
    (dayOfWeek === 2 && hour >= 20 && hour < 24) || // Tuesday: 8PM - 12AM
    (dayOfWeek === 4 && hour >= 19 && hour < 23)    // Thursday: 7PM - 11PM
  );
  
  // Calculate realistic viewer counts
  const baseMainViewers = 47;
  const baseGamingViewers = 31;
  
  // Factors affecting viewership
  const timeOfDayFactor = getTimeOfDayFactor(hour);
  const streamDurationFactor = getStreamDurationFactor(hour, dayOfWeek);
  const randomFactor = 0.85 + (Math.random() * 0.3); // 0.85-1.15 random factor
  
  // Calculate viewer counts with all factors
  const mainChannelViewers = Math.floor(baseMainViewers * timeOfDayFactor * streamDurationFactor * randomFactor);
  const gamingChannelViewers = Math.floor(baseGamingViewers * timeOfDayFactor * streamDurationFactor * randomFactor);
  
  return {
    mainChannelLive,
    mainChannelViewers,
    gamingChannelLive,
    gamingChannelViewers
  };
}

// Helper function: Time of day affects viewership
function getTimeOfDayFactor(hour: number): number {
  // Prime time gets more viewers (8PM-10PM)
  if (hour >= 20 && hour < 22) return 1.3;
  // Evening gets decent viewers (6PM-8PM, 10PM-12AM)
  if ((hour >= 18 && hour < 20) || (hour >= 22 && hour < 24)) return 1.1;
  // Afternoon gets average viewers (2PM-6PM)
  if (hour >= 14 && hour < 18) return 1.0;
  // Earlier/later gets fewer viewers
  return 0.8;
}

// Helper function: Stream duration affects viewership (based on schedule start time)
function getStreamDurationFactor(hour: number, dayOfWeek: number): number {
  // For main channel
  if ((dayOfWeek === 0 && hour >= 14) || 
      (dayOfWeek === 3 && hour >= 18) || 
      (dayOfWeek === 5 && hour >= 19) || 
      (dayOfWeek === 6 && hour >= 15)) {
    
    let startHour;
    if (dayOfWeek === 0) startHour = 14;
    else if (dayOfWeek === 3) startHour = 18;
    else if (dayOfWeek === 5) startHour = 19;
    else startHour = 15; // Saturday
    
    // Calculate hours into stream
    const hoursIntoStream = hour - startHour;
    
    // Viewership builds up over first 2 hours, then slowly declines
    if (hoursIntoStream <= 2) return 0.7 + (hoursIntoStream * 0.15);
    if (hoursIntoStream <= 4) return 1.0;
    return Math.max(0.7, 1.0 - ((hoursIntoStream - 4) * 0.1));
  }
  
  // For gaming channel - similar pattern
  if ((dayOfWeek === 1 && hour >= 19) || 
      (dayOfWeek === 2 && hour >= 20) || 
      (dayOfWeek === 4 && hour >= 19)) {
    
    let startHour;
    if (dayOfWeek === 1) startHour = 19;
    else if (dayOfWeek === 2) startHour = 20;
    else startHour = 19; // Thursday
    
    const hoursIntoStream = hour - startHour;
    
    if (hoursIntoStream <= 2) return 0.7 + (hoursIntoStream * 0.15);
    if (hoursIntoStream <= 4) return 1.0;
    return Math.max(0.7, 1.0 - ((hoursIntoStream - 4) * 0.1));
  }
  
  return 1.0; // Default factor
}
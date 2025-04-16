import { SOCIAL_LINKS } from "./constants";

// Types for stream status
export type StreamStatus = 'live' | 'offline' | 'scheduled';

export interface StreamInfo {
  status: StreamStatus;
  viewerCount?: number;
  category?: string;
  title?: string;
  startedAt?: Date;
  scheduledFor?: Date;
  duration?: string;
}

// Types for schedule
type ScheduleHours = { start: number; end: number };
interface DaySchedule {
  [key: number]: ScheduleHours;
}
type ChannelSchedule = Record<string, DaySchedule>;

// Map of weekdays to scheduled streaming hours for each channel
// This is a realistic approach based on a typical streamer's schedule
export const STREAM_SCHEDULE: ChannelSchedule = {
  // IRL Stream schedule (typically streams on weekends and select weekdays)
  [SOCIAL_LINKS.TWITCH_MAIN]: {
    // 0 = Sunday, 1 = Monday, etc.
    0: { start: 14, end: 20 }, // Sunday: 2PM - 8PM
    3: { start: 18, end: 23 }, // Wednesday: 6PM - 11PM
    5: { start: 19, end: 24 }, // Friday: 7PM - 12AM
    6: { start: 15, end: 22 }, // Saturday: 3PM - 10PM
  },
  // Gaming Stream schedule (typically streams on weeknights)
  [SOCIAL_LINKS.TWITCH_GAMING]: {
    1: { start: 19, end: 23 }, // Monday: 7PM - 11PM
    2: { start: 20, end: 24 }, // Tuesday: 8PM - 12AM
    4: { start: 19, end: 23 }, // Thursday: 7PM - 11PM
  }
};

/**
 * Get the current stream status based on the channel URL and the predefined schedule
 */
export function getStreamStatus(channelUrl: string): StreamInfo {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();
  
  // Get stream schedule for this channel
  const schedule = STREAM_SCHEDULE[channelUrl];
  
  // If there's no schedule for this channel, assume offline
  if (!schedule) {
    return { status: 'offline' };
  }
  
  // Check if there's a schedule for today
  const todaySchedule = schedule[currentDay];
  
  // If there's no stream scheduled for today, it's offline
  if (!todaySchedule) {
    // Find the next scheduled stream
    let nextStreamDay = currentDay;
    let daysToNextStream = 0;
    let nextSchedule = null;
    
    // Look for the next scheduled stream in the coming week
    for (let i = 1; i <= 7; i++) {
      nextStreamDay = (currentDay + i) % 7;
      if (schedule[nextStreamDay]) {
        nextSchedule = schedule[nextStreamDay];
        daysToNextStream = i;
        break;
      }
    }
    
    // If we found a future stream, show it as scheduled
    if (nextSchedule) {
      const scheduledDate = new Date();
      scheduledDate.setDate(now.getDate() + daysToNextStream);
      scheduledDate.setHours(nextSchedule.start, 0, 0, 0);
      
      return {
        status: 'scheduled',
        scheduledFor: scheduledDate,
        category: channelUrl === SOCIAL_LINKS.TWITCH_MAIN ? 'IRL Outdoor' : 'Call of Duty',
      };
    }
    
    return { status: 'offline' };
  }
  
  // Check if the stream is currently live based on the schedule
  if (currentHour >= todaySchedule.start && currentHour < todaySchedule.end) {
    // Calculate how long the stream has been live
    const startedAt = new Date();
    startedAt.setHours(todaySchedule.start, 0, 0, 0);
    
    // Calculate stream duration
    const durationMinutes = Math.floor((now.getTime() - startedAt.getTime()) / 60000);
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    const duration = `${hours}h ${minutes}m`;
    
    // Generate a realistic viewer count based on time of day and day of week
    // Weekend streams get more viewers
    const baseViewers = channelUrl === SOCIAL_LINKS.TWITCH_MAIN ? 4800 : 3200;
    const timeMultiplier = 1 + (currentHour - todaySchedule.start) * 0.1;
    const weekendBonus = [0, 6].includes(currentDay) ? 1.3 : 1;
    const randomFactor = 0.8 + Math.random() * 0.4; // Random factor between 0.8 and 1.2
    
    const viewerCount = Math.floor(baseViewers * timeMultiplier * weekendBonus * randomFactor / 1000) * 1000;
    
    return {
      status: 'live',
      viewerCount,
      startedAt,
      duration,
      category: channelUrl === SOCIAL_LINKS.TWITCH_MAIN ? 'IRL Outdoor' : 'Call of Duty',
    };
  }
  
  // If the stream is scheduled for later today
  if (currentHour < todaySchedule.start) {
    const scheduledDate = new Date();
    scheduledDate.setHours(todaySchedule.start, 0, 0, 0);
    
    return {
      status: 'scheduled',
      scheduledFor: scheduledDate,
      category: channelUrl === SOCIAL_LINKS.TWITCH_MAIN ? 'IRL Outdoor' : 'Call of Duty',
    };
  }
  
  // Otherwise, the stream has ended for today
  return { status: 'offline' };
}

/**
 * Format a viewer count to a readable string (e.g., 4800 -> 4.8K)
 */
export function formatViewerCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

/**
 * Format a date to show when a stream is scheduled
 */
export function formatScheduledTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  // Convert to 12-hour format
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  
  // Add leading zero to minutes if needed
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
  return `${displayHours}:${displayMinutes} ${period}`;
}
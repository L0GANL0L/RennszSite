import React from 'react';
import { FaInstagram, FaTwitter, FaTwitch, FaDiscord } from 'react-icons/fa';
import { SiTiktok, SiMaildotru } from 'react-icons/si';
import { HeartIcon } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0e] border-t border-gray-800 py-12 mt-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#9146FF] to-[#FF54C9] inline-block text-transparent bg-clip-text">Rennsz</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Join me on this exciting journey through live streaming adventures, gaming sessions, and real-life experiences.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.TWITCH_MAIN} target="_blank" rel="noreferrer" aria-label="Twitch main channel" className="text-[#9146FF] hover:text-white transition-colors duration-300">
                <FaTwitch className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.TWITCH_GAMING} target="_blank" rel="noreferrer" aria-label="Twitch gaming channel" className="text-[#6441A4] hover:text-white transition-colors duration-300">
                <FaTwitch className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-[#1DA1F2] hover:text-white transition-colors duration-300">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#E1306C] hover:text-white transition-colors duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.DISCORD} target="_blank" rel="noreferrer" aria-label="Discord" className="text-[#5865F2] hover:text-white transition-colors duration-300">
                <FaDiscord className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noreferrer" aria-label="TikTok" className="text-white hover:text-gray-400 transition-colors duration-300">
                <SiTiktok className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4 text-lg">Streaming</h4>
            <ul className="space-y-2">
              <li>
                <a href={SOCIAL_LINKS.TWITCH_MAIN} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Main Channel</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.TWITCH_GAMING} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Gaming Channel</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.TWITCH_CLIPS} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Clips</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.TWITCH_SCHEDULE} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Schedule</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4 text-lg">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.DISCORD} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Discord</a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">TikTok</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="font-bold text-white mb-4 text-lg">Contact</h4>
            <p className="text-gray-400 mb-4">
              Want to collaborate or have questions? Reach out!
            </p>
            <div className="flex items-center space-x-3 text-gray-400">
              <SiMaildotru className="h-5 w-5" />
              <a href={`mailto:${SOCIAL_LINKS.EMAIL}`} className="hover:text-white transition-colors duration-300">
                {SOCIAL_LINKS.EMAIL}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rennsz. All rights reserved.
          </p>
          <div className="flex items-center justify-center text-gray-500 text-sm">
            <p className="flex items-center">
              Made with <HeartIcon className="h-3 w-3 mx-1 text-red-500" /> by{" "}
              <a 
                href="https://discord.com/users/sf.xen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-purple-400 hover:text-purple-300 transition-colors"
              >
                sf.xen
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
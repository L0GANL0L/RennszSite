import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStreams from "@/components/FeaturedStreams";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export default function Home() {
  // Update active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      document.querySelectorAll('section').forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionBottom = sectionTop + section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0E10] text-foreground flex flex-col">
      <AnnouncementBanner />
      <Header />
      <Hero />
      <FeaturedStreams />
      <SocialLinks />
      <Footer />

      <style>{`
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: hsl(180 100% 50%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .social-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .social-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(145, 70, 255, 0.3);
        }

        .gradient-border {
          position: relative;
          border-radius: 0.5rem;
          z-index: 0;
          overflow: hidden;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #9146FF, #00FFFF, #FF54C9, #9146FF);
          z-index: -1;
          animation: border-animation 4s linear infinite;
          border-radius: 0.6rem;
        }

        @keyframes border-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #18181B;
        }

        ::-webkit-scrollbar-thumb {
          background: #6441A4;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #9146FF;
        }

        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
        }

        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
        }

        h1, h2, h3 {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
}
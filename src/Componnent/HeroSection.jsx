// HeroSection.jsx
import React, { useState } from 'react';
import Whatsapp from "../assets/Whatsapp.png";
import NeuralGlow from '../Componnent/NeuralNoice';
import SocialSection from './SocialSection';

const HeroSection = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-[#030303]' : 'bg-white'} min-h-screen w-screen transition-colors duration-300 shrink overflow-x-hidden`}>
      
      {/* NAVBAR */}
      <header className='relative z-40 flex justify-between items-center px-8 md:px-16 lg:px-36 py-4 '>
        
        <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke={isDark ? "white" : "black"} strokeWidth="3">
            <path d="M75 20 H 25 V 50 H 75 V 80 H 25" strokeLinejoin="square"/>
            <line x1="20" y1="30" x2="35" y2="30" strokeWidth="1.5" />
            <line x1="65" y1="40" x2="85" y2="40" strokeWidth="1.5" />
            <line x1="15" y1="60" x2="35" y2="60" strokeWidth="1.5" />
            <line x1="65" y1="70" x2="80" y2="70" strokeWidth="1.5" />
            <path d="M77 22 H 27 V 52 H 77 V 82 H 27" strokeOpacity="0.4" strokeWidth="1"/>
          </g>
        </svg>

        <div className='flex items-center overflow-y-hidden '>
          {/* Sun Icon */}
          {isDark && (
            <svg 
              onClick={toggleTheme}
              className='cursor-pointer hover:scale-110 transition-transform'
              width="50" 
              height="50" 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="20" fill="white" />
              <g stroke="white" strokeWidth="6" strokeLinecap="round">
                <line x1="50" y1="10" x2="50" y2="22" />
                <line x1="50" y1="90" x2="50" y2="78" />
                <line x1="10" y1="50" x2="22" y2="50" />
                <line x1="90" y1="50" x2="78" y2="50" />
                <line x1="21.7" y1="21.7" x2="30.2" y2="30.2" />
                <line x1="78.3" y1="21.7" x2="69.8" y2="30.2" />
                <line x1="21.7" y1="78.3" x2="30.2" y2="69.8" />
                <line x1="78.3" y1="78.3" x2="69.8" y2="69.8" />
              </g>
            </svg>
          )}

          {/* Moon Icon */}
          {!isDark && (
            <svg 
              onClick={toggleTheme}
              className='cursor-pointer hover:scale-110 transition-transform rotate-45 mx-1'
              width="40" 
              height="40" 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M75 70 C 40 70, 30 40, 30 25 C 30 20, 31 15, 33 10 C 15 15, 5 35, 5 55 C 5 78, 22 95, 45 95 C 65 95, 82 82, 88 65 C 84 68, 80 70, 75 70 Z" 
                fill="#F4F4F4" 
                stroke="#111" 
                strokeWidth="2"
              />
            </svg>
          )}
<img 
    className='w-20 h-20 cursor-pointer hover:scale-110 transition-transform ml-6 p-1 ' 
    src={Whatsapp} 
    alt="WhatsApp" 
/>
        </div>
      </header>

      {/* HERO SECTION WITH NEURAL GLOW */}
      <section className=' w-full min-h-[600px] overflow-hidden'>
        {/* Neural Glow Background - z-0 (behind everything) */}
        {isDark && (
          <div className='absolute inset-0 z-0'>
            <NeuralGlow />
          </div>
        )}
        
        {/* Content on top - z-10 (in front of neural glow) */}
        <div className='relative z-40'>
          <SocialSection isDark={isDark} />
        </div>
      </section>
     
    </div>
  );
};

export default HeroSection;
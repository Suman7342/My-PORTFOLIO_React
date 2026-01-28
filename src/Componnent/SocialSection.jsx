import React, { useState, useEffect, useRef } from 'react'
import Linkdin from "../assets/linkdin.png"
import Instagram from "../assets/Instagram.png"
import Email from "../assets/Email.png"
import github from "../assets/github.png"
import AboutMe from './AboutMe'
import { gsap } from "gsap";

//  SplitText 
const SocialSection = ({ isDark }) => {
  const [showAbout, setShowAbout] = useState(false);
  const nameRef = useRef(null);


  useEffect(() => {
    if (nameRef.current) {
     const text = nameRef.current.textContent;
     nameRef.current.innerHTML = '';
      
      
      // Split into individual characters
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; 
        span.style.display = 'inline-block';
        nameRef.current.appendChild(span);
      });
     

      
      const chars = nameRef.current.querySelectorAll('span');
      
      gsap.from(chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.04
      });
    }
  }, []);

  const animateText = () => {
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('span');
      gsap.from(chars, {
        y: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.04
      });
    }
  };


  return (
    <div className='relative z-10'>
        <div className='flex items-center justify-between mt-20'>
            
            <div className='ml-36 relative z-10'>
                <h1 
                onClick={animateText}
                  ref={nameRef}
                  
                  className={`text-[90px] font-bold ${isDark ? 'text-white' : 'text-black'} cursor-pointer overflow-y-hidden`}
                >
                    Suman Kunti
                </h1>
                
                <h6 
                  className={`text-[20px] ${isDark ? 'text-white' : 'text-black'}`}
                >
                    Frontend Developer
                </h6>

                <div className='relative z-20 flex items-center gap-2 mt-6 p-2'>
                    <button type='button' onClick={() => setShowAbout(true)} className='relative z-20 bg-gradient-to-r from-indigo-500 to-teal-400 w-32 rounded-md font-bold h-10 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-indigo-600 hover:to-teal-500 cursor-pointer overflow-hidden'>
                        About Me
                    </button>
                    <svg 
                        className={`relative z-20 w-6 h-6 animate-bounce -rotate-90 flex-shrink-0 ${isDark ? 'text-white' : 'text-black'}`}
                        fill="currentColor" 
                        viewBox="0 0 16 16" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.78 6.22a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 01-1.06 0L2.22 7.28a.75.75 0 011.06-1.06L8 10.94l4.72-4.72a.75.75 0 011.06 0z"/>
                    </svg>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 mr-14 relative z-10 pr-4 flex-wrap max-md:hidden lg:block'>
                <a href="https://www.linkedin.com/in/suman-kunti-33956a310/" target="_blank" rel="noopener noreferrer" className='block p-2'>
                    <img className={`w-16 h-16 hover:scale-110 transition-transform ${isDark ? 'brightness-0 invert' : ''}`} src={Linkdin} alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='block p-2'>
                    <img className={`w-16 h-16 hover:scale-110 transition-transform ${isDark ? 'brightness-0 invert' : ''}`} src={Instagram} alt="Instagram" />
                </a>
                <a href="https://github.com/Suman7342" target="_blank" rel="noopener noreferrer" className='block p-2'>
                    <img className={`w-18 h-18 hover:scale-110 transition-transform ${isDark ? ' invert' : ''}`} src={github} alt="GitHub" />
                </a>
                <a href="mailto:sumankunti8@email.com" className='block p-2 flex items-center justify-center'>
                    <img className={`w-10 h-10 hover:scale-110 transition-transform ${isDark ? 'brightness-0 invert' : ''}`} src={Email} alt="Email" />
                </a>
            </div>
        </div>
        
        <div className='relative z-20 flex flex-col items-center justify-center mt-20 gap-3 p-2'>
           <button 
              onClick={() => {
                document.getElementById('latest-works')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className='bg-gradient-to-r from-indigo-500 to-teal-400 w-32 rounded-md font-bold h-10 text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:from-indigo-600 hover:to-teal-500 cursor-pointer overflow-hidden'
            >
              Latest Work
            </button>
            
            <svg 
                className={`w-6 h-6 animate-bounce ${isDark ? 'text-white' : 'text-black'}`}
                fill="currentColor" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13.78 6.22a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 01-1.06 0L2.22 7.28a.75.75 0 011.06-1.06L8 10.94l4.72-4.72a.75.75 0 011.06 0z"/>
            </svg>
        </div>

        {/* About Me Popup */}
        {showAbout && (
          <div
            className="fixed inset-0 z-999 bg-black/70 flex items-center justify-center"
            onClick={() => setShowAbout(false)}
          >
            <div
              className="bg-black text-white rounded-xl relative 
                         w-[90%] 
                         max-h-[90vh] overflow-hidden p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setShowAbout(false)}
                className="absolute top-8 right-6 z-50
                           bg-black text-white rounded-full
                           w-15 h-15 flex text-3xl items-center justify-center
                           cursor-pointer hover:scale-110 transition hover:rotate-90"
              >
                ✕
              </button>

              <AboutMe />
            </div>
          </div>
        )}
    </div>
  )
}

export default SocialSection
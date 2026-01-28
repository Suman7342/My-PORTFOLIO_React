import React from 'react'
import Contact from '../assets/contact-me.svg'
import chat from "../assets/chat.svg"
import at from "../assets/at-symbol.svg"
import user from "../assets/user.svg"


const Connect = () => {
  return (
    <div className='min-h-screen bg-white py-10 md:py-20 px-4 md:px-8 lg:px-16'>
      {/* Title */}
      <div className='flex items-center justify-center mb-10 md:mb-16'>
        <div className='w-[200px] md:w-[250px] h-16 flex items-center justify-center border-2 border-[#1788AE] text-[#1788AE] rounded-sm text-xl md:text-2xl font-medium'>
          Let's Connect
        </div>
      </div>
       
      {/* Content Container */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12'>
          
          {/* Image - Hidden on small screens, visible on large */}
          <div className='hidden lg:block lg:w-1/2'>
            <img className='w-full max-w-175' src={Contact} alt="Contact illustration" />
          </div>
          
          {/* Form */}
          <div className='w-full lg:w-1/2 max-w-2xl'>
            <form className='flex flex-col space-y-4'>
              
              {/* Name Field */}
              <label className='flex gap-2 items-center text-gray-700 font-medium'>
                <img className='w-5 h-5' src={user} alt="user icon" />
                Name
              </label>
              <input 
                className='w-full h-12 md:h-[50px] border-2 border-gray-300 rounded px-4 focus:outline-none focus:border-[#1788AE] transition-colors' 
                type='text'
                placeholder='Enter your name'
              />
              
              {/* Email Field */}
              <label className='flex gap-2 items-center text-gray-700 font-medium'>
                <img className='w-5 h-5' src={at} alt="email icon" />
                Email
              </label>
              <input 
                className='w-full h-12 md:h-[50px] border-2 border-gray-300 rounded px-4 focus:outline-none focus:border-[#1788AE] transition-colors' 
                type='email'
                placeholder='Enter your email'
              />
              
              {/* Message Field */}
              <label className='flex gap-2 items-center text-gray-700 font-medium'>
                <img className='w-5 h-5' src={chat} alt="message icon" />
                Message
              </label>
              <textarea 
                className='w-full h-40 md:h-[200px] border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#1788AE] transition-colors resize-none' 
                placeholder='Enter your message'
                rows="6"
              />
              
              {/* Submit Button */}
              <button 
                type='submit'
                className='w-full h-12 border-2 border-[#1788AE] bg-[#1788AE] text-white font-medium cursor-pointer rounded hover:bg-[#09aae0] hover:border-[#09aae0] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]'
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Image - Visible on small screens, hidden on large */}
          {/* <div className='lg:hidden w-full max-w-md'>
            <img className='w-full' src={Contact} alt="Contact illustration" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Connect;
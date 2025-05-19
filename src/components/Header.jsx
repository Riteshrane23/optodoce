import React from 'react';
import image25 from '../assets/image_25.png';
import image26 from '../assets/image_26.svg';

export const Header = () => {
  return (
    <header className="relative w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 bg-black">
      <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
        <button className="text-white focus:outline-none" aria-label="Menu">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        className="
          flex items-center gap-2 h-auto max-w-full
          w-[120px] sm:w-[220px] md:w-[280px]
          sm:absolute sm:left-1/2 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2
          justify-center
          flex-grow
        "
      >
        <img src={image25} alt="Logo Icon" className="w-6 sm:w-10 md:w-12 h-auto object-contain flex-shrink-0" />
        <img src={image26} alt="Logo Text" className="w-[80px] sm:w-[160px] md:w-[200px] h-auto object-contain" />
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <button
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black text-xs sm:text-sm md:text-base font-medium font-[Karla] whitespace-nowrap"
          type="button"
        >
          Log in
        </button>
        <button
          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-white text-xs sm:text-sm md:text-base font-medium font-[Karla] whitespace-nowrap"
          type="button"
        >
          Sign up
        </button>
      </div>
    </header>
  );
};

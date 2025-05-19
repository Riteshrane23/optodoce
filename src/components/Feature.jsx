// src/components/Page1.jsx
import React from "react";
import img7 from "../assets/image_29.png";
import img8 from "../assets/image_8.svg";
import img9 from "../assets/image_9.svg";
import img10 from "../assets/image_10.svg";
import img27 from "../assets/image_27.svg";

export const Page1 = () => {
  return (
    <div className="w-full bg-white">
      <section className="max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center py-8 sm:py-12 md:py-16 bg-white px-4 sm:px-6">
        {/* Left: Main Image */}
        <div className="flex-shrink-0">
          <img
            src={img7}
            alt="Main AI"
            className="rounded-3xl w-[280px] h-[300px] sm:w-[340px] sm:h-[360px] md:w-[400px] md:h-[420px] object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="md:ml-8 lg:ml-16 mt-8 md:mt-0 flex-1 max-w-xl">
          {/* Badge */}
          <div className="mb-2">
            <span className="px-4 sm:px-6 md:px-[24px] py-2 sm:py-3 md:py-[15px] rounded-full bg-[#6A41FB33] text-gray-600 text-[12px] sm:text-[14px] font-[500] leading-[1] font-[Karla] inline-flex items-center justify-center">
              Introduce optadoce AI
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-black text-[32px] sm:text-[40px] md:text-[50px] leading-[1.2] sm:leading-[1.4] md:leading-[72px] font-['Plus_Jakarta_Sans'] font-semibold mb-4 max-w-[650px]">
            Unlocking the Power of <br />
            <span className="bg-gradient-to-r from-[#6A41FB] via-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
              AI for a Smarter
            </span>{' '}
            Future
          </h1>

          {/* Thumbnails */}
          <div className="flex gap-3 sm:gap-4 mb-6">
            <img src={img8} alt="AI 2" className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 rounded-xl object-cover" />
            <img src={img9} alt="AI 3" className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 rounded-xl object-cover" />
            <img src={img10} alt="AI 4" className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 rounded-xl object-cover" />
          </div>

          {/* Button and Description */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="flex items-center gap-4">
              <button className="w-[100px] sm:w-[116px] h-[40px] sm:h-[47px] px-4 sm:px-[22px] py-2 sm:py-[12px] rounded-[100px] bg-gradient-to-r from-[#6A41FB] to-[#F49957] flex items-center justify-center gap-[10px]">
                <span className="w-[60px] sm:w-[72px] h-[20px] sm:h-[23px] font-[500] text-[16px] sm:text-[20px] leading-[20px] tracking-[0%] text-white font-[Karla]">
                  Try Now
                </span>
              </button>
              <img src={img27} alt="AI 4" className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl object-cover" />
            </div>

            <span className="text-black-400 opacity-60 font-[Karla] font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4] sm:leading-[24px]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page1;
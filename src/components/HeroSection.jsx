import image1 from "../assets/image_1.svg";
import image2 from "../assets/image_2.svg";
import '../index.css'

export const HeroSection = () => {
  return (
    <section className="relative text-center text-white max-w-5xl mx-auto px-6">
      <div className="gradient-border-wrapper absolute left-0 top-1/2 transform -translate-y-1/2  w-30 h-30 md:w-40 md:h-40 rounded-full p-[2px]">
        <img
          src={image1}
          alt="AI Concept 1"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="absolute right-0 w-28 h-28 md:w-40 md:h-40 rounded-full p-[2px] transform -translate-y-1/2 mt-60">
        <img
          src={image2}
          alt="AI Concept 2"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-40 h-56 md:w-56 md:h-72"
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-black py-10 px-4">
        <h1
          className="text-[56px] md:text-[70px] leading-[70px] font-semibold text-center font-['Plus_Jakarta_Sans'] text-white"
        >
          Best AI Content Platform <br />
          <span className="bg-gradient-to-r from-[#6A41FB] via-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
            Image Generate
          </span>
        </h1>

        <p className="mt-6 w-full max-w-[540px] text-[16px] md:text-[18px] font-normal text-center font-['Karla'] text-gray-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>


      <div className="w-full max-w-[704px] h-[65px] bg-[#2E2E2E] rounded-full flex items-center px-6 space-x-4 mx-auto">
        <input
          type="text"
          placeholder="An Astronaut riding a horse on mars, hd"
          className="flex-grow bg-transparent text-white placeholder:text-gray-400 placeholder:font-['Karla'] placeholder:text-[16px] focus:outline-none"
        />
        <button
          className="w-[176px] h-[50px] px-[24px] py-[15px] rounded-[100px] text-white font-medium bg-gradient-to-r from-[#6A41FB] to-[#F49957] flex items-center justify-center gap-[10px] hover:opacity-90 transition-all"
        >
          Generate Now
        </button>

      </div>


      <div className="w-full flex justify-center pt-[20px]">
        <div className="w-full max-w-[487px] h-[30px] flex items-center gap-[10px]">
          <span className="w-[127px] h-[25px] text-[18px] leading-[20px] font-medium font-['Plus_Jakarta_Sans'] text-center text-gray-400">
            Popular tags:
          </span>

          {["Creative", "Sport", "Animation", "Fantasy"].map((tag) => (
            <span
              key={tag}
              className="h-[22px] px-3 py-[2px] rounded-full bg-[#3B3B3B] text-white text-[14px] leading-[16px] font-medium font-['Karla'] text-center cursor-pointer hover:bg-[#4A4A4A] transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

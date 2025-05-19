import image2 from "../assets/image_11.svg";
import image3 from "../assets/image_12.svg";
import image4 from "../assets/image_13.svg";
import image5 from "../assets/image_14.svg";
import image from "../assets/image_15.svg";

export const Gallery = () => {
  return (
    <div className="flex flex-col max-w-7xl items-center gap-6 sm:gap-8 md:gap-10 relative mx-auto px-4 py-12 sm:py-16 md:py-22">
      <div className="flex flex-col w-full max-w-[973px] items-center justify-center gap-6 sm:gap-[30px] relative flex-[0_0_auto]">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3 sm:py-[15px] relative flex-[0_0_auto] bg-[#6a41fb33] rounded-[100px] overflow-hidden">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-xs sm:text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Recently Created
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1100px] h-auto bg-transparent font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[40px] md:text-[50px] leading-[1.2] sm:leading-[1.3] md:leading-[72px] tracking-[0%] text-center text-white mx-auto">
          Create anything with <span className="bg-gradient-to-r from-[#6A41FB] via-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
            Optpdoce AI
          </span>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 relative flex-[0_0_auto]">
          <div className="[font-family:'Karla-Medium',Helvetica] font-medium underline relative w-fit mt-[-1.00px] text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            All
          </div>

          <div className="opacity-40 [font-family:'Karla-Regular',Helvetica] font-normal relative w-fit mt-[-1.00px] text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            |
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Regular',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Cartoon
          </div>

          <div className="opacity-40 [font-family:'Karla-Regular',Helvetica] font-normal relative w-fit mt-[-1.00px] text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            |
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Regular',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Realistic
          </div>

          <div className="opacity-40 [font-family:'Karla-Regular',Helvetica] font-normal relative w-fit mt-[-1.00px] text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            |
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Regular',Helvetica] font-normal text-white text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            3D
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="w-full md:w-[312px] h-[300px] sm:h-[400px] md:h-[562px] relative object-cover"
            alt="Image"
            src={image2}
          />

          <div className="flex flex-col w-full md:w-[648px] items-start gap-4 sm:gap-6 md:gap-[30px] relative">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="w-full sm:w-[312px] h-[200px] sm:h-[266px] relative object-cover"
                alt="Image"
                src={image3}
              />

              <img
                className="w-full sm:w-[312px] h-[200px] sm:h-[266px] relative object-cover"
                alt="Image"
                src={image4}
              />
            </div>

            <img
              className="self-stretch w-full h-[200px] sm:h-[266px] relative object-cover"
              alt="Image"
              src={image5}
            />
          </div>

          <img
            className="w-full md:w-[250px] h-[300px] sm:h-[400px] md:h-[562px] relative object-cover"
            alt="Image"
            src={image}
          />
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3 sm:py-[15px] relative flex-[0_0_auto] rounded-[100px] [background:linear-gradient(90deg,rgba(106,65,251,1)_0%,rgba(244,153,87,1)_100%)]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-base sm:text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Go to our AI gallery
          </p>
        </div>
      </div>
    </div>
  );
};

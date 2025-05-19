import island from '../assets/image_3.svg'
import cat from '../assets/image_4.svg';
import dolphin from '../assets/image_5.svg';
import girl from '../assets/image_6.svg';

export const ImageGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="flex flex-col col-span-1 md:col-span-2">
        <img
          src={island}
          alt="Island"
          className="rounded-lg w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
        <div className="bg-transparent mt-6 sm:mt-8 md:mt-12 px-2">
          <p className="text-white text-base sm:text-lg md:text-[20px] mb-2" style={{ fontFamily: 'Karla', fontWeight: 400, lineHeight: '1.3', letterSpacing: '0%' }}>
            We are passionate about empowering creatives with the tools they need to{' '}
            <span className="bg-gradient-to-r from-[#6A41FB] via-[#6A41FB] to-[#F49957] bg-clip-text text-transparent">
              bring their vision
            </span> to life that's why we've developed
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-6 sm:mt-8">
            <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#6A41FB] to-[#F49957] flex items-center justify-center gap-2">
              <span className="text-white text-base sm:text-lg font-medium leading-tight font-[Karla]">
                Get Started
              </span>
            </button>

            <div className="flex flex-col items-start">
              <span className="text-white font-[Karla] text-[16px] sm:text-[18px] md:text-[20px] leading-[1]">
                100k+ <span className="text-gray-400 font-normal">Happy Customer</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
        <img
          src={cat}
          alt="Cat"
          className="rounded-lg w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover"
        />
        <img
          src={dolphin}
          alt="Dolphin"
          className="rounded-lg w-full h-[150px] sm:h-[200px] md:h-[250px] object-cover"
        />
        <img
          src={girl}
          alt="Girl"
          className="rounded-lg col-span-2 w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
      <p className="text-xs sm:text-sm max-w-md text-gray-300 text-center md:text-left">
        We're passionate about empowering creatives with the tools they need to{" "}
        <span className="text-purple-500 underline cursor-pointer">
          bring their vision
        </span>{" "}
        to life that's why we've developed
      </p>
      <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-orange-400 rounded-full px-4 sm:px-6 py-2 text-white hover:opacity-90 transition text-sm">
        Get Started
      </button>
      <div className="text-gray-300 text-center md:text-left md:ml-6 text-xs sm:text-sm">
        <strong>100k+</strong> Happy Customer
      </div>
    </footer>
  );
};

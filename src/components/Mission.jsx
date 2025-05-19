import image16 from '../assets/image_16.png';

const Mission = () => {
  return (
    <div className="bg-[#FAFAFA] py-20 pl-[15%] pr-6 md:pr-20 lg:pr-32 ">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="font-['Nunito_Sans'] font-bold text-[36px] leading-[100%] tracking-[0%] text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="font-['Nunito_Sans'] font-normal text-[18px] leading-[100%] tracking-[0%] text-[#878787]">
            We believe in serving quality services which can meet customers’ requirements.
            Our vision is to bring out the best in people, technology and processes with
            top-notch quality. We build customer experience. Our mission is to place a
            consistent innovation to bring about an ultimate crest of triumph as our service.
          </p>
        </div>

        <div className="flex justify-center">
          <img src={image16} alt="Mission Illustration" className="w-full max-w-md" />
        </div>
      </div>
    
        <div
        className="relative bottom-0 pl-[50%] pt-[7%] -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0"
        style={{ marginLeft: "10%" }}
      >
        <span
          className="text-[120px] md:text-[200px] font-extrabold"
          style={{
            color: "#f3f3f3",
            opacity: 1,
            letterSpacing: "0.10em",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          MISSION
        </span>
      </div>
    </div>
  );
};

export default Mission;

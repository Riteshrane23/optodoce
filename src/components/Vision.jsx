const steps = [
  {
    number: "01",
    title: "LET'S HAVE A CUP OF COFFEE:",
    desc: "Initiate a meeting to understand the requirements and goals of the client.",
    position: "right",
  },
  {
    number: "02",
    title: "PLAN FOR THE SUCCESS:",
    desc: "We analyze, design, develop and test the whole project with eagle vision.",
    position: "left",
  },
  {
    number: "03",
    title: "QUALITY SOLUTIONS:",
    desc: "For us, the quality solution is what brings clients success & exposure together.",
    position: "right",
  },
  {
    number: "04",
    title: "YOUR DREAMOUR GOAL:",
    desc: "We discover & innovate your dream with a look & feel, experience.",
    position: "left",
  },
];

const Vision = () => {
  return (
    <div className=" bg-[#FAFAFA] relative  py-16 px-4 md:px-8 lg:px-16 overflow-hidden min-h-screen">
      <div
        className="absolute top-0 left-1/2 w-full flex justify-center pointer-events-none select-none z-0"
        style={{ transform: "translateX(-50%)", height: "180px" }}
      >
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[118px] font-extrabold"
          style={{
            color: "#F1F2F2",
            opacity: 1,
            letterSpacing: "0.05em",
            lineHeight: 1,
            textAlign: "center",
            zIndex: 0,
          }}
        >
          WHAT WE DO
        </span>
      </div>

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <h2 className="font-bold text-3xl md:text-4xl text-black mb-4 relative z-10">
          What do we do to remembered for?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-10 mb-8 text-sm md:text-base">
          To connect smart actions and execute it with laser-like focus is our
          success mantra. Exploring client's business for online exposure is an
          ultimately worthy goal for us. We want to be a voice of client's
          success.
        </p>
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium text-sm">
          GET IN TOUCH
        </button>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col gap-0 items-center">
        <div
          className="absolute left-1/2 z-0"
          style={{
            top: "calc(48px + 0.75rem)",
            bottom: "calc(48px + 0.75rem)",
            width: "2px",
            background: "#e5e7eb",
            transform: "translateX(-50%)",
          }}
        />

        <div className="w-full flex flex-col gap-0 relative z-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex w-full items-center relative min-h-[170px]"
            >
              {step.position === "left" && (
                <span
                  className="block text-[110px] font-extrabold absolute top-1/2 -translate-y-1/2 right-[8%] select-none pointer-events-none step-outline-number"
                  style={{
                    opacity: 1,
                    zIndex: 1,
                    lineHeight: 1,
                    fontFamily: "inherit",
                    letterSpacing: "0.05em",
                    right: "calc(8% + 14rem)",
                    paddingLeft: 0,

                  }}
                >
                  {step.number}
                </span>
              )}
              {step.position === "right" && (
                <span
                  className="block text-[110px] font-extrabold absolute top-1/2 -translate-y-1/2 left-[8%] select-none pointer-events-none step-outline-number"
                  style={{
                    opacity: 1,
                    zIndex: 1,
                    lineHeight: 1,
                    fontFamily: "inherit",
                    letterSpacing: "0.05em",
                    left: "calc(8% + 14rem)",
                    paddingRight: 0,
                  }}
                >
                  {step.number}
                </span>
              )}

              {step.position === "left" && (
                <>
                  <div className="w-1/2 flex flex-col items-end pr-12 relative">
                    <div className="relative z-10 text-right max-w-xs">
                      <h3 className="font-bold text-lg text-black mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-center relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full border-[4px] border-[#707070] bg-white">
                        <div
                          className="w-6 h-6 rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #EF8431 0%, #E71A86 100%)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step.position === "right" && (
                <>
                  <div className="w-1/2 flex justify-end items-center relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full border-[4px] border-[#707070] bg-white">
                        <div
                          className="w-6 h-6 rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #EF8431 0%, #E71A86 100%)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 flex flex-col items-start pl-12 relative">
                    <div className="relative z-10 text-left max-w-xs">
                      <h3 className="font-bold text-lg text-black mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none z-0"
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
          VISION
        </span>
      </div>

      <style>{`
        .step-outline-number {
          color: transparent;
          -webkit-text-stroke: 2px #e5e7eb;
          text-stroke: 2px #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default Vision;

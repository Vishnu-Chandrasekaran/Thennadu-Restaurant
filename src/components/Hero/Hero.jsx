import React from "react";
import HeroPng from '../../assets/noBGLogo.png'

const Hero = () => {
  return (
    <div>
      <div className="min-h-[550px] sm:min-h-[600px] bg-primaryMaroon flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
              <h1
                className="text-6xl lg:text-[5rem] font-bold bg-clip-text text-transparent
              bg-gradient-to-b from-orange-400 to-white font-cursive
              "
              >
                Thennadu{" "}
                <span className="text-2xl font-sans text-orange">
                  Restaurant
                </span>
              </h1>
              <p className="text-md text-white font-sans">
                We serve the authentic South Indian flavours which resembles the
                home food with excess love and hygiene. 
              </p>
              <div>
                <button className="primary-btn">Visit us</button>
              </div>
            </div>

            {/* Hero Image section  */}
            <div className="bg-white w-fit rounded-full"><img src={HeroPng} className="shadow-1" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import HeroPng from '../../assets/noBGLogo.png'

const Hero = () => {
  return (
    <div>
      <div className="min-h-[550px] sm:min-h-[600px] bg-primaryMaroon flex justify-center items-center font-mont">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
              <h1 data-aos="zoom-out" data-aos-delay="200"
                className="text-6xl lg:text-[5rem] font-bold bg-clip-text text-transparent
              bg-gradient-to-b from-orange-400 to-white font-cursive
              "
              >
                Thennadu{" "}
                <span className="text-2xl font-mont text-orange">
                  Restaurant
                </span>
              </h1>
              <p data-aos="fade" data-aos-delay="400" data-aos-offset="0" className="text-md text-white font-mont">
                We serve the authentic South Indian flavours which resembles the
                home food with excess love and hygiene. 
              </p>
              <div 
              data-aos="fade-up" data-aos-delay="200">
                <a href="https://maps.app.goo.gl/LsrYa5Vq2WQcxAv76" className="primary-btn" >Visit us</a>
              </div>
            </div>

            {/* Hero Image section  */}
            <div data-aos="zoom-in" data-aos-duration="500" className="bg-white w-fit rounded-full m-auto"><img src={HeroPng} className="shadow-1" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

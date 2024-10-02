import React from "react";
import HeroPng from '../../assets/noBGLogo.png'
import { FaEnvelope,FaFacebook,FaGlobe, FaYoutube } from "react-icons/fa";
import {  FaInstagram, FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
      <div id="contact" className="min-h-[550px] sm:min-h-[600px] bg-primaryMaroon flex flex-col items-center justify-center font-mont">
        <h1 className="text-5xl text-white font-cursive">Thennadu Restaurant</h1>
        <h3 className="text-1xl text-white font- mt-4">BARWA CITY, MESAIMEER CITY</h3>
        <div className="flex items-center mt-2"><FaEnvelope className=" text-orange-500 w-10" /><h3 className="text-1xl text-white font-mont"><span></span>thennadurestaurantqr@gmail.com</h3></div>
        <div className="flex items-center mt-2"><FaGlobe className=" text-orange-500 w-10" /><h3 className="text-1xl text-white font-mont">www.thennadurestaurant.com</h3></div>
        
        <div className="flex items-center mt-2"><FaPhoneVolume className=" text-orange-500 w-10" /><h3 className="text-1xl text-white font-mont">71201786</h3></div>
        <div className="flex items-center mt-4"><FaInstagram className=" text-orange-500 w-10 h-5" /> <FaFacebook className=" text-orange-500 w-10 h-5" /> <FaYoutube className=" text-orange-500 w-10 h-5" /></div>
        
      </div>
  );
};

export default Contact;

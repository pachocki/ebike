import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Contact from "../components/Contact"

const Footer = () => {
  return (
    <div className="flex bg-cyan-700 dark:bg-orange-700 py-5 text-white gap-10 tablet:px-5  mobile:gap-2 mobile:px-2 overflow-hidden">
      <div className="w-1/3 tablet:w-1/2 flex flex-col justify-between pl-5 tablet:pl-0">
        <span className="text-6xl mobile:text-5xl small-mobile:text-4xl ">✦ E-BIKE</span>
        <div>
          <h3 className="text-4xl screen:text-3xl small-mobile:text-2xl">Adress:</h3>
          <p className="text-3xl screen:text-2xl small-mobile:text-xl">Kverneland</p>
          <p className="text-3xl screen:text-2xl small-mobile:text-xl">Kvernelandsvegen 72B</p>
          <p className="text-3xl screen:text-2xl small-mobile:text-xl">4355</p>
        </div>
        <div className="flex gap-5 text-2xl mobile:text-lg">
          <BsFacebook className="hover:opacity-50 cursor-pointer"/>
          <BsInstagram className=" hover:opacity-50 cursor-pointer"/>
          <BsLinkedin className=" hover:opacity-50 cursor-pointer"/>
          <BsTwitter className=" hover:opacity-50  cursor-pointer"/>
        </div>
      </div>
      <div className="w-1/3 tablet:w-1/2 ">
        <Contact/>
      </div>
      <div className="w-1/3 flex flex-col gap-8 pt-10 tablet:hidden">
        <h3 className="text-5xl screen:text-3xl">We're here to help you</h3>
        <h3 className="text-5xl screen:text-3xl">Custom Care from</h3>
        <p className="text-3xl screen:text-2xl">Mon-Fri:10:00-17:00</p>
        <p className="text-3xl screen:text-2xl hover:opacity-50 cursor-pointer">
          Email:support@ebike.com
        </p>
        <p className="text-3xl">Mobile:99854312</p>
      </div>
    </div>
  );
};

export default Footer;

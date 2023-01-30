import React, { useState } from "react";
import {Link} from "react-router-dom"

import Image1 from "../assets/about-team.jpg";
import Image2 from "../assets/about1.jpg";
import Image3 from "../assets/about-3.jpg";
import Image5 from "../assets/thunder.png";
import Image6 from "../assets/hearth.png";
import Image7 from "../assets/smile.png";
import Image8 from "../assets/fire.png";
import Image9 from "../assets/flower.png";


const About = () => {
  const [image, setImage] = useState(require("../assets/women-bike.jpg"));
  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }

  return (
    <div className="w-full h-full dark:bg-zinc-900 pb-20">
      <h2 className="text-[8rem] text-center pt-20 tablet:text-8xl mobile:text-6xl small-mobile:text-5xl mobile:pt-10">
        With love to the bikes
      </h2>
      <div className="flex justify-center h-full w-full py-20 tablet:flex-col mobile:pt-10 mobile:pb-10">
        <div className="w-1/2 h-full flex flex-col gap-5 screen:gap-10 screen:px-2  mobile:gap-5 relative px-5 tablet:w-full">
          <img
            src={Image1}
            className="big-screen:w-[500px] screen:w-full rounded self-end z-20 shadow-xl tablet:hidden"
            alt="about us"
          />
          <img
            src={Image3}
            className="big-screen:w-[400px] screen:w-full rounded self-start  shadow-xl "
            alt="about us"
          />
          <img
            src={Image2}
            className="big-screen:w-[500px] screen:w-full rounded  self-end shadow-xl"
            alt="about us"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2 big-screen:px-5 screen:px-2 h-full pt-40 laptop:pt-0 tablet:w-full tablet:items-center tablet:justify-center">
          <h2 className="big-screen:text-8xl screen:text-7xl tablet:pt-5 mobile:text-6xl small-mobile:text-5xl">
            About Us
          </h2>
          <p className="big-screen:text-3xl pb-10 screen:text-2xl mobile:text-xl  small-mobile:pb-5 small-mobile:text-base">
            We are happy that you are here at E-Bike Shop. Our primary objective
            is to help more and more people engage in bicycles given that
            they’re functional, eco friendly, awesome to ride, and offer great
            adventure! From full-suspension bikes to long lasting city commuters
            to carbon road bicycles, these are all the things that we love.There
            are so many people who message us everyday and inquire what our shop
            is all about, and therefore we believe an introduction is needed.
            We’re a customer-friendly, service oriented bike shop expert in
            dealing with all kinds of your biking needs. We simply do our very
            best to ensure that our shop is a comfortable zone for people
            especially those who are new to cycling to learn more, and
            additionally for experienced cyclists to update their skills and get
            the most up-to-date bike parts.
          </p>
         <Link to ="/about"> <button className="button button--pan ">
            <span className="mobile:text-xl">Read More</span>
          </button></Link>
        </div>
      </div>
      <div className="flex justify-between items-center relative w-full h-full pl-5 pt-20 screen:pt-5 overflow-hidden screen:pl-0 screen:gap-5  tablet:items-center ">
        <div className="w-2/5 screen:w-1/2 ">
          <img
            src={image}
            className="w-[700px] h-[800px] rounded-xl  shadow-xl transition-all object-cover mobile:rounded-none"
            alt="women-bike"
          />
          <div className="absolute bottom-5 left-40 laptop:left-10 text-8xl screen:left-[-12rem] small-mobile:left-[-14.5rem] screen:bottom-0 tablet:text-7xl mobile:text-5xl">
            <p
              className="text-gray-300 dark:hover:text-orange-600 hover:text-cyan-500 font-bold pl-60 opacity-80 w-max cursor-pointer "
              onMouseEnter={handleMouseEnter(
                require("../assets/women-bike.jpg")
              )}
            >
              e-bike
            </p>

            <p
              className=" text-gray-300 dark:hover:text-orange-600 font-bold pl-80  opacity-80 hover:text-cyan-500 w-max cursor-pointer "
              onMouseEnter={handleMouseEnter(
                require("../assets/hero-white1.webp")
              )}
            >
              city bike
            </p>

            <p
              className=" text-gray-300 dark:hover:text-orange-600 font-bold pl-60 opacity-80  hover:text-cyan-500 w-max cursor-pointer "
              onMouseEnter={handleMouseEnter(
                require("../assets/hero-black1.jpg")
              )}
            >
              mountain bike
            </p>
          </div>
        </div>
        <div className="w-2/4 relative h-full screen:w-1/2">
          <img
            src={Image5}
            className="w-[100px] absolute bottom-80 left-40 laptop:bottom-80 laptop:left-0 screen:left-20 screen:bottom-[12rem] tablet:hidden"
            alt="thunder"
          />
          <img
            src={Image6}
            className="w-[100px] absolute bottom-[-5rem] right-0 laptop:bottom-[-7rem] screen:right-10 tablet:hidden"
            alt="hearth"
          />
          <img
            src={Image7}
            className="w-[100px] absolute bottom-[-12rem] left-60 laptop:bottom-[-10rem] screen:left-20 tablet:hidden"
            alt="smile"
          />
          <img
            src={Image8}
            className="w-[100px] absolute bottom-60 left-[38rem] laptop:left-80 laptop:bottom-80 screen:bottom-[11rem] tablet:hidden"
            alt="fire"
          />
          <img
            src={Image9}
            className="w-[100px] absolute top-20 left-[-8rem] tablet:hidden"
            alt="flower"
          />
          <h2 className="text-6xl font-semibold laptop:text-5xl screen:text-4xl tablet:text-3xl small-mobile:text-2xl">
            "Express yourself and emphasize
            <br />
            your personality with your bike.
            <br />
            Our team will help you choose <br />
            the best bike for your needs."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;

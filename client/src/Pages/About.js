import React from "react";
import HeroSubPages from "../components/HeroSubPages";
import Image from "../assets/about-travel5.webp";
import Image1 from "../assets/about-team2.webp";
import Image2 from "../assets/about-travel3.jpg";
import Image3 from "../assets/about-team.webp";
import ScrollTop from "../components/ScrollTop"

const About = () => {
  return (
    <div className="py-20">
      <HeroSubPages bg="bg-image-eight" title="Passion for work" />
      <div className="flex justify-center py-20 gap-10 screen:gap-5 tablet:px-2 mobile:gap-1 mobile:px-2 mobile:py-10 mobile:w-full mobile:flex-col-reverse">
        <div className="w-1/3 tablet:w-full">
          <img src={Image} alt="view" />
          <p className="text-3xl pt-10 laptop:text-2xl  tablet:pt-5 tablet:text-xl">
            Here, we care about each of our clients – average bicycle commuter
            or leisure rider, it doesn’t matter what type of bicycle they want
            to ride, or in what way they want to ride it. As such, we supply
            bicycles and accessories which make riding a bike functional and
            truly enjoyable, it doesn’t matter what you ride or where it will
            lead you. Check out our Bike Tour page to learn a little more about
            a few of the locations we’re currently having.
          </p>
          <img className="pt-10 tablet:py-2 " src={Image2} alt="view" />
          <p className="text-3xl pt-10 laptop:text-2xl tablet:text-xl tablet:pt-5">
            Most importantly, we love travel, we love bicycles and we love the
            job we do. We would like to see this city continue to keep flourish
            and develop as being the next great cycling city.
          </p>
        </div>
        <div className=" w-1/2 tablet:w-full">
          <h2 className="text-8xl laptop:text-6xl tablet:text-5xl">About Us</h2>
          <p className="text-3xl laptop:text-2xl tablet:text-xl tablet:pt-5">
            We are happy that you are here at E-Bike Shop. Our primary
            objective is to help more and more people engage in bicycles given
            that they’re functional, eco friendly, awesome to ride, and offer
            great adventure! From full-suspension bikes to long lasting city
            commuters to carbon road bicycles, these are all the things that we
            love. There are so many people who message us everyday and inquire
            what our shop is all about, and therefore we believe an introduction
            is needed. We’re a customer-friendly, service oriented bike shop
            expert in dealing with all kinds of your biking needs. We simply do
            our very best to ensure that our shop is a comfortable zone for
            people especially those who are new to cycling to learn more, and
            additionally for experienced cyclists to update their skills and get
            the most up-to-date bike parts.
          </p>
          <img className="py-10 tablet:py-2" src={Image1} alt="view" />
          <p className="text-3xl laptop:text-2xl tablet:text-xl tablet:pt-5">
            At Life Cycle Bike Shop we sell what we should ride. In case it’s
            not sufficiently good for us, then it isn’t sufficiently good for
            you as well! It is our commitment to provide you with the best value
            for your purchase and will be offering the best quality parts and
            equipment designed for your style of riding. Our company specializes
            on customized hand-built wheels, customized bike builds, bike
            modifications, bike fitting, retrofitting, and many more. Drop by to
            our shop and discover!
          </p>
          <img className="py-10 tablet:py-2" src={Image3} alt="view" />
        </div>
      </div>
      <div className="w-full h-[700px] tablet:h-[50vh] bg-fixed bg-cover bg-top flex justify-center items-center bg-image-nine pb-10">
        <p className="text-8xl font-bold text-white tablet:text-7xl mobile:text-5xl small-mobile:text-4xl ">
          Forever Forward
        </p>
      </div>
      <ScrollTop/>
    </div>
  );
};

export default About;

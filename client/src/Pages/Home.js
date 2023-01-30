import React from "react";
import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection"
import ProductSlider from "../components/ProductSlider"
import MarqueeAnimation from "../components/MarqueeAnimation"
import AboutSection from "../components/AboutSection";
import ScrollTop from "../components/ScrollTop"



const Home = () => {
  return (
    <div>
      <Hero />
      <MissionSection/>
      <ProductSlider/>
      <MarqueeAnimation/>
      <AboutSection />
      <ScrollTop/>
    </div>
  );
};

export default Home;

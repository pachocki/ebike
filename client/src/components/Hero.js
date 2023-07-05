import React from "react";
import { BsArrowDown } from "react-icons/bs";
import ReactCurvedText from "react-curved-text";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="dark:bg-zinc-900 relative  flex flex-col w-screen h-full tablet:dark:bg-image-one tablet:bg-[center_top_5rem] tablet:bg-image-two tablet:bg-cover  tablet:bg-black/80 tablet:overlay-bg">
      <div className="flex w-screen h-screen items-center justify-between  ">
        <div className="big-screen:w-1/3 flex flex-col laptop:w-1/2 h-full  pt-20  leading-none tablet:w-full z-20">
          <h1 className="big-screen:px-5 big-screen:pt-20 big-screen:text-[8rem] laptop:text-[7rem] tablet:text-[7.5rem] mobile:text-[6rem] pb-10 tablet:w-full tablet:text-white  mobile:pt-8 mobile:text-center mobile:opacity-80 small-mobile:text-7xl">
            Discover
            <br /> New Quality
            <br /> of Bike's
          </h1>
          <div className="flex items-center bg-white  justify-center bottom-10 border-y-2 w-full dark:bg-zinc-900 gap-5 z-10 big-screen:text-3xl laptop:text-3xl screen:text-2xl tablet:text-4xl mobile:text-xl  ">
            <h2>LEADING THE REVOLUTION</h2>
            <h2 className="border-l-2 pl-2">
              <span className="dark:text-orange-500 text-cyan-500 ">⤬</span>{" "}
              SHOP NOW{" "}
              <span className="dark:text-orange-500 text-cyan-500">⤬</span>
            </h2>
          </div>

          <div className="flex justify-center relative  items-center w-full tablet:fill-white dark:fill-white tablet:hidden">
            <div className="mobile:pt-2">
              <ReactCurvedText
                width={510}
                height={300}
                cx={270}
                cy={130}
                rx={75}
                ry={75}
                startOffset={0}
                reversed={true}
                text="20 Years experience ✱ Quality Service ✱ Top Prices ✱"
                textProps={{ style: { fontSize: 20 } }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
              />
            </div>

            <BsArrowDown className="text-8xl font-bold fill-cyan-500 dark:fill-[#ff6600] flex items-center w-full absolute top-20 left-5 justify-center mobile:mt-2" />
          </div>
        </div>
        <div className="big-screen:w-2/3 laptop:w-full h-screen bg-image-two dark:bg-image-one  bg-cover  top-0  bg-no-repeat object-fit z-20 bg-[center_top_5rem] tablet:hidden "></div>
      </div>
      <Marquee
        className="bg-white py-8 text-black dark:text-white dark:bg-zinc-900 mobile:py-4 border-y-2 z-20"
        speed={25}
        gradient={false}
      >
        <h1 className="big-screen:text-4xl tablet:text-2xl mobile:text-2xl px-2">
          BIG FALL SALE UP TO 50% ✱ NEW BIKE COLLECTION FOR 2023 ✱ WINTER BIKE
          CLOTHES COLLECTION 2023 ✱ E-BIKE SALE ✱ BIG FALL SALE UP TO 50% ✱ NEW
          BIKE COLLECTION FOR 2023 ✱ WINTER BIKE CLOTHES COLLECTION 2023 ✱
          E-BIKE SALE ✱
        </h1>
      </Marquee>
    </div>
  );
};

export default Hero;

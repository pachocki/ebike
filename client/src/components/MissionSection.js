import React from "react";
import Image from "../assets/mission1.jpg";
import Image2 from "../assets/mission2.jpg";
import Image3 from "../assets/mission3.jpg";

const MissionSection = () => {
  return (
    <div className="relative">
      <span className="big-screen:text-[8rem] flex justify-center pt-10 overflow-hidden tablet:text-8xl mobile:text-6xl small-mobile:text-5xl small-mobile:pb-10 dark:small-mobile:pb-0">
        Feel free on your bike
      </span>

      <div className=" relative h-[110vh] flex justify-center items-center small-mobile:px-2 ">
        <img
          className="z-20 absolute w-[200px] top-10 left-40   shadow-xl laptop:top-20 screen:left-20  mobile:w-[160px] mobile:top-[4rem] mobile:left-0 small-mobile:hidden "
          src={Image}
          alt="women on bike"
        />
        <img
          className="absolute w-[440px] z-20  bottom-0 left-20  shadow-xl laptop:w-[320px] screen:left-0 tablet:w-[280px] tablet:left-[-5rem] tablet:bottom-20 mobile:bottom-0 mobile:w-[200px] mobile:left-0 dark:small-mobile:hidden  small-mobile:w-full small-mobile:h-full small-mobile:object-cover"
          src={Image2}
          alt="couple on bike"
        />
        <img
          className="big-screen:z-20 mobile:z-0 absolute w-[50%] top-20 object-cover shadow-xl laptop:w-2/5 h-full screen:object-cover screen:w-[400px] tablet:w-[40%] tablet:h-[90vh] mobile:w-2/3 right-1 dark:small-mobile:w-full mobile:right-0 small-mobile:h-[100vh]"
          src={Image3}
          alt="mtb biker"
        />
        <div className="z-40 w-1/3 tablet:w-1/2 mobile:w-2/3 relative  dark:bg-black/80   border dark:border-none  shadow-xl px-2 py-5 laptop:w-2/5 bg-white/80 backdrop-blur-xl small-mobile:w-full small-mobile:mb-5 small-mobile:self-end ">
          <p className="text-4xl text-gray-400 screen:text-3xl tablet:text-2xl mobile:text-lg ">
            It is very important for our team to select the best bikes on the
            market. So that the value corresponds to the quality of the product.
            That is why we test most of our products ourselves before putting
            them to the store. Why? Because we care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;

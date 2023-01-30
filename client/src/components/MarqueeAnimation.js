import React from 'react'
import {marqueData} from "../marqueData"
import Marquee from "react-fast-marquee";

const MarqueeAnimation = () => {
  return (
    <div className="w-screen ">
         <Marquee
          className=" bg-gray-200 dark:bg-zinc-800  text-black dark:text-white dark:bg-zinc-900 mobile:py-4 overflow-hidden z-20"
          speed={25}
          gradient={false}
        >
             <ul className="w-full flex relative  justify-between items-center h-[200px] ">
        {marqueData.map((elem, i) => (
          <li  className="flex items-center justify-center cursor-pointer px-20 " key={i} >
            <span className="opacity-60 dark:opacity-20 big-screen:text-[10rem] laptop:text-8xl screen:text-7xl tablet:text-6xl mobile:text-6xl text-white">{elem.name}</span>
            <div className='img-cont flex  hover:opacity-100'>
              <img src={elem.img} alt={elem.name} />
            </div>
          </li>
        ))}

        </ul>
        
        </Marquee>
       
      
    </div>
  )
}

export default MarqueeAnimation

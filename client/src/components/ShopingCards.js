import React from "react";
import { Link } from "react-router-dom";


const ShopingCards = (props) => {
  return (
    <div>
      <div className="flex big-screen:justify-around w-full pb-10 gap-5 screen:gap-2 mobile:flex-col mobile:justify-center mobile:pb-10 items-center mobile:bg-gray-100 dark:bg-zinc-900">
        <div className="relative screen:w-full pb-10 mobile:pb-5">
        <img className="rounded-xl object-cover w-full h-full border shadow-xl" src={props.image} alt={props.model} />
        <p className="absolute text-xl p-1 rounded-l-lg right-0 top-3 text-white bg-zinc-900  screen:hidden ">{props.category}</p>

        </div>
        <div className="flex flex-col justify-center w-1/3 screen:w-2/3 mobile:w-full mobile:px-3 ">
      <h1 className="text-6xl laptop:text-5xl screen:text-4xl small-mobile:text-3xl">{props.model}</h1>
      <div className="flex items-center mt-2.5 mb-5 mobile:mb-1">
      <ol>
    <li><span className="rating dark:text-gray-300">{props.stars}</span> </li>
</ol>
            <span className="bg-blue-100  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-400  ml-3">4.6</span>
            <span className="opacity-80">{props.reviews} Reviews</span>

        </div>
      <p>
        {props.desc}
      </p>
      <div className="flex  items-center pt-5  ">
        <Link to={props.link}>
      <button className="button button--pan ">
            <span className="mobile:text-xl">Shop Now</span>
          </button>
          </Link>
          <span className="text-2xl text-green-500 px-10 screen:px-3 small-mobile:text-xl mobile:pl-10">Price:{props.price}</span>
          <span className="text-2xl dark:opacity-50 text-red-500 line-through mobile:text-lg">Price:{props.save}</span>
          </div>
          
    </div>
    </div>
   
    </div>
  );
};

export default ShopingCards;



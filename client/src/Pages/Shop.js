import React from "react";
import HeroSubPages from "../components/HeroSubPages";
import ShopingCards from "../components/ShopingCards";
import ScrollTop from "../components/ScrollTop";
import { useGlobalContext } from "../context/context";
import Loader from "../components/Loader";

const Shop = (props) => {
  const { products } = useGlobalContext();

  return (
    <div>
      <HeroSubPages
        bg="bg-image-four dark:bg-image-five  mobile:dark:bg-center mobile:bg-[center_right_65%] "
        title="Find your new Bike"
      />
      <h1 className="text-8xl text-center pt-20 screen:text-7xl tablet:text-6xl mobile:text-5xl small-mobile:text-4xl">
        A bike style for everyone
      </h1>
      <div className="flex flex-col pt-20 px-2 screen:px-1 screen:pt-10 tablet:px-0 ">
        {products.length ? (
          products.map((product) => (
            <ShopingCards
              key={product._id}
              image={product.img}
              category={product.categories}
              model={product.title}
              stars={product.stars}
              reviews={product.reviews}
              price={product.price + " Nok"}
              save={`${product.price + 2500} `}
              desc={product.desc}
              link={`/shop/${product._id}`}
            />
          ))
        ) : (
          <div className="text-center py-20">
            <Loader />
          </div>
        )}
      </div>
      <ScrollTop />
    </div>
  );
};

export default Shop;

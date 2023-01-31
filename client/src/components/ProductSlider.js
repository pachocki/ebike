import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";

import { Navigation } from "swiper";
import { useGlobalContext } from "../context/context";
import Loader from "./Loader";

const ProductSlider = () => {
  const { products } = useGlobalContext();
  return (
    <div className="relative bg-gray-200 pt-40 pb-20 tablet:pb-0 dark:bg-zinc-800 dark:text-black ">
      <div className="pt-20 mobile:py-0">
        {products.length ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            loopFillGroupWithBlank={true}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide className="w-full flex flex-col  " key={product._id}>
                <Link to={`/shop/${product._id}`}>
                  {" "}
                  <Card
                    image={product.img}
                    model={product.title}
                    price={product.price + " Nok"}
                    layout="hidden"
                  />
                </Link>
              </SwiperSlide>
            ))}
            ;
          </Swiper>
        ) : (
          <div className="text-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;

import React , {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import Image from "../assets/bike-box-gray.png";
import Image1 from "../assets/bike-box-black.png";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import ScrollTop from "../components/ScrollTop"
import { publicRequest } from "../Hooks/requestMethods";
import {useLocation} from "react-router-dom"
import {addProduct} from "../redux/cartRedux"
import {useDispatch} from "react-redux"

const SingleProduct = () => {
  const location = useLocation()
  const [singleProduct,setSingleProduct] = useState({})
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleQuantity=(type)=>{
    if(type==="dec"){
      quantity >1 && setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
  }


  const id = location.pathname.split("/")[2];

  useEffect(()=>{
    const getProduct = async ()=>{
      try{
        const res = await publicRequest.get("/products/find/" + id)
        setSingleProduct(res.data);
      }catch{}
      
    }
    getProduct(singleProduct)
  },[id])


  const handleClick = ()=>{
    dispatch(

      addProduct({...singleProduct,quantity})
    )

  }
  return (
    <div className="pt-20 ">
      <div className="flex  tablet:flex-col tablet:items-center border-b-2">
        <div className="w-1/2 tablet:w-full">
          <img
            className="w-full object-fit object-center border-r-2  dark:border-none big-screen:h-full mobile:h-[50vh] tablet:object-cover "
            src={singleProduct.img}
            alt="lala"
          />
        </div>
        <div className="w-1/2 tablet:w-full ">
          <div className="flex justify-between small-mobile:flex-col small-mobile:items-center small-mobile:text-2xl text-6xl laptop:text-5xl laptop:px-2 screen:text-4xl mobile:text-3xl tablet:justify-around mobile:justify-between mobile:px-2  small-mobile:font-bold border-b-2 px-10 py-10 mobile:py-3">
            <span>{singleProduct.title}</span>
            <span className="dark:text-orange-700 text-cyan-500">
              Price:{singleProduct.price} NOK
            </span>
          </div>
          <div className=" py-11 screen:py-5">
            <div className="px-10 screen:px-2 tablet:px-10  mobile:px-2">
              <p className="text-2xl opacity-80 laptop:text-xl mobile:text-lg">
               {singleProduct.desc}
              </p>
              <p className="pt-1 pb-5 text-2xl opacity-80 laptop:text-xl">
                The range from a battery charge will vary depending on different
                conditions. Factors affecting range are the combined weight of
                rider and cargo; wind resistance; tire pressure and tire tread.
              </p>
              <div className="flex tablet:justify-center gap-40 mobile:gap-20">
               <Link to ="/ordersummary"><button className="button button--pan " onClick={handleClick}>
                  <span className="mobile:text-xl">Buy Now</span>
                </button></Link> 
                <div className="flex gap-5 text-4xl">
                    <AiFillMinusCircle className="cursor-pointer hover:opacity-50" onClick={()=>handleQuantity("dec")}/>
                    <span>{quantity}</span>
                    <AiFillPlusCircle className="cursor-pointer hover:opacity-50" onClick={()=>handleQuantity("inc")}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20 text-8xl border-b-2">
        <p className="tablet:text-7xl mobile:text-5xl mobile:font-bold small-mobile:text-4xl">
          All in the details
        </p>
      </div>
      <div className="flex px-5 border-b-2 mobile:flex-col mobile:justify-center">
        <div className="border-r-2 w-1/2 pt-10 mobile:w-full mobile:border-none mobile:text-center ">
          <span className="text-8xl laptop:text-7xl  screen:text-6xl tablet:text-5xl mobile:text-5xl small-mobile:text-4xl">
            Motor and Battery
          </span>
        </div>
        <div className="w-1/2 text-5xl mobile:w-full">
          <ul className="px-10 tablet:px-2 flex flex-col py-10 gap-10 mobile:px-0 ">
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl ">
              <span>Motor:</span>
              <span>Ananda / 250W HUB-motor</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Top Speed:</span>
              <span>25 km/t</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Battery:</span>
              <span>36V 15Ah - 540Wh</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Optimum range:</span>
              <span>Over 65km</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Expected range:</span>
              <span>50 km</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Torque:</span>
              <span>40Nm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex px-5 border-b-2 tablet:border-none mb-20 mobile:flex-col tablet:mb-0">
        <div className="border-r-2 w-1/2 pt-10 mobile:border-none mobile:w-full mobile:text-center ">
          <span className="text-8xl laptop:text-7xl  screen:text-6xl tablet:text-5xl mobile:text-5xl small-mobile:text-4xl ">
            Features
          </span>
        </div>
        <div className="w-1/2  mobile:w-full text-5xl">
          <ul className="px-10 tablet:px-2 flex flex-col py-10 gap-10 mobile:px-0 ">
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Frame:</span>
              <span>M (165-175 cm)</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Fork:</span>
              <span>25 km/t</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Control:</span>
              <span>U type 22.2mm</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Seat post:</span>
              <span>Ø27.2mm - 300mm</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Wheel size:</span>
              <span>700C / 28"</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Tire:</span>
              <span>Wanda CTB 700x40C</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl small-mobile:text-xl">
              <span>Brakes:</span>
              <span>Logan M220 - hydraulic disc brakes</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Gear shifter:</span>
              <span>Shimano 7-speed</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Cassette:</span>
              <span>Shimano MF-TZ500-7</span>
            </li>
            <li className="flex justify-between laptop:text-4xl screen:text-3xl tablet:text-2xl mobile:text-2xl">
              <span>Material:</span>
              <span>Aluminum alloy</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[700px] tablet:h-[50vh] bg-fixed bg-cover bg-top flex justify-center items-center bg-image-three">
        <p className="text-8xl font-bold text-white tablet:text-7xl mobile:hidden ">
          Always with smile .
        </p>
        <p className="mobile:block text-7xl text-white text-center  pb-20 big-screen:hidden">
          Always <br /> with <br /> smile.
        </p>
      </div>
      <div className="py-10 flex flex-col items-center text-white bg-gray-200 dark:bg-zinc-800">
        <div className="relative flex justify-center">
          <img className="h-[55vh] dark:hidden" src={Image} alt="delivery" />
          <img
            className="h-[55vh] hidden dark:block "
            src={Image1}
            alt="delivery"
          />
     
          <div className="absolute bottom-20 left-[6.7rem]   screen:left-[7rem]    mobile:left-[5rem] mobile:bottom-20 small-mobile:left-12">
            <span className="text-6xl laptop:text-5xl  small-mobile:text-3xl">
              Delivery
            </span>
            <p className="text-2xl w-4/5   mobile:text-xl small-mobile:text-lg">
              Wherever you are in Europe (with the exception for the United
              Kingdom), we deliver your bike to your doorstep within 3-10
              business days. Currently free shipping on all orders above 1000,-
            </p>
          </div>
        </div>
      </div>
      <ScrollTop/>
    </div>
  );
};

export default SingleProduct;

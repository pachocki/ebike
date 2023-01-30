import React , {useState} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {FaBars , FaShoppingCart} from "react-icons/fa"
import ToggleTheme from './ToggleTheme'
import MobileMenu from './MobileMenu'
import {useGlobalContext} from "../context/context"
import {BiUserCircle} from "react-icons/bi"


const Header = () => {
  const {  openModal , openRegistation} = useGlobalContext()
    const [active,setActive] = useState(false)
    const user = useSelector((state) => state.user.currentUser);
    const logout = ()=>{
      localStorage.clear();
      window.location.href="/";
    }

    const showMenu = () => {
        setActive(!active)
    }
const quantity = useSelector(state=>state.cart.quantity)
  return (
   <div>
        <nav className="flex justify-between w-screen h-[80px] items-center shadow-lg px-5 py-5 fixed inset-0 dark:bg-zinc-900 dark:border-b dark:border-gray-500 z-50 bg-white mobile:px-1">
            <div>
                <Link to="/"><h1 className="text-5xl screen:text-4xl tablet:text-4xl">✦ E-BIKE</h1></Link>
            </div>
            <ul className="text-3xl tablet:text-2xl flex justify-around big-screen:gap-40 laptop:gap-10 tablet:hidden">
            <li>
            <Link className="hover:opacity-50" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to="/Shop">Shop</Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to="/About">About</Link>
          </li>
          <li>
            <Link className="hover:opacity-50" to="/Contact">Contact</Link>
          </li>
           
         </ul>
         <div className="flex gap-6 mobile:gap-3 items-center big-screen:pr-2  ">
          <div>
            <Link to ="/ordersummary">
  <strong className="relative inline-flex items-center  px-2 py-1.5 text-xs font-medium">
    <span className={` ${quantity === 0 ? "hidden" : "absolute -top-2 -right-2 h-5 w-5 rounded-full dark:bg-orange-600 bg-cyan-600 text-white flex justify-center items-center items"}`}><span>{quantity}</span></span>
    <FaShoppingCart className="big-screen:w-[25px] big-screen:h-[25px] cursor-pointer"/>
  </strong></Link>
</div>
          <ToggleTheme />
          
          <BiUserCircle  className={` ${user ? "dark:fill-white fill-black text-3xl cursor-pointer tablet:hidden" :"hidden"}`} />
          <button onClick={logout} className={` ${user ? "dark:fill-white fill-black text-3xl cursor-pointer tablet:hidden" :"hidden"}`} >
          <span className="text-2xl ">Log Out</span>
        </button>
          <FaBars className="w-[30px] h-[30px] tablet:block big-screen:hidden" onClick={showMenu}/>
          
          
          <button className={` ${user ? "hidden" : "hover:opacity-50  py-1 px-2 bg-black text-white  tablet:hidden"}`}  onClick={()=>openModal()}>
          <span className="text-2xl">Login</span>
        </button>
        <button className={` ${user ? "hidden" : "hover:opacity-50  py-1 px-2 bg-black text-white  tablet:hidden"}`}  onClick={()=>openRegistation()}>
          <span className="text-2xl">Register</span>
        </button>
          </div>
        </nav>
        <MobileMenu showMenu={showMenu} active={active}/>
        </div>
  )
}

export default Header

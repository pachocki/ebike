import React from 'react'
import {Link} from "react-router-dom"
import {FaTimes} from "react-icons/fa"
import {useGlobalContext} from "../context/context"
import {useSelector} from "react-redux"
import {BiUserCircle} from "react-icons/bi"

const MobileMenu = ({showMenu,active}) => {
  const {  openModal , openRegistation} = useGlobalContext()
  const user = useSelector((state) => state.user.currentUser);
  const logout = ()=>{
    localStorage.clear();
    window.location.href="/";
  }
  return (
    <ul className={
        active
          ? "flex-col flex items-center fixed h-[100vh] text-3xl  inset-y-0 right-0  w-3/4 text-white font-semibold uppercase bg-black/20 backdrop-blur-xl gap-8 justify-center p-8  transition-all duration:700 opacity-1 z-50 "
          : "hidden"
      }
      onClick={()=>showMenu(prevState=>!prevState)}>
        <FaTimes
        onClick={showMenu}
        className="cursor-pointer absolute top-6 right-[3.7rem] w-[30px] h-[30px] mobile:right-3 mobile:r-1"
        />
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
        <li className="flex flex-col justify-center items-center">
          <BiUserCircle className={` ${user ? "tablet:fill-white fill-black text-5xl cursor-pointer " :"hidden"}`}/>
          <button onClick={logout} className={` ${user ? "dark:fill-white fill-black text-3xl cursor-pointer" :"hidden"}`} >
          <span className="text-3xl ">Log Out</span>
        </button>
        <button className={` ${user ? "hidden" : "hover:opacity-50  py-1 px-2 bg-black text-white  "}`} onClick={()=>openModal()}>
          <span className="text-2xl">Login</span>
        </button>
        </li>
        <li>
        <button className={` ${user ? "hidden" : "hover:opacity-50  py-1 px-2 bg-black text-white  "}`} onClick={()=>openRegistation()}>
          <span className="text-2xl">Register</span>
        </button>
        </li>
      


        
    </ul>
  )
}

export default MobileMenu

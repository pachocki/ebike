import React, { useRef, useState } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useOnClickOutside from "../Hooks/useOnClickOutside";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { openModal, closeModal, setIsOpen } = useGlobalContext();
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
   
  };
  const { isFetching, error } = useSelector((state) => state.user);

  return (
    <div className="flex justify-center items-center bg-black/80 backdrop-blur-xl fixed z-50 inset-0 overflow-hidden">
      <div onClick={openModal} />
      <div className="flex flex-col items-center min-h-screen pt-40">
        <div
          className="w-full px-6 py-4 mt-6 overflow-hidden z-60 relative top-20 bg-white shadow-md sm:max-w-md sm:rounded-lg "
          ref={ref}
        >
          <div className="absolute right-5">
            <FaTimes
              className="text-2xl cursor-pointer text-black hover:50"
              onClick={closeModal}
            />
          </div>
          <h3 className="text-4xl font-bold text-black pb-10">✦ E-BIKE</h3>
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700  undefined"
              >
                Username
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="username"
                  className="pl-2 block w-full mt-1 border-gray-300 dark:text-black bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium  text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="pl-2 block dark:text-black w-full mt-1 border-gray-300 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4 text-black underline underline-offset-1">
              <Link to="">Dont have a account?</Link>
              <button
                type="submit"
                className="hover:opacity-50 inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                onClick={handleClick}
                disabled={isFetching}
              >
                Log in
              </button>
            </div>
            {error && <p className="text-red-500">Something went wrong...</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

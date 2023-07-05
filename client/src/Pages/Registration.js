import React , {useRef , useState}  from 'react'
import useOnClickOutside from "../Hooks/useOnClickOutside"
import {useGlobalContext} from '../context/context'
import {FaTimes} from "react-icons/fa"
import {Link } from "react-router-dom"
import axios from "axios"



const Registration = () => {
  const {openRegistation , closeRegistation , setIsRegister } = useGlobalContext()
  const ref = useRef()
  useOnClickOutside(ref, () => setIsRegister(false));

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post ("https://ebike.onrender.com/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="flex text-black justify-center items-center bg-black/80 backdrop-blur-xl fixed z-50 inset-0 overflow-hidden">
      <div  onClick={openRegistation} />
      <div className="flex flex-col items-center h-screen justify-center">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden z-60 relative top-20 bg-white shadow-md sm:max-w-md sm:rounded-lg " ref={ref}>
                    <div className="absolute right-5">
                        <FaTimes className="text-2xl cursor-pointer hover:opacity-50 text-black" onClick={closeRegistation}/>
                    </div>
                <h3 className="text-4xl font-bold text-black-600 pb-10 text-black">
                ✦ E-BIKE
                        </h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined "
                            >
                               Username
                            </label>
                            <div className="flex flex-col items-start pb-3">
                                <input
                                   type="text"
                                  
                                   placeholder="Enter your username..."
                                   onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    placeholder="Enter your email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                  type="password"
                                  placeholder="Enter your password..."
                                  onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4 underline underline-offset-1 text-black">
                            <Link to ="">
                                Already registered?
                            </Link>
                            <button
                            onClick={handleSubmit}
                                type="submit"
                                className="hover:opacity-50 inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                        {error && <span className="text-red-500">Something went wrong!</span>}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Registration
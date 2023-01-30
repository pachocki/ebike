import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Header from "./components/Header"
import Footer from "./components/Footer"
import SingleProduct from "./Pages/SingleProduct"
import OrderSummary from "./Pages/OrderSummary"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import {useGlobalContext} from "./context/context"



function App() {
  const { isOpen,setIsOpen , isRegister,setIsRegister} = useGlobalContext()
  return (
    <div className="App  bg-white dark:bg-zinc-900 dark:text-white transition-all overflow-hidden relative">
      <Header/>
      {isOpen && <Login setIsOpen={setIsOpen} />}
      {isRegister && <Registration setIsRegister={setIsRegister} />}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Shop/:id" element={<SingleProduct/>} />
        <Route path="/OrderSummary" element={<OrderSummary/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

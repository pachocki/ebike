import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openRegistation = () => {
    setIsRegister(true);
  };
  const closeRegistation = () => {
    setIsRegister(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://ebike.onrender.com/api/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [products]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        closeModal,
        openModal,
        isRegister,
        setIsRegister,
        openRegistation,
        closeRegistation,
        products,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ModalContext);
};
export { ModalContext, ModalProvider };

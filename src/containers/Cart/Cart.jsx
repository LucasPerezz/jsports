import React, { useContext } from "react";
import { CartContext } from "../../cartContext/UseCartContext";

const Cart = () => {
  const { cart, removeItem, totalPriceCart, productQuantity } = useContext(CartContext);

  return (
    <div className="min-h-screen w-full bg-white lg:w-3/5 absolute z-10 right-0 shadow flex flex-col">
      <div className="sm:w-3/4 sm:mx-auto mt-6">
        <ul className="grid grid-cols-5 place-items-center">
          <li></li>
          <li className="text-xs sm:text-sm font-bold">Producto</li>
          <li className="text-xs sm:text-sm font-bold">Cantidad</li>
          <li className="text-xs sm:text-sm font-bold">Precio</li>
        </ul>
      </div>
      {cart.map((item) => {
        return (
          <div className="sm:w-3/4 sm:mx-auto mt-6">
            <ul className="grid grid-cols-5 place-items-center">
              <li className="">
                <img src={item.image} alt="" className="w-3/4 sm:w-2/4" />
              </li>
              <li className="font-light text-gray-500 text-xs sm:text-sm">{item.name}</li>
              <li className="font-light text-gray-500 text-xs sm:text-sm">{item.qty}</li>
              <li className="font-light text-gray-500 text-xs sm:text-sm"><span>$</span>{item.total}</li>
              <li>
                <span onClick={() => removeItem(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        );
      })}
      <div className="w-full absolute bottom-24 bg-black py-4">
          <ul className="grid grid-cols-5 place-items-center">
            <li><span></span></li>
            <li className="font-bold text-white text-sm sm:text-lg">TOTAL</li>
            <li className="font-bold text-white text-sm sm:text-lg">{productQuantity()}u</li>
            <li className="font-bold text-white text-sm sm:text-lg"><span>$</span>{totalPriceCart()}</li>
            <li><span></span></li>
          </ul>
      </div>
    </div>
  );
};

export default Cart;

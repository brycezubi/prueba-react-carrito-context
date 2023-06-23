import { AiOutlineShoppingCart } from "react-icons/ai";

import React from "react";

const Product = ({ thumbnail, title, price, addToProduct , isRegister }) => {
  return (
    <li className="pb-4 bg-white rounded-md overflow-hidden shadow">
      <img
        className="w-full h-[240px] object-cover"
        src={thumbnail}
        alt={`Producto-${title}`}
      />
      <div className="text-center pt-4">
        <p className="font-bold">
          {title} - <span className="font-normal">${price}.00</span>
        </p>
        <button className="mt-2"
          onClick={addToProduct}
        >
          <AiOutlineShoppingCart
            size={25}
            className={isRegister ? 'text-red-600' : 'text-blue-500'}
          />
        </button>
      </div>
    </li>
  );
};

export default Product;

import { AiOutlineClear } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, hashCart, bag  , addToProduct, removeToProduct , cleanToCart} = useContext(CartContext);

  return (
    <section
      className={`${
        bag ? "fixed" : "hidden"
      } top-0 right-0 w-5/12 md:w-2/5 lg:w-1/5 bg-white py-2 px-2 md:px-4 lg:px-6 h-screen overflow-scroll`}
    >
      {hashCart ? (
        <>
          <h2 className="text-2xl pt-2 text-center text-blue-600 font-medium">Articulos</h2>
          {cart.map((item) => (
            <ItemCart
              key={item.id}
              {...item}
              addToProduct={()=>addToProduct(item)}
              removeToProduct={()=>removeToProduct(item)}
            />
          ))}
        </>
      ) : (
        <h2 className="text-red-500 text-2xl font-medium text-center py-5">
          Lista Vacia
        </h2>
      )}
      <div className="border-t-2 border-red-700 text-center pt-4">
        <button
          onClick={cleanToCart}
        >
          <AiOutlineClear
            size={30}
            className="text-slate-700"
          />
        </button>
      </div>
    </section>
  );
};

export default Cart;

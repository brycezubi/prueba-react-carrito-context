import { createContext, useEffect, useId, useState } from "react";
import { useCart } from "../hooks/useCart";

const CartContext = createContext();

const CartContexProvider = ({ children }) => {

  const { cart , addToProduct , removeToProduct , cleanToCart}  = useCart()
  const [bag, setBag] = useState(false);
  const bagId = useId();

  const hashCart = cart?.length > 0;

  const hadleChangeBag = () => {
    setBag((prevState) => !prevState);
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        hashCart,
        bag,
        bagId,
        hadleChangeBag,
        addToProduct,
        removeToProduct,
        cleanToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };

export default CartContexProvider;

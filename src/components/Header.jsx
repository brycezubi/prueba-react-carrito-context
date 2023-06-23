import { useContext } from "react";
import Filters from "./Filters";
import { BsFillBagFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { bag, bagId, hadleChangeBag } = useContext(CartContext);
  return (
    <header className="contenedor">
      <h1 className="text-center text-4xl text-red-600 font-bold">
        Carrito de Compras 🛒
      </h1>

      <div className="flex justify-center my-10">
        <label htmlFor={bagId}>
          <BsFillBagFill
            size={40}
            className={`${
              bag ? "text-red-600" : "text-blue-600"
            } hover:cursor-pointer`}
          />
        </label>
        <input
          type="checkbox"
          id={bagId}
          value={bag}
          onChange={hadleChangeBag}
          hidden
        />
      </div>
      <Filters />
    </header>
  );
};

export default Header;

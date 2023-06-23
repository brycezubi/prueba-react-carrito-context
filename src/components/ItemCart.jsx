import { BsFillCartPlusFill, BsFillCartXFill } from "react-icons/bs";

const ItemCart = ({thumbnail , title,price , cantidad  , removeToProduct , addToProduct}) => {
  return (
    <article className="text-center py-5">
      <img
        src={thumbnail}
        alt="referencia de producto"
      />
      <p className="font-medium">{title} - <span className="font-normal">${price}.00</span></p>
      <p>Cantidad : {cantidad}</p>
      <div className="flex justify-evenly pt-2">
        <button
          onClick={addToProduct}
        >
          <BsFillCartPlusFill
            size={25}
            className="text-blue-800"
          />
        </button>
        <button
          onClick={removeToProduct}
        >
          <BsFillCartXFill
            size={25}
            className="text-red-700"
          />
        </button>
      </div>
    </article>
    
  );
};

export default ItemCart;

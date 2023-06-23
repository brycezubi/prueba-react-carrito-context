import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "./Product";
import { CartContext } from "../context/CartContext";

const ListProducts = () => {
  const { hashProducts, productsFiltered } = useContext(ProductsContext);
  const { cart, addToProduct } = useContext(CartContext);

  const chekcProduct = (product)=>{
    return cart.some( item=>item.id === product.id)
  } 
  

  return (
    <main className="contenedor pb-10">
      <h2 className="text-center text-blue-600 font-medium text-2xl py-4">
        Lista de Productos
      </h2>
      {hashProducts ? (
        <ul className="grilla">
          {productsFiltered.map((product) => {
            const isRegister =  chekcProduct(product)
            return (  
              <Product
                key={product.id}
                {...product}
                addToProduct={() => addToProduct(product)}
                isRegister={isRegister}
              />
            );
          })}
        </ul>
      ) : (
        <h2 className="text-center text-2xl text-red-600 pt-10">
          No encontramos Productos
        </h2>
      )}
    </main>
  );
};

export default ListProducts;

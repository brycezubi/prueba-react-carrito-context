import { createContext, useId, useState } from "react";
import { useFilters } from "../hooks/useFilters";
import { products as Productos } from "../data/products.json";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(Productos);
  const { filters, setFilters, hashProducts, productsFiltered } =
    useFilters(products);
  const rangeId = useId();
  const categoryId = useId();

  const handleChangePrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <ProductsContext.Provider
      value={{
        rangeId,
        categoryId,
        handleChangePrice,
        handleChangeCategory,
        filters,
        hashProducts,
        productsFiltered,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext };

export default ProductsContextProvider;

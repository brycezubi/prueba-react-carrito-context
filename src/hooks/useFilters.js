import {useState } from "react";

export function useFilters(products) {
 
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const productsFilter = (products) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    );
  };

  const productsFiltered = productsFilter(products);

  const hashProducts = productsFiltered?.length > 0;

  return {
    filters,
    setFilters,
    productsFiltered,
    hashProducts,
  };
}

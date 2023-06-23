import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Filters = () => {
  const { filters , rangeId , categoryId , handleChangeCategory , handleChangePrice} =  useContext(ProductsContext)
  return (
    <form className="my-10">
      <div className="text-center max-w-sm mx-auto">
        <label
          className="font-medium"
          htmlFor={rangeId}
        >
          Precio Minimo :${filters.minPrice}{" "}
        </label>
        <input
          className="w-full"
          type="range"
          max={1000}
          step={100}
          id={rangeId}
          value={filters.minPrice}
          onChange={handleChangePrice}
        />
        <div className="flex justify-between">
          <span>${filters.minPrice}</span>
          <span>$1000.00</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 max-w-sm mx-auto pt-4">
        <label
          className="font-medium text-slate-900"
          htmlFor={categoryId}
        >
          Categorias:
        </label>
        <select
          className="text-center py-1 rounded-md border font-medium"
          name="categorias"
          id={categoryId}
          onChange={handleChangeCategory}
        >
          <option value="all">--- Todos ----</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="home-decoration">Decoraciones</option>
          <option value="fragrances">Perfumes</option>
        </select>
      </div>
    </form>
  );
};

export default Filters;

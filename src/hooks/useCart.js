import { useEffect, useState } from "react";

export function useCart() {
  const carritoLs =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];

  const [cart, setCart] = useState(carritoLs);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addToProduct = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      const updateCarrito = cart.map((item) => {
        if (item.id === product.id) {
          item.cantidad += 1;
        }
        return item;
      });
      setCart([...updateCarrito]);
    } else {
      const agregar = [
        ...cart,
        {
          ...product,
          cantidad: 1,
        },
      ];
      setCart(agregar);
    }
  };

  const removeToProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const cleanToCart = () => {
    setCart([]);
  };

  return { cart , addToProduct , removeToProduct , cleanToCart}
}

import ListProducts from "./components/ListProducts";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartContexProvider from "./context/CartContext";

function App() {
  return (
    <CartContexProvider>
      <Header />
      <Cart />
      <ListProducts />
    </CartContexProvider>
  );
}

export default App;

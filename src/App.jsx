import { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("all");

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts =
    category === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
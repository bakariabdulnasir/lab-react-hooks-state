
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Milk", category: "Dairy" },
  { id: 4, name: "Cheese", category: "Dairy" },
];

const ProductList = ({ products, addToCart }) => {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;

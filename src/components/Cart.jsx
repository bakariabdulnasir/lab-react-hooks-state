const Cart = ({ cartItems }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <p key={index}>{item.name} is in your cart.</p>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
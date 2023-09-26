import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart({ cart, removeFromCart, updateQuantity }) {
  // Function to handle increasing quantity
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateQuantity(updatedCart);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateQuantity(updatedCart);
  };

  // Calculate total cost based on cart items
  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <div key={product.id}>
            <p>
              <img src={product.images[0]} alt={product.title} />
            </p>
            <p>{product.title}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => increaseQuantity(product.id)}>+</button>
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            <p>Price: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))}
      </ul>
      <button>
      <Link to={"/checkout"}>Checkout</Link>
      </button>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      {/* Add your checkout form here */}
    </div>
  );
}

export default ShoppingCart;

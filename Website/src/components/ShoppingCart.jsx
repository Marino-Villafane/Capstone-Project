import React from "react";
import CheckoutForm from "./CheckoutForm";

function ShoppingCart({ cart }) {
  // Define a function to handle form submission
  const handleCheckout = (formData) => {
    // Process the form data, including the total cost
    console.log("Form data:", formData);
    // You can add your own logic here to handle the checkout process
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
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </ul>
      <h3>Checkout</h3>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
      <CheckoutForm onSubmit={handleCheckout} cart={cart} />
    </div>
  );
}

export default ShoppingCart;

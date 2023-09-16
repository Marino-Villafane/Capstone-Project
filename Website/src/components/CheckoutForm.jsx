// CheckoutForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';

function CheckoutForm({ onSubmit, cart }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Calculate total cost based on cart items
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleFormSubmit = (data) => {
    onSubmit({ ...data, totalCost }); // Pass the form data and total cost to the parent component for processing
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span className="error">Name is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span className="error">Valid email is required</span>}
      </div>
      <div>
        <label>Shipping Address</label>
        <textarea {...register('shippingAddress', { required: true })} />
        {errors.shippingAddress && <span className="error">Shipping address is required</span>}
      </div>
      <div>
        <label>Payment Method</label>
        <select {...register('paymentMethod', { required: true })}>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        {errors.paymentMethod && <span className="error">Payment method is required</span>}
      </div>
      <button type="submit">Checkout</button>
    </form>
  );
}

export default CheckoutForm;

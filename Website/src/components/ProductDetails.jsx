// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the detailed product data

        // Assuming the data structure matches the expected format
        setProductDetails(data); 

      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false); // Set loading to false on error
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {productDetails.id}</p>
      <p>Title: {productDetails.title}</p>
      <p>Description: {productDetails.description}</p>
      <p>Price: {productDetails.price}</p>
      <p>Discount %: {productDetails.discountPercentage}</p>
      <p>Rating: {productDetails.rating}</p>
      <p>Stock: {productDetails.stock}</p>
      <p>Brand: {productDetails.brand}</p>
      <p>Category: {productDetails.category}</p>
      <p>Pictures:</p>
      <p><img src={productDetails.images[0]} alt={productDetails.title}/></p>
      <p><img src={productDetails.images[1]} alt={productDetails.title}/></p>
      <p><img src={productDetails.images[2]} alt={productDetails.title}/></p>
    </div>
  );
}

export default ProductDetails;


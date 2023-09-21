// ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductDetails({ product, cart, setCart }) {
  let { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id == undefined) {
      id = product.id;
    }

    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the detailed product data

        // Assuming the data structure matches the expected format
        setProductDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false); // Set loading to false on error
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  const handleProductSelect = () => {
    addToCart(productDetails);
    // setSelectedProduct(product);
  };

  const addToCart = () => {
    const existingCartItem = cart.find((item) => item.id === productDetails.id);

    if (existingCartItem) {
      // If the productDetails is already in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === productDetails.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the productDetails is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...productDetails, quantity: 1 }]);
    }
    // props.addToCart([...cart, { ...productDetails, quantity: 1 }]);
  };
  console.log(productDetails);
  return (
    <div>
      <h2>Product Details</h2>
      <button onClick={handleProductSelect}>Add to cart</button>
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
      <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3} // Adjust the number of products to show per slide
          slidesToScroll={1}
          autoplay={true}
        >
      <p>
        <img src={productDetails.images[0]} alt={productDetails.title} />
      </p>
      <p>
        <img src={productDetails.images[1]} alt={productDetails.title} />
      </p>
      <p>
        <img src={productDetails.images[2]} alt={productDetails.title} />
      </p>
      </Slider>
    </div>
  );
}

export default ProductDetails;

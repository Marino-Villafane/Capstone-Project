import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import ProductDetails from "./ProductDetails";
import '../styles/layouts.css'

function ProductList({ cart, cartCount, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("productName"); // Default filter option//
  // const [cart, setCart] = useState([]);
  // const [cartCount, setCartCount] = useState(0);

  const handleSearch = () => {
    // Filter products based on search criteria and update the filtered product list
    const selectedProduct = products.filter((product) => {
      if (filterOption === "productName") {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (filterOption === "category") {
        return product.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
      return true; // No filter applied
    });

    setSelectedProduct(selectedProduct);
  };

  // Function to filter products based on search criteria
  const filteredProducts = products.filter((product) => {
    // Check if product.name is defined
    const productName = product.title ? product.title.toLowerCase() : "";
    // Check if product.category is defined
    const productCategory = product.category
      ? product.category.toLowerCase()
      : "";

    if (filterOption === "productName") {
      return productName.includes(searchQuery.toLowerCase());
    } else if (filterOption === "category") {
      return productCategory.includes(searchQuery.toLowerCase());
    }
    return true; // No filter applied
  });

  // const handleProductSelect = (product) => {
  //   setSelectedProduct(product);
  // };
  // Render the filtered list of products only if a search query is present
  const productItems = searchQuery
    ? filteredProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleProductSelect(product)}>
            Add to cart?
          </button>
        </div>
      ))
    : null;

  // Update cartCount whenever the cart changes
  useEffect(() => {
    // const count = cart.reduce((total, item) => total + item.quantity, 0);
    // setCartCount(count);
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      // If the product is already in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    // props.addToCart([...cart, { ...product, quantity: 1 }]);
  };

  // Modify the "View Details" button to add the product to the cart
  const handleProductSelect = (product) => {
    addToCart(product);
    setSelectedProduct(product);
  };

  // Render the shopping cart component when the "View Cart" button is clicked
  const renderCart = selectedProduct ? <ShoppingCart cart={cart} /> : null;

  //Add a product to the cart when a button is clicked
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.products); // Log the data to see the structure
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error("Data is not in the expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  // console.log(cart, "from prodlist")
  return (
    <div>
      <h2>Product List</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="productName">Product Name</option>
          <option value="category">Category</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Shopping Cart */}
      {/*<div>
        <p>Cart Count: {cartCount}</p>
        <button onClick={() => setSelectedProduct(null)}>Close Cart</button>
  </div>*/}

      {/* Product List */}
      {/* {productItems}
      {selectedProduct && <ProductDetails product={selectedProduct} />} */}

      {/* Conditionally render the shopping cart */}
      {/* {renderCart} */}

      <ul id="productlist">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <div key={product.id}>
                <p>{product.title}</p>
                <p >
                  <img id="images" src={product.thumbnail} alt={product.title} />
                </p>
                <p>
                  {"$"}
                  {product.price}
                </p>
                <p>
                  <Link to={`/productlist/${product.id}`}>See More...</Link>
                </p>
              </div>
            ))
          : products.map((product) => (
              <div  id = "proddisplay" key={product.id}>
                <p>{product.title}</p>
                <p id="images">
                  <img src={product.thumbnail} alt={product.title} />
                </p>
                <p>
                  {"$"}
                  {product.price}
                </p>
                <p>
                  <Link to={`/productlist/${product.id}`}>See More...</Link>
                </p>
              </div>
            ))}
      </ul>
    </div>
  );
}
export default ProductList;


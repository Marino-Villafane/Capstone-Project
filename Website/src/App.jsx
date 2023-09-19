import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage.jsx';
import ProductDetails from "./components/ProductDetails.jsx";
import ProductList from "./components/ProductList.jsx";
import Header from "./components/Header.jsx"
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import "./styles/layouts.css"
import Navbar from "./components/Header.jsx";
import ShoppingCart from './components/ShoppingCart.jsx';
import AuthContainer from './components/AuthForm.jsx';
import ContactUsFooter from './components/ContactUs.jsx';
import SocialMediaFooter from './components/Footer.jsx';


function App() {

  const [cart, setCart] = useState([]);
// Function to add a product to the cart
const addToCart = (product) => {
  const existingCartItem = cart.find((item) => item.id === product.id);

  if (existingCartItem) {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};
// Function to remove a product from the cart
const removeFromCart = (productId) => {
  const updatedCart = cart.filter((item) => item.id !== productId);
  setCart(updatedCart);
};
  // Calculate the cart count based on the cart state
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
    <div>
      <div><Navbar cartCount={cartCount}/></div>
      
      <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        {/* <Route path="/productlist" element={<ProductList/>}/> */}
        <Route path="/productlist/:id" element= {<ProductDetails 
          cart={cart}
          setCart={setCart}
          cartCount={cartCount}
          removeFromCart={removeFromCart}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route
            path="/productlist"
             element= {<ProductList
                cart={cart}
                setCart={setCart}
                cartCount={cartCount}
                removeFromCart={removeFromCart}
              />
            }
          />
          {/* <Route
          path='/productlist'
          render={(props) => <ProductList {...addToCart} isAuthed={true} />}
        /> */}
          <Route path="/cart" element={<ShoppingCart cart={cart} />} />
          <Route path="/auth" element={<AuthContainer/>}/>
      </Routes>
      <footer>
        <ContactUsFooter/>
      <SocialMediaFooter/>
      
      </footer>
    </div>
    </Router>
  );
}

export default App;




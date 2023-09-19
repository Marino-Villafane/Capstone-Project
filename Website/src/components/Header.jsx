import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar({cartCount}){
    // TODO show diff links if logged in or not.
    // TODO Implement logout functionality
//     const [stateCart, setStateCart] = useState()
//     useEffect(()=> {
//         console.log("hello", cartCount)
//         setStateCart(cartCount)
//     },[cartCount])
//    console.log(cartCount)
    return (
    <nav id="navbar">
            {/* <Link to = "/home"> Home</Link> */}
            <Link to = "/"> Home</Link>
            <Link to = "/productlist"> ProductList</Link>
            {/* <Link to = "/productdetails"> ProductDetails</Link> */}
            {/* <Link to = "/login"> Login</Link>
            <Link to = "/register"> Register</Link> */}
            <Link to = "/auth"> Join{}</Link>
            <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} beatFade/> ({cartCount})
          </Link>
        <button>Logout</button>
        </nav>
   )
}
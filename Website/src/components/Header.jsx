// import React, { useEffect } from 'react';
// import {Link} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

// export default function Navbar({cartCount}){
//     // TODO show diff links if logged in or not.
//     // TODO Implement logout functionality
// //     const [stateCart, setStateCart] = useState()
// //     useEffect(()=> {
// //         console.log("hello", cartCount)
// //         setStateCart(cartCount)
// //     },[cartCount])
// //    console.log(cartCount)
//     return (
//     <nav id="navbar">
//             {/* <Link to = "/home"> Home</Link> */}
//             <Link to = "/"> Home</Link>
//             <Link to = "/productlist"> ProductList</Link>
//             {/* <Link to = "/productdetails"> ProductDetails</Link> */}
//             {/* <Link to = "/login"> Login</Link>
//             <Link to = "/register"> Register</Link> */}
//             <Link to = "/auth"> Join{}</Link>
//             <Link to="/cart">
//             <FontAwesomeIcon icon={faShoppingCart} beatFade/> ({cartCount})
//           </Link>
//         <button>Logout</button>
//         </nav>
//    )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AuthForm from './AuthForm'; // Import the AuthForm component

export default function Navbar({ cartCount, isLoggedIn, onLogout }) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Track registration/login mode

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    // Redirect to the home page or a different page after logout
  };
  

  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/productlist">ProductList</Link>
      {isLoggedIn ? (
        <>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} beatFade /> ({cartCount})
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div className="auth-container">
            {/* Button to toggle registration */}
            <button
              className="auth-toggle"
              onClick={() => {
                setShowAuthModal(!showAuthModal);
                setIsRegistering(true); // Set registration mode
              }}
            >
              Register
            </button>
            {/* Button to toggle login */}
            <button
              className="auth-toggle"
              onClick={() => {
                setShowAuthModal(!showAuthModal);
                setIsRegistering(false); // Set login mode
              }}
            >
              Login
            </button>
            {showAuthModal && (
              <div className="auth-modal">
                {/* Render the AuthForm component here */}
                <AuthForm
                  isRegistering={isRegistering}
                  setIsRegistering={setIsRegistering}
                />
              </div>
            )}
          </div>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} beatFade /> ({cartCount})
          </Link>
        </>
      )}
    </nav>
  );
}
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Helper function to set the token in both state and sessionStorage
// const logIn = (token) => {
//   // Set the token in state
//   setToken(token);

//   // Optionally, store the token in sessionStorage
//   sessionStorage.setItem("token", token);
// };

// // Helper function to clear the token from both state and sessionStorage
// const logOut = () => {
//   // Clear the token from state
//   setToken("");

//   // Optionally, remove the token from sessionStorage
//   sessionStorage.removeItem("token");
// };

// // Helper function to check if a user is logged in
// const isLoggedIn = (token) => {
//   return !!token; // Returns true if there is a token, otherwise false
// };

// // Helper function to create headers for API requests, including the bearer token if logged in
// const makeHeaders = (token) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   if (isLoggedIn(token)) {
//     headers["Authorization"] = `Bearer ${token}`;
//   }

//   return headers;
// };

// function RegistrationForm({ onRegister, authenticator, setAuthenticator }) {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [token, setToken] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setErrors({});

//     // Perform form validation
//     if (formData.password.length < 8) {
//       setErrors({ password: "Password must be at least 8 characters long" });
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setErrors({ confirmPassword: "Passwords do not match" });
//       return;
//     }

//     // If validation passes, send data to the backend
//     // You can use Axios or fetch here to make the API request
//     // Example:
//     // axios.post('your-backend-api-url/register', formData)
//     //   .then(response => {
//     //     console.log('Registration successful', response.data);
//     //     setIsSubmitted(true);
//     //   })
//     //   .catch(error => {
//     //     console.error('Registration failed', error);
//     //   });

//     // For example without sending to backend, we'll just log the form data
//     console.log("Form data submitted:", formData);
//     setIsSubmitted(true);
//   };

//   return (
//     <div>
//       <h2
//         style={{ cursor: "grab" }}
//         onClick={() => setAuthenticator("register")}
//       >
//         Register
//       </h2>
//       {isSubmitted ? (
//         <p>Registration successful! You can now log in.</p>
//       ) : (
//         <form
//           id="register"
//           style={
//             authenticator === "register"
//               ? { display: "block" }
//               : { display: "none" }
//           }
//           onSubmit={handleSubmit}
//         >
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="username*"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               minLength={5} // Adjust as needed
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="password*"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               minLength={8} // Adjust as needed
//             />
//             {errors.password && <p className="error">{errors.password}</p>}
//           </div>
//           <div>
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="password*"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             {errors.confirmPassword && (
//               <p className="error">{errors.confirmPassword}</p>
//             )}
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       )}
//     </div>
//   );
// }

// function LoginForm({ onLogin, authenticator, setAuthenticator }) {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     // Check if there is a token in sessionStorage when the app loads
//     const storedToken = sessionStorage.getItem("token");
//     if (storedToken) {
//       logIn(storedToken);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setErrors({});
//     //setIsSubmitted(true);
//     //TO WAIT FOR BACKEND API
//     // try {
//     //   // Send login data to the backend
//     //   const response = await axios.post('https://dummyjson.com/auth/login', formData, {
//     //     headers: makeHeaders(),
//     //   });

//       // Check for a successful login and token in the response
//     //   if (response.data.success && response.data.token) {
//     //     // Log the user in and store the token
//     //     logIn(response.data.token);
//     //     setIsSubmitted(true);
//     //   } else {
//     //     console.error('Login failed:', response.data.message);
//     //   }
//     // } catch (error) {
//     //   console.error('Login failed', error);
//     // }
//   };

//   const handleLogout = () => {
//     // Log the user out and clear the token
//     logOut();
//     setIsSubmitted(false);
//   };

//   return (
//     <div>
//       <h3>{isLoggedIn() ? "You are Logged In" : "You are Logged Out"}</h3>

//       {isLoggedIn() ? (
//         <div>
//           <p>Welcome, you are logged in!</p>
//           <button onClick={handleLogout}>Log Out</button>
//         </div>
//       ) : (
//         <div>
//           <h2
//             style={{ cursor: "grab" }}
//             onClick={() => setAuthenticator("login")}
//           >
//             Login
//           </h2>
//           {isSubmitted ? (
//             <p>Login successful!</p>
//           ) : (
//             <form
//               id="login"
//               style={
//                 authenticator === "login"
//                   ? { display: "block" }
//                   : { display: "none" }
//               }
//               onSubmit={handleLogin}
//             >
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={formData.username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit">Login</button>
//             </form>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// {
//   /* <LoginForm/> */
// }

// function AuthContainer() {
//   const [token, setToken] = useState("");
//   const [authenticator, setAuthenticator] = useState(false);
//   useEffect(() => {
//     // Check if there is a token in sessionStorage when the app loads
//     const storedToken = sessionStorage.getItem("token");
//     if (storedToken) {
//       logIn(storedToken);
//     }
//   }, []);

//   return (
//     <div>
//       {isLoggedIn(token) ? (
//         <div>
//           <p>Welcome, you are logged in!</p>
//           <button onClick={logOut}>Log Out</button>
//         </div>
//       ) : (
//         <div>
//           {/* <h2>Register</h2> */}
//           <RegistrationForm
//             onRegister={logIn}
//             authenticator={authenticator}
//             setAuthenticator={setAuthenticator}
//           />
//           {/* <h2>Login</h2> */}
//           <LoginForm
//             onLogin={logIn}
//             authenticator={authenticator}
//             setAuthenticator={setAuthenticator}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default AuthContainer;


// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthForm = ({ isRegistering }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const apiUrl = isRegistering
//         ? 'https://dummyjson.com/users/add'
//         : 'https://dummyjson.com/auth/login';

//       const requestData = isRegistering
//         ? {
//             firstName,
//             lastName,
//             email,
//             password,
//             age: 25, // Add any additional fields required for registration
//             // ...other registration data
//           }
//         : {
//             username: email, // Use email as the username for login
//             password,
//             // expiresInMins: 60, // optional for login
//           };

//       const response = await axios.post(apiUrl, requestData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Handle successful registration or login (e.g., redirect to another page)
//       console.log(response.data);
//     } catch (error) {
//       // Handle registration or login errors (e.g., display an error message)
//       console.error(error);
//     }

//     // Clear the form fields
//     setEmail('');
//     setPassword('');
//     setFirstName('');
//     setLastName('');
//   };

//   return (
//     <div>
//       <h2>{isRegistering ? 'Register' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isRegistering && (
//           <>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//               />
//             </label>
//           </>
//         )}
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">
//           {isRegistering ? 'Register' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;
import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isRegistering }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        isRegistering ? 'https://dummyjson.com/users/add' : 'https://dummyjson.com/auth/login',
        { email, password }
      );
  
      if (isRegistering) {
        // Registration
        console.log('Registration Successful');
        console.log('User Data:', response.data);
      } else {
        // Login
        console.log('Attempting to log in with the following credentials:');
        console.log('Email:', email); // Ensure this matches the email used for registration
        console.log('Password:', password); // Ensure this matches the password used for registration
  
        // Perform the login request here and log the response
        // Example:
        const loginResponse = await axios.post('https://dummyjson.com/auth/login', {
          username: email, // Use the email field for the username
          password: password,
        });
  
        // Log the login response
        console.log('Login Response:', loginResponse.data);
      }
  
      // Clear the form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle registration or login errors (e.g., display an error message)
      console.error(error);
    }
  };
  

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;



















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












// import { useState } from "react";
// import AuthForm from "./AuthForm";

// export default function Login({ setToken }) {
//   function handleSubmit(e, username, password) {
//     e.preventDefault();
//     console.log("login form submitted");
//   }
//   return (
//     <div>
//       <h1>Login</h1>
//       <AuthForm buttonText="Login" handleSubmit={handleSubmit} />
//     </div>
//   );
// }



// import React, { useState } from "react";
// import AuthForm from "./AuthForm";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Function to handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // Reset errors
//     setErrors({});

//     try {
//       // Send login data to the backend
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         // Login successful
//         setIsSubmitted(true);
//         // You can also set the user's token or session here if your backend returns one
//         // Example: setToken(data.token);
//       } else {
//         // Login failed, display error message
//         setErrors({ login: data.message });
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {isSubmitted ? (
//         <p>Login successful!</p>
//       ) : (
//         <div>
//           {errors.login && <p className="error">{errors.login}</p>}
//           <AuthForm
//             buttonText="Login"
//             handleSubmit={handleLogin}
//             handleChange={handleChange}
//             errors={errors}
//             formData={formData}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

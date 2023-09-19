import { useState } from "react";
import AuthForm from "./AuthForm";

export default function Login({ setToken }) {
  function handleSubmit(e, username, password) {
    e.preventDefault();
    console.log("login form submitted");
  }
  return (
    <div>
      <h1>Login</h1>
      <AuthForm buttonText="Login" handleSubmit={handleSubmit} />
    </div>
  );
}

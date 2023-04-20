//import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { UserAuth } from "../../components/context/AuthContext";
import Footer from "../../components/Footer";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, loginUser } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      if (Object.keys(user).length !== 0) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header></Header>
      <form onSubmit={handleLogin} action="">
        <h1>Welcome Back!</h1>
        <label htmlFor="signin-email">Email</label>
        <input
          type="email"
          id="signin-email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="someone@somewhere.com"
        />
        <label htmlFor="signin-password">Password</label>
        <input
          type="password"
          id="signin-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button type="submit">Sign in!</button>
      </form>
      <p>
        New? <Link to="/signup">Sign Up</Link>
      </p>
      <Footer></Footer>
    </div>
  );
}

export default SignIn;

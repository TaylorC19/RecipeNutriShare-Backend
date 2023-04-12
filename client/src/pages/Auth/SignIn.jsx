import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    //const email = e.target.
    const userCred = await axios.post('/auth/signin', { 
      email: email, 
      password: password
    })
    console.log(userCred);
  }

  return (
    <div>
      <form onSubmit={handleSignIn} action="">
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
      <p>New? <Link to='/signup'>Sign Up</Link></p>
    </div>
  );
}

export default SignIn
import React, { useState } from 'react'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form action="">
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
    </div>
  );
}

export default SignIn
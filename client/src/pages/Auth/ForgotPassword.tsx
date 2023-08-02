import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { UserAuth } from "../../components/context/AuthContext";
import Footer from "../../components/Footer";
import "./ForgotPassword.css"

function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const { resetPasswordEmail } = UserAuth();
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await resetPasswordEmail(email);
      setErrorMessage("");
      setSuccessMessage("The reset email has been send.");
    } catch (error) {
      setErrorMessage("The email has not been recongized.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Header />

      <form action="" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <p>E-Mail Address:</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button type="submit" >
            Send reset request
          </button>
        </div>
        {successMessage && (
          <p>{successMessage}</p>
        )}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      
      <p>
        Ready to sign-in? <Link to="/signin">Click here</Link>
      </p>
      
      <p>
        Don't have an account? <Link to="/signup">Click here</Link>
      </p>

      <Footer />
    </>
  );

}

export default ForgotPassword
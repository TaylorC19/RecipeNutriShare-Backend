import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { UserAuth } from "../../components/context/AuthContext";
import Footer from "../../components/Footer";

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

      <Footer />
    </>
  );

}

export default ForgotPassword
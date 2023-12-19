import React, { useState } from "react";
import { auth } from "../firebase";


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store and display errors

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // User created successfully, clear any previous errors
      setError(null);
    } catch (error) {
      // Handle registration errors
      setError(error.message); // Set the error message in the state
    }
  };

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // User logged in successfully, clear any previous errors
      setError(null);
    } catch (error) {
      // Handle login errors
      setError(error.message); // Set the error message in the state
    }
  };

  return (
    <div>
      <h2>Sign Up / Log In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if error is present */}
    </div>
  );
}

export default Auth;

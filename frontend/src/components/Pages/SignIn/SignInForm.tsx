import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn(username, password);
      setUsername("");
      setPassword("");

      // Navigate to the homepage
      navigate("/"); // Navigate to the homepage
      // Reload the page
      //window.location.reload();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default SignInForm;

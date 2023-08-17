import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext'; // Import useAuth from your AuthContext

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Use the useAuth hook to get authentication functions
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn(username, password); // Use the signIn function from the useAuth hook
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error signing in:', error);
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

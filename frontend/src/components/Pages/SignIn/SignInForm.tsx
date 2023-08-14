import React, { useState } from 'react';
import jwt_decode from 'jwt-decode'; // Import jwt_decode
import loginService from '../../../service/loginService';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await loginService.login(username, password);

      // Assuming your backend sends a token upon successful login
      const token = response.token;
      console.log(token);
      // Store the token in local storage
      localStorage.setItem('token', token);
      
      // Decode the token
      const decodedToken = jwt_decode(token) as { id: string }; // Use jwt_decode to extract the user ID

      // Store the user ID in local storage
      localStorage.setItem('userId', decodedToken.id);
  
      // Reset the form
      setUsername('');
      setPassword('');

      console.log('Sign in successful!');

    } 
    
    catch (error) {
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

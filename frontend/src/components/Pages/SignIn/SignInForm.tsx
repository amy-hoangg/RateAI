import React, { useState } from 'react';
import { TypeSignInFormProps } from '../../../types';

const SignInForm = ({ onSubmit } : TypeSignInFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    onSubmit();
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


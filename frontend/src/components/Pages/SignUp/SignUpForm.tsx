import React, { useState } from 'react';
import { TypeSignUpFormProps } from '../../../types';
import usersService from '../../../service/usersService';

const SignUpForm = ({ onSubmit } : TypeSignUpFormProps) => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
  
    const handleSignUp = async () => {
      // Check if passwords match
      if (password !== repeatPassword) {
        console.log('Passwords do not match');
        return;
      }
  
      const newUser = {
        user_name: username,
        user_firstname: firstName,
        user_lastname: lastName,
        user_email: email,
        user_password: password,
      };

      try {
        const createdUser = await usersService.createNewUser(newUser);
        console.log('User created:', createdUser);
        onSubmit();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };
  
    return (
        <div>
          <div>
          <label>Username:</label>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div>
            <label>Firstname:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <label>Repeat Password:</label>
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat Password"
            />
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      );
    };

export default SignUpForm;
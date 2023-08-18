import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Update with the correct import path

const SignOut: React.FC = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth(); // Use the signOut function from your AuthContext

  useEffect(() => {
    // Perform sign-out logic here
    signOut(); // Call the signOut function to clear the authentication state

    // Redirect to the login page
    navigate('/sign-in');
    window.location.reload();
  }, [navigate, signOut]);

  return null;
};

export default SignOut;

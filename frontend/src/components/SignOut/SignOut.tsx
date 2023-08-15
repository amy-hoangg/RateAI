// SignOut.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform sign-out logic here

    // Delete the token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return null;
};

export default SignOut;

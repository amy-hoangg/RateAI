import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from './components/AppBar/AppBar';

import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import AIToolsPage from './components/Pages/AITools/AIToolsPage';
import NewsList from './components/Pages/News/NewsList';
import SignInPage from './components/Pages/SignIn/SignInPage';
import SignUpPage from './components/Pages/SignUp/SignUpPage';

const App = () => {
  
  return (
    <div>
    <AppBar/>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="ais" element={<AIToolsPage />} />
      <Route path="news" element={<NewsList ais={[]} />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />

      <Route path="*" element={<Navigate to="/" replace />} /> 
    </Routes>
    
    <Footer />
  </div>
  );
};

export default App;

import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from './components/AppBar/AppBar';

import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import AIToolsPage from './components/Pages/AITools/AIToolsPage';
import NewsList from './components/Pages/News/NewsList';
import SignInPage from './components/Pages/SignIn/SignInPage';
import SignUpPage from './components/Pages/SignUp/SignUpPage';
import ProfilePage from './components/Pages/Profile/Profile/ProfilePage';
import CartPage from './components/Pages/Profile/Cart/CartPage';
import SavesPage from './components/Pages/Profile/Saves/SavesPage';
import SellAIPage from './components/Pages/Profile/SellAI/SellAIPage';
import HomeSearchPage from './components/Pages/HomePage/HomeSearch/HomeSearchPage';
import SingleAIPage from './components/Pages/AITools/Other/singleAIPage';
import HomeFilterResultsPage from './components/Pages/HomePage/HomeSearch/HomeFilter/HomeFilterResultsPage';

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
      <Route path="profile" element={<ProfilePage />} />
      <Route path="cart" element={<CartPage/>} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="saves" element={<SavesPage />} />
      <Route path="sell" element={<SellAIPage />} />

      <Route path="search/:term" element={<HomeSearchPage />} />
      <Route path="ais/fetch/:id" element={<SingleAIPage />} />
      <Route path="filter/:term" element={<HomeFilterResultsPage />} />
    

      <Route path="*" element={<Navigate to="/" replace />} /> 
    </Routes>
    
    <Footer />
  </div>
  );
};

export default App;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";

import Footer from "./components/Footer/Footer";
import HomePage from "./components/Pages/HomePage/HomePage";
import AIToolsPage from "./components/Pages/AITools/AIToolsPage";
import SignInPage from "./components/Pages/SignIn/SignInPage";
import SignUpPage from "./components/Pages/SignUp/SignUpPage";
import ProfilePage from "./components/Pages/Profile/Profile/ProfilePage";
import CartPage from "./components/Pages/Profile/Cart/CartPage";
import SavesPage from "./components/Pages/Profile/Saves/SavesPage";
import SellAIPage from "./components/Pages/Profile/SellAI/SellAIPage";
import HomeSearchPage from "./components/Pages/HomePage/HomeSearch/HomeSearchPage";
import SingleAIPage from "./components/Pages/AITools/Other/singleAIPage";
import HomeFilterResultsPage from "./components/Pages/HomePage/HomeSearch/HomeFilter/HomeFilterResultsPage";
import NewsPage from "./components/Pages/News/NewsPage";
import NewsSinglePage from "./components/Pages/News/NewsSinglePage";
import SignOut from "./components/SignOut/SignOut";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="ais" element={<AIToolsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="saves" element={<SavesPage />} />
          <Route path="sell" element={<SellAIPage />} />

          <Route path="search/:term" element={<HomeSearchPage />} />
          <Route path="ais/fetch/:id" element={<SingleAIPage />} />
          <Route path="filter" element={<HomeFilterResultsPage />} />
          <Route path="news/:id" element={<NewsSinglePage />} />

          <Route path="sign-out" element={<SignOut />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;

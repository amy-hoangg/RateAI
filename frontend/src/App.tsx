import React, { useEffect, useState } from 'react';
import SingleReview from './components/Pages/AITools/singleReview';

import { TypeNewAI, TypeNewReview, TypeSingleAI, TypeSingleReview } from "./types";

import aisService from "./service/aisService";
import reviewsService from './service/reviewsService';

import AddNewAIForm from './components/Pages/AITools/addNewAIForm';
import AddNewReviewForm from './components/Pages/AITools/addNewReviewForm';

import { Route, Routes } from "react-router-dom";

import AIsList from './components/Pages/AITools/AIsList';
import AIPage from './components/Pages/AITools/AIToolsPage';
import AppBar from './components/AppBar/AppBar';
import SignInForm from './components/Pages/SignIn/SignInForm';
import SignUpForm from './components/Pages/SignUp/SignUpForm';

import Footer from './components/Footer/Footer';

const App = () => {
  
  return (
    <div>
    <AppBar/>

    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="sign-in" element={<AITools />} exact />
      <Route path="repositories/:id" element={<HowTos />} exact />
      <Route path="create-review" element={<News />} exact />
      <Route path="sign-up" element={<SignIn />} exact />
      <Route path="sign-up" element={<SignIn />} exact />
      <Route path="sign-up" element={<SignIn />} exact />

      <Route path="*" element={<Navigate to="/" replace />} /> 
    </Routes>
    
    <Footer />
  </div>
  );
};

export default App;

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


const App = () => {
  const [ais, setAIs] = useState<TypeSingleAI[]>([]);
  const [reviews, setReviews] = useState<TypeSingleReview[]>([]);

  const webName = "MyAI.com";

  useEffect(() => {
    aisService.getAllAIs()
      .then((data) => setAIs(data))
      .catch((error) => console.error('Error fetching AIs:', error));
  }, []);

  useEffect(() => {
    reviewsService.getAllReviews()
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching Reviews:', error));
  }, []);

  const submitNewAI = async (values: TypeNewAI) => {
      const ai = await aisService.createNewAI(values);
      setAIs(ais.concat(ai));
  };

  const submitNewReview = async (values: TypeNewReview) => {
    const review = await reviewsService.createNewReview(values);
    setReviews(reviews.concat(review));
};
  
  const signIn = ()=> {
    return(null);
  }

  const signUp = ()=> {
    return(null);
  }

  
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

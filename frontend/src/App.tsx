import React, { useEffect, useState } from 'react';
import SingleReview from './components/singleReview';

import { TypeNewAI, TypeNewReview, TypeSingleAI, TypeSingleReview } from "./types";

import aisService from "./service/aisService";
import reviewsService from './service/reviewsService';

import AddNewAIForm from './components/addNewAIForm';
import AddNewReviewForm from './components/addNewReviewForm';

import { Route, Routes } from "react-router-dom";

import AIsList from './components/AIsList';
import AIPage from './components/AIPage';

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

  
  return (
    <div>
      <h1>{webName}</h1>

      <Routes>
          <Route path="/" element={<AIsList ais={ais} />} />
          <Route path="/ais/:id" element={<AIPage />} />
      </Routes>

      <AddNewAIForm onSubmit={submitNewAI}/>

      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <SingleReview eachReview={review} />
        </div>
      ))}

      <AddNewReviewForm onSubmit={submitNewReview}/>
    </div>
  );
};

export default App;

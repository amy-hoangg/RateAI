import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AIService from "../../../service/aisService";
import { TypeSingleAI } from "../../../types";

const AIPage = () => {
  const [ai, setAI] = useState<TypeSingleAI | null>(null);
  const { id = '' } = useParams<{ id: string }>();

  useEffect(() => {
    AIService.getOneAI(id).then((data) => {
      setAI(data);
    });
  }, [id]);

  if (!ai) {
    return <div>Loading...</div>; // You can add a loading indicator while waiting for data to load.
  }

  return (
    <div>
      <ul>
        <li>Name: {ai.name}</li>
        <li>Star Rating: {ai.star_rating}</li>
        <li>Description: {ai.description}</li>
        <li>Saves: {ai.saves}</li>
        <li>Price: {ai.price}</li>
        <li>Categories: {ai.categories}</li>
        <li>Review Count: {ai.review_count}</li>
        <li>Reviews: {ai.reviews}</li>
      </ul>
    </div>
  );
};

export default AIPage;

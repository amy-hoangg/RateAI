import React from 'react'; 
import { TypeSingleAI } from "../types";

type Props = {
    eachAI: TypeSingleAI
};

const SingleAI = ({ eachAI }: Props) => {
  return (
    <div>
      <ul>
        <li>Name: {eachAI.name}</li>
        <li>Star Rating: {eachAI.star_rating}</li>
        <li>Description: {eachAI.description}</li>
        <li>Saves: {eachAI.saves}</li>
        <li>Price: {eachAI.price}</li>
        <li>Categories: {eachAI.categories}</li>
        <li>Review Count: {eachAI.review_count}</li>
        <li>Reviews: {eachAI.reviews}</li>
      </ul>
    </div>
  );
};

export default SingleAI;

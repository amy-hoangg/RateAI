import React from "react";
import { TypeSingleAI } from "../../../../types";
import { Link } from "react-router-dom";

type Props = {
  eachAI: TypeSingleAI;
};

const SellSingleAI = ({ eachAI }: Props) => {
  return (
    <div>
      <ul>
        <li>
          Name:
          <Link to={`/ais/${eachAI._id}`}>{eachAI.ai_name}</Link>
        </li>

        <li>Star Rating: {eachAI.ai_star_rating}</li>
        <li>Description: {eachAI.ai_description}</li>
        <li>Saves: {eachAI.ai_saves}</li>
        <li>Sold: {eachAI.ai_sold}</li>
        <li>Price: {eachAI.ai_price}</li>
        <li>Categories: {eachAI.ai_categories.join(", ")}</li>
        <li>Time created: {eachAI.ai_timecreated.toLocaleString()}</li>
        <li>Review Count: {eachAI.ai_reviews_review_id.length}</li>
        <li>Reviews: {eachAI.ai_reviews_review_id.join(", ")}</li>
        {/* Add a null check for ai.ai_seller_id */}
        {eachAI.ai_seller_id ? (
          <p>Seller: {eachAI.ai_seller_id.seller_storeName}</p>
        ) : (
          <p>No Seller Available</p>
        )}
      </ul>
    </div>
  );
};

export default SellSingleAI;

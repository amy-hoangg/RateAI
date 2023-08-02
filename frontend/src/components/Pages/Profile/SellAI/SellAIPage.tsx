import React from "react";
import SellRegisterForm from "./SellRegiterForm";
import SellAIList from "./SellAIList";
import SellAddNewAIForm from "./SellAddNewAIForm";
import { TypeNewAI } from "../../../../types";

const fakeSellSingleAI = {
    id: 'ai1',
    name: 'AI Tool 1',
    star_rating: 4,
    description: 'This is AI Tool 1',
    saves: 100,
    price: '$10/month',
    categories: ['category1', 'category2'],
    review_count: 10,
    reviews: ['review1', 'review2'],
    sold: 50,
    totalRevenue: 1000,
    date: '2023-08-01',

  };


const SellAIPage = () => {
  // Fake onSubmit function to handle form submission
  const handleSubmit = (formData: any) => {
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <h1>This is the Sell AI page</h1>
      <SellRegisterForm onSubmit={handleSubmit} />

      <SellAIList ais={[fakeSellSingleAI]} />

      <SellAddNewAIForm onSubmit={function (newAI: TypeNewAI): void {
              throw new Error("Function not implemented.");
          } } />
    </div>
  );
};

export default SellAIPage;

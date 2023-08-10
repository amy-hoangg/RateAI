/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import AI from "../models/ai";
import { TypeSingleAI } from "../types";

const filterAI = async (
  selectedCategories: string[],
  selectedPrice: string[]
): Promise<TypeSingleAI[]> => {
  try {
    // Construct the filter query based on selected categories and price
    const filterQuery: any = {};

    if (selectedCategories.length > 0) {
      filterQuery.ai_categories = { $in: selectedCategories };
    }

    if (selectedPrice.length > 0) {
      // Assuming selectedPrice contains either "free" or "paid"
      if (selectedPrice.includes("free")) {
        filterQuery.ai_price = 0;
      }
      if (selectedPrice.includes("paid")) {
        filterQuery.ai_price = { $gt: 0 }; //greater than 
      }
    }

    // Fetch AIs based on the filter query
    const filteredAIs = await AI.find(filterQuery).exec();
    return filteredAIs;
  } catch (error) {
    console.error("Error filtering AI:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};

export default {
  filterAI,
};

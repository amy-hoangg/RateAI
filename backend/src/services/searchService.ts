/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// services/aisService.ts
import AI from "../models/ai";
import { TypeSingleAI } from "../types";

const searchAI = async (searchTerm: string): Promise<TypeSingleAI[]> => {
  try {
    const searchResults = await AI.find({
      $text: { $search: searchTerm } // Perform a text search on relevant fields
    });

    console.log("Search results:", searchResults);
    return searchResults || [];
  } catch (error) {
    console.error("Error searching AI:", error);
    throw error; // Rethrow the error to be caught in the route handler
  }
};


export default {
  searchAI
};

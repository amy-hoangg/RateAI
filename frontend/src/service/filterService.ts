import axios from "axios";
import { TypeSingleAI } from "../types";

const baseUrl = "http://localhost:3003/api/filter";

// constructs a URL using the baseUrl and filterTerm, properly encoding the filter term.
const filterAI = async (selectedCategories: string[], selectedPrice: string[]): Promise<TypeSingleAI[]> => {
  try {
    const selectedCategoryParams = selectedCategories.map((category) => `&category=${encodeURIComponent(category)}`).join("");
    const selectedPriceParams = selectedPrice.map((price) => `&price=${encodeURIComponent(price)}`).join("");


    const response = await axios.get<TypeSingleAI[]>(
      `${baseUrl}/filter?${selectedCategoryParams}${selectedPriceParams}`
    );
    return response.data;
  } 
  catch (error) {
    console.error("Error fetching filter results:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default {
  filterAI,
};

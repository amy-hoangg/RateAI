import axios from "axios";
import { TypeSingleAI } from "../types";

const baseUrl = "http://localhost:3003/api/filter";

const filterAI = async (selectedCategories: string[], selectedPrice: string[]): Promise<TypeSingleAI[]> => {
  try {
    const selectedCategoryParams = selectedCategories.map((category) => `category=${encodeURIComponent(category)}`).join("&");
    const selectedPriceParams = selectedPrice.map((price) => `price=${encodeURIComponent(price)}`).join("&");

    // Construct the URL with query parameters
    const url = `${baseUrl}?${selectedCategoryParams}&${selectedPriceParams}`;

    const response = await axios.get<TypeSingleAI[]>(url);
    return response.data;
  } 
  catch (error) {
    console.error("Error fetching filter results:", error);
    throw error;
  }
};

export default {
  filterAI,
};

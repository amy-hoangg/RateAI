import axios from "axios";
import { TypeSingleAI } from "../types";

const baseUrl = "http://localhost:3003/api/search";

// constructs a URL using the baseUrl and searchTerm, properly encoding the search term.
const searchAI = async (searchTerm: string): Promise<TypeSingleAI[]> => {
  try {
    const response = await axios.get<TypeSingleAI[]>(
      `${baseUrl}/${searchTerm}?term=${encodeURIComponent(searchTerm)}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default {
  searchAI,
};



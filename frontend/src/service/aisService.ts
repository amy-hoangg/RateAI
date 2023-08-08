import axios from "axios";
import { TypeNewAI, TypeSingleAI } from '../types'

 
const baseUrl = "http://localhost:3003/api/ais";

const getAllAIs = () => {
    return axios
    .get<TypeSingleAI[]>(baseUrl)
    .then(response => response.data)
};

const createNewAI = async (object: TypeNewAI) => {
    const { data } = await axios
    .post<TypeNewAI>(`${baseUrl}`, object);
  
    return data;
  };

  const getOneAI = async (id: string) => {
    const { data } = await axios.get<TypeSingleAI>(
      `${baseUrl}/fetch/${id}`
    );
    return data;
  };

  // constructs a URL using the baseUrl and searchTerm, properly encoding the search term.
  const searchAI = async (searchTerm: string) => {
    try {
      const response = await axios.get<TypeSingleAI[]>(
        `${baseUrl}/search?term=${encodeURIComponent(searchTerm)}`
      );
      return response.data;
    } 
    catch (error) {
      console.error('Error fetching search results:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

export default {
    getAllAIs,
    createNewAI,
    getOneAI,
    searchAI
}
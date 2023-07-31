import axios from "axios";
import { TypeSingleAI } from "../types";


const baseUrl = "http://localhost:3003/api/ais";

const getAllAIs = () => {
    return axios
    .get<TypeSingleAI[]>(baseUrl)
    .then(response => response.data)
};

const createNewAI = async (object: TypeSingleAI) => {
    const { data } = await axios
    .post<TypeSingleAI>(`${baseUrl}`, object);
  
    return data;
  };

export default {
    getAllAIs,
    createNewAI
}
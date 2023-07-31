import axios from "axios";
import { TypeNewAI, TypeSingleAI } from "../types";


const baseUrl = "http://localhost:3003/api/ais";

const getAllAIs = () => {
    return axios
    .get<TypeSingleAI[]>(baseUrl)
    .then(response => response.data)
};

const createNewAI = async (object: TypeNewAI) => {
    const { data } = await axios
    .post<TypeSingleAI>(`${baseUrl}`, object);
  
    return data;
  };

  const getOneAI = async (id: string) => {
    const { data } = await axios.get<TypeSingleAI>(
      `${baseUrl}/patients/${id}`
    );
    return data;
  };

export default {
    getAllAIs,
    createNewAI,
    getOneAI
}
import axios from "axios";
import { TypeNewNew, TypeSingleNew } from '../types'

 
const baseUrl = "http://localhost:3003/api/news";

const getAllNews = () => {
    return axios
    .get<TypeSingleNew[]>(baseUrl)
    .then(response => response.data)
};

const createNewNew = async (object: TypeNewNew) => {
    const { data } = await axios
    .post<TypeSingleNew>(`${baseUrl}`, object);
  
    return data;
  };

  const getOneNew = async (id: string) => {
    const { data } = await axios.get<TypeSingleNew>(
      `${baseUrl}/${id}`
    );
    return data;
  };

export default {
    getAllNews,
    createNewNew,
    getOneNew
}
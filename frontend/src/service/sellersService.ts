import axios from "axios";
import { TypeNewSeller, TypeSeller } from '../types'
import axiosInstance from './axiosInstance';

 
const baseUrl = "http://localhost:3003/api/sellers";

const getAllSellers = () => {
    return axios
    .get<TypeSeller[]>(baseUrl)
    .then(response => response.data)
};

const createNewSeller = async (object: TypeNewSeller) => {
  const { data } = await axiosInstance.post<TypeSeller>('/sellers', object);
  return data;
};

  const getOneSeller = async (id: string) => {
    const { data } = await axios.get<TypeSeller>(
      `${baseUrl}/${id}`
    );
    return data;
  };

export default {
    getAllSellers,
    createNewSeller,
    getOneSeller
}
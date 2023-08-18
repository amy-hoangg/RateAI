import axios from "axios";
import { TypeNewAI, TypeSingleAI } from "../types";
import axiosInstance from "./axiosInstance";

const baseUrl = "http://localhost:3003/api/ais";

const getAllAIs = () => {
  return axios.get<TypeSingleAI[]>(baseUrl).then((response) => response.data);
};

const createNewAI = async (object: TypeNewAI) => {
  const { data } = await axiosInstance.post<TypeNewAI>("/ais", object);
  return data;
};

const getOneAI = async (id: string) => {
  const { data } = await axios.get<TypeSingleAI>(`${baseUrl}/fetch/${id}`);
  return data;
};

const updateSaves = async (id: string) => {
  try {
    const response = await axiosInstance.patch<TypeSingleAI>(`/ais/saves/${id}`);
    return response.data; // You can return any data from the response if needed
  } 
  catch (error) {
    throw error;
  }
};

const unSave = async (id: string) => {
  try {
    const response = await axiosInstance.patch<TypeSingleAI>(`/ais/unsave/${id}`);
    return response.data; // You can return any data from the response if needed
  } 
  catch (error) {
    throw error;
  }
};

export default {
  getAllAIs,
  createNewAI,
  getOneAI,
  updateSaves,
  unSave
};

import axios from "axios";
import { TypeNewNew, TypeSingleNew } from "../types";
import axiosInstance from "./axiosInstance";

const baseUrl = "http://localhost:3003/api/news";

const getAllNews = () => {
  return axios.get<TypeSingleNew[]>(baseUrl).then((response) => response.data);
};

const createNewNew = async (object: TypeNewNew) => {
  const { data } = await axios.post<TypeSingleNew>(`${baseUrl}`, object);

  return data;
};

const getOneNew = async (id: string) => {
  const { data } = await axios.get<TypeSingleNew>(`${baseUrl}/${id}`);
  return data;
};

const likeNews = async (id: string) => {
  try {
    const response = await axiosInstance.patch<TypeSingleNew>(`/news/like/${id}`);
    return response.data; // You can return any data from the response if needed
  } 
  catch (error) {
    throw error;
  }
};

const dislikeNews = async (id: string) => {
  try {
    const response = await axiosInstance.patch<TypeSingleNew>(`/news/dislike/${id}`);
    return response.data; // You can return any data from the response if needed
  } 
  catch (error) {
    throw error;
  }
};

const removeLikeNews = async (id: string) => {
  try {
    const response = await axiosInstance.patch<TypeSingleNew>(`/news/removeLike/${id}`);
    return response.data; // You can return any data from the response if needed
  } 
  catch (error) {
    throw error;
  }
};

const removeDislikeNews = async (id: string) => {
  try {
    const response = await axiosInstance.patch<TypeSingleNew>(`/news/removeDislike/${id}`);
    return response.data; // You can return any data from the response if needed
  } 
  catch (error) {
    throw error;
  }
};

export default {
  getAllNews,
  createNewNew,
  getOneNew,
  likeNews,
  dislikeNews,
  removeLikeNews,
  removeDislikeNews
};

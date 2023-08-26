import axios from "axios";
import { TypeNewUser, TypeSingleAI, TypeUser } from '../types'
import axiosInstance from "./axiosInstance";

 
const baseUrl = "http://localhost:3003/api/users";

const getAllUsers = () => {
    return axios
    .get<TypeUser[]>(baseUrl)
    .then(response => response.data)
};

const createNewUser = async (object: TypeNewUser) => {
    const { data } = await axios
    .post<TypeUser>(`${baseUrl}`, object);
  
    return data;
  };

  const getOneUser = async (id: string) => {
    const { data } = await axios.get<TypeUser>(
      `${baseUrl}/${id}`
    );
    return data;
  };

  const putOnCart = async (id: string) => {
    try {
      const response = await axiosInstance.patch<TypeSingleAI>(`/users/putoncart/${id}`);
      return response.data;
    }
    catch (error) {
      throw error;
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      const response = await axiosInstance.patch<TypeSingleAI>(`/users/removefromcart/${id}`);
      return response.data;
    }
    catch (error) {
      throw error;
    }
  };

  const editEmail = async (newEmail: string) => {
    try {
      const response = await axiosInstance.patch<TypeUser>("/users/editEmail", {
        email: newEmail
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  const editName = async (firstName: string, lastName: string) => {
    try {
      const response = await axiosInstance.patch<TypeUser>("/users/editName", {
        firstName,
        lastName
      });
      return response.data;
    }
    catch (error) {
      throw error;
    }
  };

export default {
    getAllUsers,
    createNewUser,
    getOneUser,
    putOnCart,
    removeFromCart,
    editEmail,
    editName
}
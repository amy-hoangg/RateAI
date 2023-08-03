import axios from "axios";
import { TypeNewUser, TypeUser } from '../types'

 
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

export default {
    getAllUsers,
    createNewUser,
    getOneUser
}
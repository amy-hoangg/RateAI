import axios from "axios";
import { TypeSubcriber } from '../types'

 
const baseUrl = "http://localhost:3003/api/subcribe";

const subcribe = async (object: TypeSubcriber) => {
    const { data } = await axios
    .post<TypeSubcriber>(`${baseUrl}`, object);
  
    return data;
  };

export default {
    subcribe
}
import axios from "axios";
import { TypeSubscriber } from '../types'

 
const baseUrl = "http://localhost:3003/api/subscribe";

const subscribe = async (object: TypeSubscriber) => {
    const { data } = await axios
    .post<TypeSubscriber>(`${baseUrl}`, object);
  
    return data;
  };

export default {
    subscribe
}
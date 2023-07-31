import axios from "axios";
import { TypeNewReview, TypeSingleReview } from "../types";

const baseUrl = "http://localhost:3003/api/reviews";

const getAllReviews = () => {
    return axios
    .get<TypeSingleReview[]>(baseUrl)
    .then(response => response.data)
};

const createNewReview = async (object: TypeNewReview) => {
    const { data } = await axios
    .post<TypeSingleReview>(`${baseUrl}`, object);
  
    return data;
  };

  const getOneReview = async (id: string) => {
    const { data } = await axios.get<TypeSingleReview>(
      `${baseUrl}/patients/${id}`
    );
    return data;
  };

export default {
    getAllReviews,
    createNewReview,
    getOneReview
}
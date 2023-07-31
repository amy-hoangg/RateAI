import axios from "axios";
import { TypeSingleAI } from "../types";

const baseUrl = "http://localhost:3003/api/ais";

export const getAllAIs = () => {
    return axios
    .get<TypeSingleAI[]>(baseUrl)
    .then(response => response.data)
};
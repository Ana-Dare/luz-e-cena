import axios from "axios";
import type { Movie } from "../types";

const BASE_URL = "http://localhost:5000";

export const getMovies = async (): Promise<Movie[]> => {
  const res = await axios.get<Movie[]>(`${BASE_URL}/movies`);
  return res.data;
};

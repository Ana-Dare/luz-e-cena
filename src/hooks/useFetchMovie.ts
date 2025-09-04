import { useEffect, useState } from "react";
import type { Movie } from "../types";
import { getMovies } from "../api";

const useFetchMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isloading, setisLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setisLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      setError("Erro ao buscar filmes. Tente novamente");
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return { movies, isloading, error };
};

export default useFetchMovie;

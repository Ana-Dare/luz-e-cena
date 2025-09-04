import styles from "./MovieSection.module.css";
import Fieldset from "../components/fieldset";
import InpuText from "../components/InputText";
import Button from "../components/Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../components/MovieList";
import useFetchMovie from "../hooks/useFetchMovie";
import useFilterMovies from "../hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, isloading, error } = useFetchMovie();
  const { searchTerm, handleSearch, filteredMovies, setSearchTerm } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InpuText
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Buscar filmes..."
          />
          <Button
          onClick={handleSearch} 
          variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {isloading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;

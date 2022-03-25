import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Poster from "../../components/Poster/Poster";
import api from "../../service/api";
import * as S from "./HomePage.styles";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function requestMovies() {
      const { data } = await api.get<Movie[]>("/movie");
      const sortedData = data.sort((a, b) =>
        a.user_rating < b.user_rating ? 1 : -1
      );
      setMovies(sortedData);
    }
    requestMovies();
  }, []);

  return (
    <S.Container>
      <h2>App Movies</h2>
      <S.Movies>
        {!!movies.length
          ? movies?.map((movie) => (
              <Link key={`${movie._id}`} to={`/movie/${movie._id}`}>
                <Poster movie={movie} />
              </Link>
            ))
          : "Loading"}
      </S.Movies>
    </S.Container>
  );
}

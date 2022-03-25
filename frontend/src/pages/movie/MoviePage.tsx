import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import Poster from "../../components/Poster/Poster";

import api from "../../service/api";
import * as S from "./MoviePage.styles";

export default function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function requestMovie() {
      const { data } = await api.get<Movie>(`/movie/${id}`);
      setMovie(data);
    }
    requestMovie();
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <S.Container>
            <Link to="/">{"<"}</Link>
            <S.Content>
              <Poster movie={movie} />
              <MovieCard movie={movie} />
            </S.Content>
          </S.Container>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}

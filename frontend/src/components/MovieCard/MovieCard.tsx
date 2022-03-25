import * as S from "./MovieCard.styles";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <S.Container>
      <p>
        Title: <strong>{movie.title}</strong>
      </p>
      <p>
        Release Date: <strong>{movie.release_date}</strong>
      </p>
      <p>
        Rating: <strong>{movie.user_rating}</strong>
      </p>
      <p>Plot: {movie.plot}</p>
    </S.Container>
  );
}

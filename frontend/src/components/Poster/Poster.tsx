import * as S from "./Poster.styles";

interface PosterProps {
  movie: Movie;
}

export default function Poster({ movie }: PosterProps) {
  const { title, poster_image, user_rating } = movie;

  return (
    <S.Container>
      <S.Rating>{user_rating}</S.Rating>
      <S.Image src={`${poster_image}`} alt={`${title}`} />
    </S.Container>
  );
}

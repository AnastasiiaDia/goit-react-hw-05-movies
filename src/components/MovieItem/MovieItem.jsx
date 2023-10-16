import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import { useRef } from 'react';
import { ImageWrapper, InfoWrapper, LinkStyled, Ul } from './MovieItem.styled';
import { Container } from 'components/App.styled';

const BASE_IMG = `http://image.tmdb.org/t/p/w300`;

const MovieItem = ({ movie }) => {
  const location = useLocation();
  const back = useRef(location.state?.from ?? `/`);
  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;
  if (!movie) {
    return <Loader />;
  }
  return (
    <Container>
      <LinkStyled to={back.current} className="go-back">
        Go back
      </LinkStyled>
      <ImageWrapper>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        <InfoWrapper>
          <h2>{title}</h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <p>Release date: {release_date}</p>
          <p>Rating: {vote_average}</p>
          <p>Genres:</p>
          <Ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Ul>
        </InfoWrapper>
      </ImageWrapper>
    </Container>
  );
};

export default MovieItem;

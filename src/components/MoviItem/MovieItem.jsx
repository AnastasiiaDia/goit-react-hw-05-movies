import { Link, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import { useRef } from 'react';

const BASE_IMG = `http://image.tmdb.org/t/p/w300`;

const MovieItem = ({ movie }) => {
  const location = useLocation();
  const back = useRef(location.state?.from ?? `/`);
  const { title, overwiew, genres, release_date, vote_average, poster_path } =
    movie;
  if (!movie) {
    return <Loader />;
  }
  return (
    <>
      <Link to={back.current}>Go back</Link>
      <object data={`${BASE_IMG}${poster_path}`} type="image/jpeg">
        <img src="https://pixy.org/src/447/4476962.jpeg" alt={title} />
      </object>
      <span>
        <h2>{title}</h2>
        <p>{overwiew}</p>

        <p>Release date: {release_date}</p>
        <p>Rating: {vote_average}</p>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </span>
    </>
  );
};

export default MovieItem;

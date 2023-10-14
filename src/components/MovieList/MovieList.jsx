import React from 'react';
import { Link } from 'react-router-dom';
import MovieItem from '../MoviItem/MovieItem';

const MovieList = ({ movie }) => {
  return (
    <>
      <MovieItem movie={movie} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieList;

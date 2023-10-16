import React from 'react';
import { Link } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import { MovieListStyled } from './MovieList.styled';

const MovieList = ({ movie }) => {
  return (
    <>
      <MovieItem movie={movie} />
      <MovieListStyled>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </MovieListStyled>
    </>
  );
};

export default MovieList;

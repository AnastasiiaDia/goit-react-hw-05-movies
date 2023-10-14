import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BASE_IMG = `https://image.tmdb.org/t/p/w200`;

const SearchMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <img src={`${BASE_IMG}${poster_path}`} alt={title} />
              {title && title.substring(0, 20)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchMovieList;

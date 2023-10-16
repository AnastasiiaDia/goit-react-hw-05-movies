import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchMovieListStyled } from './SearchMovieList.styled';

const BASE_IMG = `https://image.tmdb.org/t/p/w200`;

const SearchMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <SearchMovieListStyled>
        {movies.map(({ title, id, poster_path, name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <img
                src={`${BASE_IMG}${poster_path}`}
                width={200}
                alt={name ?? title}
              />
            </Link>
          </li>
        ))}
      </SearchMovieListStyled>
    </>
  );
};

export default SearchMovieList;

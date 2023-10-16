import React from 'react';
import { SearchImputStyled } from './SearchMoviersForm.styled';

const SearchMoviesForm = ({ handleQuery, queryParam, setPage }) => {
  const onSearch = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    console.log(query);
    handleQuery(nextParams);
  };
  return (
    <SearchImputStyled
      type="text"
      value={queryParam}
      onChange={onSearch}
      placeholder="Search for a movie"
    />
  );
};

export default SearchMoviesForm;

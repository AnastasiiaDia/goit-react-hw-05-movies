import React from 'react';

const SearchMoviesForm = ({ handleQuery, queryParam, setPage }) => {
  const onSearch = e => {
    const query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    console.log(query);
    handleQuery(nextParams);
    // setPage(1);
  };
  return (
    <input
      type="text"
      value={queryParam}
      onChange={onSearch}
      placeholder="Search for a movie"
    />
  );
};

export default SearchMoviesForm;
// const [searchParams, setSearchParams] = useSearchParams();

import LoadMore from 'components/LoadMore/LoadMore';
import Loader from 'components/Loader';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [queryText, setQueryText] = useSearchParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  const queryParam = queryText.get('query') ?? '';
  console.log(queryParam);
  useEffect(() => {
    if (!queryParam) return setMovies([]);
    const onSearchMovie = async (querty, page) => {
      setLoading(true);
      try {
        const { results, total_result, total_pages } = await getSearchMovie(
          querty,
          page
        );
        if (page === 1) {
          setMovies(results);
        } else {
          setMovies(prevMovies => [...prevMovies, results]);
          setLoadMore(total_pages < Math.ceil(total_result / 20));
        }
        setLoadMore(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
    onSearchMovie(queryParam, page);
  }, [page, queryParam]);
  useEffect(() => {
    if (!queryParam) return setLoadMore(false);
  }, [queryParam]);

  const handleQuery = querry => {
    setQueryText(querry);
  };
  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <section>
      <div className="container">
        <SearchMoviesForm
          handleQuery={handleQuery}
          queryParam={queryParam}
          setPage={setPage}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            {movies.length !== 0 && <h2>Movies: '{queryParam}'</h2>}
            <SearchMovieList movies={movies} />
            {loadMore && <LoadMore onClick={onClick} />}
          </>
        )}
        {error && <h1>Error</h1>}
      </div>
    </section>
  );
};
export default Movie;

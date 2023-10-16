import { getMovies } from 'services/api';
import HomeList from 'components/HomeList/HomeList';
import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';

function Home() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const { results } = await getMovies();
        setLoading(true);
        setMovies(results);
        setError(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    data();
  }, []);

  return (
    <>
      <h1 className="titles">Trending today:</h1>
      {error && <p>{error.message}</p>}
      {loading ? <HomeList movies={movies} /> : <Loader />}
    </>
  );
}
export default Home;

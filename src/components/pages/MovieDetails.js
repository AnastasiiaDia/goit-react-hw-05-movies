import Loader from 'components/Loader';
import MovieList from 'components/MovieList/MovieList';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
  //   return <div>MovieDetails</div>;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const detailMovie = async id => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(true);
      }
    };
    detailMovie(movieId);

    return () => {
      detailMovie(movieId);
    };
  }, [movieId]);
  return (
    <>
      <section>
        <div className="container">
          {error && <div className="alert alert-danger">Error</div>}
          {loading ? <MovieList movie={movie} /> : <Loader />}
        </div>
      </section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

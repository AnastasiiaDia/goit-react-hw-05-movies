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
      <h1>Trending today:</h1>
      {error && <p>{error.message}</p>}
      {loading ? <HomeList movies={movies} /> : <Loader />}
    </>
  );
}
export default Home;

// fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWUxNDI0ZTk3ZDY2Nzg3YmY4OThjYjQ3MTk2MTE5MCIsInN1YiI6IjY1MWZlZDZlZWE4NGM3MDE0ZWZmMzZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jpSyJk-iw5zq111EFHic5OJ_V_xPlsos-S45_2T5b6M',
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     setFilms(data.results);
//   });

// {
/* <ul>
        {movies &&
          movies.map(movie => {
            console.log(movie);
            const title = movie.title ?? movie.name;

            return (
              <li>
                <a href={movie.id}>{title}</a>
              </li>
            );
          })}
      </ul> */
// }

// import { Header } from '../components/Header/Header';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Movie from './pages/Movie';
// import MovieDetails from './pages/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import SharedLayout from './SharedLayout/SharedLayout';

// import Loader from './Loader';

const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movie'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Loader = lazy(() => import('./Loader'));

export function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movie />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

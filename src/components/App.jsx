import { Header } from '../components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

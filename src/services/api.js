import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0ae1424e97d66787bf898cb471961190';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/all/day`);
  return data;
};

export const getSearchMovie = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&page=${page}`
  );
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`);
  return data;
};

export const getCreditsCastMovie = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?`);
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?`);
  return data;
};

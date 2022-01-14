import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=91a2d9feb4ef3e19067aa4b1a3fbeda5';

export const getPopularMovies = async () => {
  const res = await axios.get(`${baseUrl}/movie/popular?${apiKey}`);
  return res.data.results;
};
export const getUpcomingMovies = async () => {
  const res = await axios.get(`${baseUrl}/movie/upcoming?${apiKey}`);
  return res.data.results;
};

export const getPopularTv = async () => {
  const res = await axios.get(`${baseUrl}/tv/popular?${apiKey}`);
  return res.data.results;
};
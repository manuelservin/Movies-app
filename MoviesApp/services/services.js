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
export const getFamilyMovies = async () => {
  const res = await axios.get(
    `${baseUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  return res.data.results;
};

export const getPopularTv = async () => {
  const res = await axios.get(`${baseUrl}/tv/popular?${apiKey}`);
  return res.data.results;
};

export const getDocumentaries = async () => {
  const res = await axios.get(
    `${baseUrl}/discover/movie?${apiKey}&with_genres=99`,
  );
  return res.data.results;
};

export const getMovieDetail = async id => {
  const res = await axios.get(`${baseUrl}/movie/${id}?${apiKey}`);
  return res.data;
};

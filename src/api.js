require("dotenv").config();

const baseURLMovie = `https://api.themoviedb.org/3/movie/`;
const baseURLTV = "https://api.themoviedb.org/3/tv/";

const apiKey = process.env.REACT_APP_TMDB_API;
//console.log(apiKey);
export const popularMoviesURL = () =>
  `${baseURLMovie}popular?api_key=${apiKey}&language=en-US&page=1`;

export const movieDetailURL = (movie_id) =>
  `${baseURLMovie}${movie_id}?api_key=${apiKey}&language=en-US`;

export const popularTVShowsURL = () =>
  `${baseURLTV}popular?api_key=${apiKey}&language=en-US`;

export const tvShowDetailURL = (tvShow_id) =>
  `${baseURLTV}${tvShow_id}?api_key=${apiKey}&language=en-US`;

//console.log(popularMoviesURL());

/* 
  ------IMPORTANT------
  poster url

  https://image.tmdb.org/t/p/original/
*/

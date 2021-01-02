import axios from "axios";

//API URLs
import { popularMoviesURL, popularTVShowsURL } from "../api";

const loadMovies = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  const popularMovies = await axios.get(popularMoviesURL());
  const popularTvShows = await axios.get(popularTVShowsURL());

  dispatch({
    type: "LOAD_POPULAR_MOVIES",
    payload: {
      popular: popularMovies.data,
      popularTV: popularTvShows.data,
    },
  });
};

export default loadMovies;

import axios from "axios";

//URL
import { movieDetailURL, tvShowDetailURL, searchURL } from "../api.js";

export const loadDetail = (movie_id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  const movieDetail = await axios.get(movieDetailURL(movie_id));

  dispatch({
    type: "LOAD_MOVIE_DETAIL",
    payload: {
      detail: movieDetail.data,
    },
  });
};

export const loadTvShowDetail = (tvShow_Id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  const tvShowDetail = await axios.get(tvShowDetailURL(tvShow_Id));

  dispatch({
    type: "LOAD_TV_SHOW_DETAIL",
    payload: {
      tvShowDetail: tvShowDetail.data,
    },
  });
};

export const fetchSearch = (input) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  const searchOutputMovie = await axios.get(searchURL("movie", input));
  const searchOutputTvShow = await axios.get(searchURL("tv", input));

  const tempArray = searchOutputMovie.data.results.concat(
    searchOutputTvShow.data.results
  );

  dispatch({
    type: "SEARCH",
    payload: {
      searchOutput: tempArray,
    },
  });
};

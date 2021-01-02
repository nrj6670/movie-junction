const initState = {
  movieDetail: [],
  searchOutput: [],
  isLoading: true,
  loadingSearchResults: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload.detail,
        isLoading: false,
      };
    case "LOAD_TV_SHOW_DETAIL":
      return {
        ...state,
        movieDetail: action.payload.tvShowDetail,
        isLoading: false,
      };
    case "SEARCH":
      return {
        ...state,
        searchOutput: action.payload.searchOutput,
        loadingSearchResults: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_SEARCH_RESULTS":
      return {
        ...state,
        loadingSearchResults: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;

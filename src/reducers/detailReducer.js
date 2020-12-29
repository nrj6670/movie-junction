const initState = { movieDetail: [], isLoading: true };

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
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;

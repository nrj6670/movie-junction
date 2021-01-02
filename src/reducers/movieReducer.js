const initState = { popular: [], popularTV: [], loadingData: true };

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_POPULAR_MOVIES":
      return {
        ...state,
        popular: action.payload.popular.results,
        popularTV: action.payload.popularTV.results,
        loadingData: false,
      };
    case "LOADING_INITIAL_DATA": {
      return {
        ...state,
        loadingData: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default movieReducer;

const initState = { popular: [], popularTV: [], isLoading: true };

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_POPULAR_MOVIES":
      return {
        ...state,
        popular: action.payload.popular.results,
        popularTV: action.payload.popularTV.results,
        isLoading: false,
      };
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
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

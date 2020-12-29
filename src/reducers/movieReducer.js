const initState = { popular: [], popularTV: [] };

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_POPULAR_MOVIES":
      return {
        ...state,
        popular: action.payload.popular.results,
        popularTV: action.payload.popularTV.results,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default movieReducer;

import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetail: detailReducer,
});

export default rootReducer;

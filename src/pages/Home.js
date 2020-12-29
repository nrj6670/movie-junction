import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//styled components
import styled from "styled-components";

//animation

import { motion } from "framer-motion";

//components
import Movie from "../components/Movie";
import MovieDetails from "../components/MovieDetails";

//ACTIONS
import loadMovies from "../actions/movieAction";

//use history
import { useLocation } from "react-router-dom";

const Home = () => {
  // EXTRACTING STATE
  const { popular, popularTV } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  //History
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //USE EFFECT
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <MovieList>
      {pathID && <MovieDetails />}
      <h2 className="category">Popular movies</h2>
      <Movies>
        {popular.map((data) => (
          <Movie
            title={data.title}
            release={data.release_date}
            image={data.poster_path}
            type="movie"
            id={data.id}
            key={data.id}
          />
        ))}
      </Movies>

      <h2 className="category">Popular TV shows</h2>
      <Movies>
        {popularTV.map((data) => (
          <Movie
            title={data.name}
            release={data.first_air_date}
            image={data.poster_path}
            type="tv_show"
            id={data.id}
            key={data.id}
          />
        ))}
      </Movies>
    </MovieList>
  );
};

const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
  .category {
    padding: 3rem 2rem;
    color: white;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;
`;

export default Home;

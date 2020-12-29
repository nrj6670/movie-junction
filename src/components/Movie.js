import React from "react";
import { useDispatch } from "react-redux";

//styled components
import styled from "styled-components";

//Framer motion
import { motion } from "framer-motion";

//action
import { loadDetail, loadTvShowDetail } from "../actions/detailAction";

//react router
import { Link } from "react-router-dom";

const Movie = ({ title, release, image, id, type }) => {
  const dispatch = useDispatch();
  // Event handler
  const getMovieDetail = () => {
    document.body.style.overflow = "hidden";
    switch (type) {
      case "movie":
        dispatch(loadDetail(id));
        break;
      case "tv_show":
        dispatch(loadTvShowDetail(id));
        break;
      default:
        break;
    }
  };

  return (
    <MovieCard onClick={getMovieDetail}>
      <Link to={`/movie/${id}`}>
        <div className="stats">
          <h1>{title}</h1>
          <p>{release}</p>
        </div>
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title} />
      </Link>
    </MovieCard>
  );
};

const MovieCard = styled(motion.div)`
  max-height: 60vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  cursor: pointer;
  .stats {
    height: 25%;
    h1 {
      padding: 1rem;
      color: black;
    }
    p {
      padding-top: 0rem;
      color: darkgray;
    }
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: fit;
  }
`;

export default Movie;

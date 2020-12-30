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

//location
import { useLocation } from "react-router-dom";

const Card = ({ title, release, image, id, type }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

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
      <Link to={`/search/${pathname}/${id}`}>
        <div className="stats">
          <h1>{title}</h1>
          <p>{release}</p>
        </div>
        {image ? (
          <img
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt={title}
          />
        ) : (
          <p>Preview not available</p>
        )}
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
  transition: all 0.2s ease;
  transform-style: preserve-3d;
  .stats {
    height: 25%;
    h1 {
      padding-top: 1rem;
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

  &:hover {
    transform: rotateY(10deg) rotateX(2deg);
  }

  @media screen and (max-width: 739px) {
    &:hover {
      transform: rotateY(6deg) rotateX(1deg);
    }
  }

  @media screen and (max-width: 509px) {
    &:hover {
      transform: rotateY(2deg) rotateX(0.5deg);
    }
  }
`;

export default Card;

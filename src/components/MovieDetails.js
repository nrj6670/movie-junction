import React from "react";
import { useSelector } from "react-redux";

//styled-components
import styled from "styled-components";

//framer-motion
import { motion } from "framer-motion";

//react router
import { useHistory } from "react-router-dom";

const MovieDetails = () => {
  //Extracting state
  const { movieDetail, isLoading } = useSelector((state) => state.movieDetail);

  //history
  const history = useHistory();

  //Event handler
  const exitEventHandler = (e) => {
    if (e.target.classList.contains("card-container")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="card-container" onClick={exitEventHandler}>
          <Detail>
            <Info>
              <h2>
                {movieDetail.title ? movieDetail.title : movieDetail.name}
              </h2>
              <div className="rating-card">
                <p>
                  Rating :{" "}
                  {`${movieDetail.vote_average}(${movieDetail.vote_count})`}
                </p>
              </div>
            </Info>
            <div className="media">
              <img
                src={`https://image.tmdb.org/t/p/w780${movieDetail.poster_path}`}
                alt=""
              />
            </div>
            <p>{movieDetail.overview}</p>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  overflow-y: scroll;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #01b4e4;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  background: white;
  position: absolute;
  top: 2%;
  left: 10%;
  padding: 1rem 2rem;
  color: black;
  border-radius: 20px;
  z-index: 10;

  .media {
    width: 90%;
    margin: auto;
    img {
      width: 100%;
      object-fit: fit;
    }
  }

  p {
    color: black;
  }
`;

const Info = styled(motion.div)`
  h2 {
    padding-left: 0rem;
  }

  p {
    font-size: 2rem;
    color: darkgray;
  }
`;

export default MovieDetails;

import styled from "styled-components";
import { motion } from "framer-motion";

const LoadingCard = () => {
  return (
    <Loading>
      <div class="card-title">
        <span class="loading"></span>
      </div>
      <div class="card-release-date">
        <span class="loading"></span>
      </div>
      <div class="card-image">
        <span class="loading"></span>
      </div>
    </Loading>
  );
};

const Loading = styled(motion.div)`
  min-height: 60vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-title {
    width: 100%;
    height: 30%;
    position: relative;
    background: rgb(184, 184, 184);
  }

  .card-release-date {
    width: 60%;
    height: 20%;
    margin: 2rem 0rem;
    position: relative;
    background: rgb(184, 184, 184);
  }

  .card-image {
    width: 100%;
    height: 50%;
    position: relative;
    background: rgb(184, 184, 184);
  }

  .card-image::after,
  .card-release-date::after,
  .card-title::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: loadingEffect 0.8s infinite;
  }

  @keyframes loadingEffect {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export default LoadingCard;

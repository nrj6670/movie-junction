import styled from "styled-components";

//social link icons
import instagram from "../img/instagram 1.svg";
import twitter from "../img/twitter 1.svg";
import youtube from "../img/youtube-symbol 1.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-text">
          <span>Movie Juction</span> &copy;2021 created by{" "}
          <span>Neeraj Shakure</span>
        </div>

        <div className="footer-social">
          <img src={instagram} alt="instagram-handle" />
          <img src={twitter} alt="twitter-handle" />
          <img src={youtube} alt="youtube-handle" />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  min-height: 10vh;
  background: #778ca3;
  padding: 2rem;

  .footer-container {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-text {
    color: white;
    font-size: 1.5rem;
    flex: 5 1 40rem;
    span {
      color: white;
      font-weight: bold;
    }
  }

  .footer-social {
    flex: 1 1 20rem;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 706px) {
    .footer-text {
      text-align: center;
    }
    .footer-social {
      padding-top: 2rem;
    }
  }
`;

export default Footer;

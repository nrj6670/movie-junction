import { useState } from "react";
import { useHistory } from "react-router-dom";

//styled-component and framer motion
import styled from "styled-components";
import { motion } from "framer-motion";

//images
import popcorn from "../img/popcorn.png";

//redux
import { useDispatch } from "react-redux";

//action
import { fetchSearch } from "../actions/detailAction";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //state
  const [textInput, setTextInput] = useState("");
  //Event handler
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    history.push(`/search/${textInput}`);
    setTextInput("");
  };

  return (
    <Header>
      <StyledNav>
        <div className="logo">
          <h1>Movie Junction</h1>
          <img className="popcorn-img" src={popcorn} alt="popcorn-png" />
        </div>
        <div className="search-bar">
          <form className="search-container">
            <input value={textInput} onChange={inputHandler} type="text" />
            <button onClick={submitHandler} type="submit">
              Submit
            </button>
          </form>
        </div>
      </StyledNav>
    </Header>
  );
};

const Header = styled(motion.div)`
  min-height: 15vh;
  background: rgba(0, 0, 0, 0.3);
  color: white;
`;

const StyledNav = styled(motion.div)`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  .logo {
    display: flex;
    flex: 1 1 40rem;
    align-items: center;
    img {
      height: 6rem;
      width: 6rem;
    }
  }
  .search-bar {
    flex: 2 1 40rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    input {
      flex: 2 1 40rem;
      border: none;
      padding: 0.7rem 1rem;
      outline: none;
      border-radius: 14px;
    }
    button {
      flex: 1 1 40rem;
      padding: 0.7rem 2rem;
      border: none;
      outline: none;
      border-radius: 5px;
      background: linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%);
      color: white;
      margin-left: 2rem;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 910px) {
    .logo {
      width: 100%;
      justify-content: center;
    }
    .search-bar {
      margin-top: 2rem;
      width: 100%;
      input {
        width: 100%;
        margin-bottom: 1rem;
      }
      button {
        margin-left: 30%;
      }
    }
  }
`;

export default Nav;

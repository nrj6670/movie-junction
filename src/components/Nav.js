import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
          <Link to="/">
            <h1>Movie Junction</h1>
          </Link>
          <Link to="/">
            <img className="popcorn-img" src={popcorn} alt="popcorn-png" />
          </Link>
        </div>
        <div className="search-bar">
          <form>
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

    a {
      color: white;
    }

    img {
      height: 6rem;
      width: 6rem;
    }
  }
  .search-bar {
    flex: 2 1 40rem;
    form {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      input {
        width: 60%;
        border: none;
        padding: 0.7rem 1rem;
        outline: none;
        border-radius: 14px;
      }
      button {
        padding: 0.5rem 2rem;
        border: none;
        outline: none;
        border-radius: 5px;
        background: linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%);
        color: white;
        margin-left: 2rem;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 911px) {
    .logo {
      width: 100%;
      justify-content: center;
    }
    .search-bar {
      margin-top: 2rem;
      form {
        align-items: center;
        input {
          min-width: 75%;
        }
        button {
          margin-top: 1rem;
          min-width: 25%;
          padding: 0.7rem 2rem;
        }
      }
    }
  }
`;

export default Nav;

import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <Header>
      <StyledNav>
        <div className="logo">
          <img src="" alt="" />
          <h1>Movie Junction</h1>
        </div>
      </StyledNav>
    </Header>
  );
};

const Header = styled(motion.div)`
  min-height: 10vh;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 0rem;
  position: sticky;
  top: 0;
  left: 0;
  color: white;
`;

const StyledNav = styled(motion.div)`
  width: 90%;
  margin: auto;
  display: flex;
`;

export default Nav;

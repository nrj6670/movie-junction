import { useSelector } from "react-redux";

import styled from "styled-components";
import { motion } from "framer-motion";

//components
import Card from "../components/Card";

//location
import { useLocation } from "react-router-dom";

//components
import MovieDetails from "../components/SearchedMovieDetail";

const SearchResult = () => {
  //extracting search results
  const { searchOutput, isLoading } = useSelector((state) => state.movieDetail);

  //fetching location to load movie detail
  const location = useLocation();
  const pathID = location.pathname.split("/")[3];

  return (
    <>
      {!isLoading && (
        <SearchList>
          {pathID && <MovieDetails />}
          <h2 className="header">Search result : </h2>
          <Container>
            {searchOutput.length ? (
              searchOutput.map((data) => (
                <Card
                  title={data.name ? data.name : data.title}
                  release={
                    data.release_date ? data.release_date : data.first_air_date
                  }
                  image={data.poster_path}
                  type={data.title ? "movie" : "tv_show"}
                  id={data.id}
                  key={data.id}
                />
              ))
            ) : (
              <h1>No results found</h1>
            )}
          </Container>
        </SearchList>
      )}
    </>
  );
};

const SearchList = styled(motion.div)`
  padding: 0rem 4rem;
  padding-bottom: 3rem;
  .header {
    color: white;
    padding: 3rem 0rem;
  }
`;

const Container = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;
  perspective: 1000px;
`;

export default SearchResult;

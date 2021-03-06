import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Components
import ScrollTop from "../components/ScrollTop";

// Movie Details Component
const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  // Our State
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // Use Effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      <ScrollTop />
      {movie && ( // This wrapper checks to make sure movie is available since it takes a second to load the data
        <MovieDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="Main movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </MovieDetails>
      )}
    </>
  );
};

// Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

// Styled Components
const MovieDetails = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 2.75rem;
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  @media (max-width: 500px) {
    padding: 2rem;
  }
  @media (max-width: 400px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
`;

export default MovieDetail;

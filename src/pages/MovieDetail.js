import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;

  // Our State
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // Use Effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
};

export default MovieDetail;

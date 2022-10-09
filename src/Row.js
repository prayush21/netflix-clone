import axios from "./axiosServiceHandler";
import React, { useEffect, useState } from "react";
import "./Row.css";
import { IMG_BASE_URL } from "./apiConstants";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
    return response;
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(movie => 
            (isLargeRow && movie.poster_path || !isLargeRow && movie.backdrop_path) && 
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${IMG_BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={`${movie.name}-poster`}
            />
          
        )}
      </div>
    </div>
  );
};

export default Row;

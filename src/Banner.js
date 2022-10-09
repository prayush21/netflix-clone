import axios from "./axiosServiceHandler";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";

const Banner = () => {

    const  [coverMovie, setCoverMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setCoverMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();

    }, []);

    console.log(coverMovie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${coverMovie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{coverMovie?.name || coverMovie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">{coverMovie?.overview}</div>
      </div>

      <div className="banner__fadeBottom">

      </div>
    </header>
  );
};

export default Banner;

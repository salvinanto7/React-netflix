import React, { useState, useEffect } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
import YouTube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        //console.log(response.data.results[0])
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  });
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0]);
        } else {
          console.log("trailer not available");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          //console.log(obj)
          return (
            <div >
              <div className={props.isSmall ? "small-flip-card" : "flip-card"}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                          onClick={() => handleMovie(obj.id)}
                          src={`${imageUrl + obj.backdrop_path}`}
                          alt=""
                          className={props.isSmall ? "small-poster" : "poster"}
                        />
                    </div>
                    <div className="flip-card-back">
                      <p>{obj.title?obj.title:obj.name}</p>
                      <p>Rating: {obj.vote_average}/10</p>
                      <p>Rating count: {obj.vote_count}</p>
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  );
}

export default Rowpost;

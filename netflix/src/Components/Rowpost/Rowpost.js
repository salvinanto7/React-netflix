import React, { useState, useEffect } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/constants";
import YouTube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState("");
  const [obj,setObj] = useState({});
  const [review,setReview] = useState([]);
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
  const handleMovie = (obj) => {
    //console.log(obj.id);
    axios
      .get(`movie/${obj.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0]);
          setObj(obj)
        } else {
          console.log("trailer not available");
        }
      });
  };
  const handleClose = ()=>{
    setUrlid(null)
    setObj({})

  };
  const handleReviewRequest = (obj) =>{
    axios
      .get(`movie/${obj.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setReview(response.data.results[0]);
        } else {
          console.log("review not available");
        }
      })
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          //console.log(obj)
          return (
            <div >
              <div className={props.isSmall ? "small-flip-card" : "flip-card"} onClick={() => handleMovie(obj)}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
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
      {urlid&&<button className="close-section-button" onClick={handleClose}>X</button>}
      <div className="expand"> 
      <div className="details" id="details" >
        {obj.id?<h2>{obj.title?obj.title:obj.name}</h2>:''}
        {console.log(obj.id)}
        {obj.id?<p>Rating ★ : {obj.vote_average}/10 </p>:''}
        {obj.id?<p>Rating count : {obj.vote_count}</p>:''}
        {obj.id?<p>Language : {obj.original_language=="en"?"English":"Unknown"}</p>:''}
        {obj.id?<p>{obj.overview}</p>:''}
        {obj.id?<button className="review-button" onClick={()=>handleReviewRequest(obj)}>See Reviews</button>:''}
      </div>
      <div className="video">
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
      </div>
      </div>
      <div className="Review">
        <div className="review-box">
          {
          review.map((obj)=>{
            return(
              <div>
                <p>{obj.author}</p>
                <p>{obj.content}</p>
                <p>{obj.created_at}</p>
              </div>
            );
          })
        }
        </div>
      </div>
    </div>
  );
}

export default Rowpost;

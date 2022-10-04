
import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'
import YouTube from 'react-youtube';

function Rowpost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlid] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      //console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      alert("Network Error")
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
      setUrlid(response.data.results[0])
      }else{
        console.log("trailer not available")
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>{
        return(
        <img onClick={()=>handleMovie(obj.id)} src= {`${imageUrl+obj.backdrop_path}`} alt="" className={props.isSmall?'small-poster':'poster'}/>
        )
        })}
      </div>
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default Rowpost

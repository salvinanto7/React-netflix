import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/constants'
function Rowpost(props) {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      alert("Network Error")
    })
  })
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>{
        return(
        <img src= {`${imageUrl+obj.backdrop_path}`} alt="" className={props.isSmall?'small-poster':'poster'}/>
        )
        })}
      </div>
    </div>
  )
}

export default Rowpost

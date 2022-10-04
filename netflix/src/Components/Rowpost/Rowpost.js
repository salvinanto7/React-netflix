import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'
function Rowpost() {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch((err)=>{
      alert("Network Error")
    })
  },[])
  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className="posters">
        {movies.map((obj)=>{
        return(
        <img src= {`${imageUrl+obj.backdrop_path}`} alt="" className='poster'/>
        )
        })}
      </div>
    </div>
  )
}

export default Rowpost

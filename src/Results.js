import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import './Results.css'
import requests from './requests';
import axios from './axios';
import FlipMove from 'react-flip-move';
function Results({selectedOption}) {
    const [movies,setMovies]=useState([]);
useEffect(() => {
  async function fetchData(){
const request=axios.get(selectedOption);
console.log(request)
setMovies((await request).data.results);



  }
  fetchData();
  
}, [selectedOption]);

    return (
        
        <div className="results">
        <FlipMove>

            {movies.map(movie =>(
<VideoCard key={movie.id} movie={movie}/>
)
)}
        </FlipMove>

        </div>
    )
}

export default Results

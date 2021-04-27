import React, { useState, useEffect} from 'react'
import "./Row.css"
import axios from "./axios"

function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies,setMovies] = useState([]);

    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData(); 
    },[fetchUrl])

    console.log(movies) 

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map( 
                    movie => 
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <div className="image_container">
                                <img
                                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                    key={movie.id} 
                                    src={`${base_url}${
                                        isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} 
                                    alt={movie.name}
                                />
                                <div className="row_poster_hover">
                                    <h6>{movie.name|| movie.title || movie.original_name}</h6>
                                    <p>Rating:{movie.vote_average}</p>
                                    <p>{movie.release_date}</p>
                                </div> 
                            </div>
                        )     
                )}
            </div>
        </div>
    )
}

export default Row
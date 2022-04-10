
import { useState } from "react"
import { MOVIE_DETAILS } from "../constant/API"
import "../style/style.scss"

const MovieItem = ({src, ...movieData}) => {

    const [movie, setMovie] = useState([])
    function getMovie(id) {
        let url = MOVIE_DETAILS(id)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
            .catch(err => console.error(err))
        return movie;
    }
    return <>
            <li className="movie-item">
                <div className="movie-picture"><img src={src} alt="" /></div>
                <div className="movie-text">
                    <p onClick={() => getMovie(movieData.id)}>{movieData.vote_average}</p>
                    <p>{movieData.title}</p>
                    <p>{movieData.release_date}</p>
                </div>
            </li>
        </>
}

export default MovieItem;
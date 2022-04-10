import { IMAGE_BASE_URL } from "../constant/API"
const MovieCard = ({ className, ...movie }) => {

    return <div className={`movie-card ${className}`}>
            <div className="movie-introduce">
                <p className="introduce-title">{movie.title}</p>
                <p className="introduce-date">{movie.release_date}</p>
                <p className="introduce-vote">{movie.vote_average}</p>
                <p className="introduce-overview">{movie.overview ? movie.overview:'暫無資料。' }</p>
            </div>
        </div>
}

export default MovieCard;
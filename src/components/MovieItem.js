
const MovieItem = ({ src, ...movieData}) => {
    return <>
            <li className="movieItem">
                <img src={src} alt="" />
                <p>{movieData.title}</p>
                <p>{movieData.vote_average}</p>
                <p>{movieData.release_date}</p>
                <p>{movieData.overview}</p>
                <p></p>
            </li>
        </>
}

export default MovieItem;
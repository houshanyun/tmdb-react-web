
import { HOT_MOVIES } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"

const HotMovie = () => {
    let hotMovies = useGetMovies(HOT_MOVIES())
    return <>
        <ul className="hotMovie">
        {
            hotMovies.map(movieData => {
                return <MovieItem
                    {...movieData}
                    key={movieData.id}
                    src={`${imgBaseUrl}300${movieData.poster_path}`}
                />
            })
        }
        </ul>
    </>
}

export default HotMovie;
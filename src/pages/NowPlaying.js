
import { NOW_PLAYING } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"

const NowPlaying = () => {

    const nowPlaying = useGetMovies(NOW_PLAYING)

    return <>
        <ul className="nowPlaying">
        {
            nowPlaying.map(movieData => {
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

export default NowPlaying;
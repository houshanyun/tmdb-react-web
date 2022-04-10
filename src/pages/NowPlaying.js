
import { NOW_PLAYING } from "../constant/API"
import { IMAGE_BASE_URL } from "../constant/API"
import MovieItem from "../global/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"
import Title from "../global/Title"
import { itemNames } from "../constant/STRING"

const NowPlaying = () => {

    const nowPlaying = useGetMovies(NOW_PLAYING)

    return <>
        <Title home={itemNames[2]}/>
        <ul className="now-playing">
        {
            nowPlaying.map(movieData => {
                return <MovieItem
                    {...movieData}
                    key={movieData.id}
                    src={`${IMAGE_BASE_URL}w300${movieData.poster_path}`}
                />
            })
        }
        </ul>
    </>
}

export default NowPlaying;
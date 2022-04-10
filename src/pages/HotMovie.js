
import { HOT_MOVIES } from "../constant/API";
import { IMAGE_BASE_URL } from "../constant/API"
import MovieItem from "../global/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"
import LoadMovies from "../global/LoadMovies"
import Title from "../global/Title"
import { itemNames } from "../constant/STRING"

const HotMovie = () => {
    const hotMovies = useGetMovies(HOT_MOVIES())
    if (!hotMovies) return <div>loading...</div>
    return <>
        <Title home={itemNames[1]}/>
        <ul className="hot-movie">
            {
                hotMovies.map(movieData => {
                    return <MovieItem
                        {...movieData}
                        key={movieData.id}
                        src={`${IMAGE_BASE_URL}w300${movieData.poster_path}`}
                    />
                })
            }
        </ul>
        <LoadMovies />
    </>
}

export default HotMovie;
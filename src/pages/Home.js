import { WEEK_TRENDING } from "../constant/API"
import { IMAGE_BASE_URL } from "../constant/API"
import MovieItem from "../global/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"
import Title from "../global/Title"
import { itemNames } from "../constant/STRING"

const Home = () => {

    const weekTrending = useGetMovies(WEEK_TRENDING)

    return <>
        <Title home={itemNames[0]}/>
        <ul className="week-trending">
        {
            weekTrending.map(movieData => {
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

export default Home;
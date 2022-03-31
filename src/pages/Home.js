import { WEEK_TRENDING } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"

const Home = () => {

    const weekTrending = useGetMovies(WEEK_TRENDING)

    return <>
        <ul className="weekTrending">
        {
            weekTrending.map(movieData => {
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

export default Home;
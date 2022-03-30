import { UP_COMING } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
import { useGetMovies } from "../hook/MakeMovieList"

const UpComing = () => {

    const upComing = useGetMovies(UP_COMING)

    return <>
        <ul className="upComing">
        {
            upComing.map(movieData => {
                const {id, vote_average, ...upComingData} = movieData //除去評分內容、id
                return <MovieItem
                    {...upComingData} //元件內仍可用...movieData接收資料
                    key={id}
                    src={`${imgBaseUrl}300${movieData.poster_path}`}
                />
            })
        }
        </ul>
    </>
}

export default UpComing;
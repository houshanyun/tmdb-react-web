import MovieItem from "../global/MovieItem"
import { UP_COMING } from "../constant/API"
import { IMAGE_BASE_URL } from "../constant/API"
import { useGetMovies } from "../hook/MakeMovieList"
import Title from "../global/Title"
import { itemNames } from "../constant/STRING"

const UpComing = () => {

    const upComing = useGetMovies(UP_COMING)

    return <>
    <Title home={itemNames[3]}/>
        <ul className="up-coming">
        {
            upComing.map(movieData => {
                const {id, ...upComingData} = movieData //除去id
                return <MovieItem
                    {...upComingData} //元件內仍可用...movieData接收資料
                    key={id}
                    id={id}
                    src={`${IMAGE_BASE_URL}w300${movieData.poster_path}`}
                />
            })
        }
        </ul>
    </>
}

export default UpComing;
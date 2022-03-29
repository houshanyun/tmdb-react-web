import { useEffect, useState, useContext } from "react"
import { UP_COMING } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
//import { data } from "../App"


const UpComing = () => {
    //const getMovies = useContext(data)
    const [upComingMovies, setUpComingMovies] = useState([])
    function getMovies(url, setData) {
        fetch(url)
            .then(res => res.json())
            .then((data, v )=> {
                if(!Boolean(data.results)) {
                    console.log(data);
                    setData(data)
                } else {
                    console.log(data.results);
                    setData(data.results)
                }})
            .catch(err => console.error(err, "This is a Error!!!"))
    }
    useEffect(() => {
        getMovies(UP_COMING, setUpComingMovies)
    }, [])
    return <main>
        <ul className="hotMovie">
        {
            upComingMovies.map(movieData => {
                const {id, vote_average, ...upComingData} = movieData //除去評分內容、id
                return <MovieItem
                    {...upComingData} //元件內仍可用...movieData接收資料
                    key={id}
                    src={`${imgBaseUrl}300${movieData.poster_path}`}
                />
            })
        }
        </ul>
    </main>
}

export default UpComing;
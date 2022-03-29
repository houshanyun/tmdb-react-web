import { useEffect, useState, useContext } from "react"
import { HOT_MOVIES } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
//import { data } from "../App"

const HotMovie = () => {
    ///const getMovies = useContext(data)
    const [hotMovies, setHotMovies] = useState([])
    function getMovies(url, setData) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(!Boolean(data.results)) {
                    setData(data)
                } else {
                    setData(data.results)
                }})
            .catch(err => console.error(err) )
    }
    useEffect(() => {
        getMovies(HOT_MOVIES, setHotMovies)
    }, [])
    return <main>
        <ul className="hotMovie">
        {
            hotMovies.map(movieData => {
                return <MovieItem
                    {...movieData}
                    key={movieData.runtime}
                    src={`${imgBaseUrl}300${movieData.poster_path}`}
                />
            })
        }
        </ul>
    </main>
}

export default HotMovie;
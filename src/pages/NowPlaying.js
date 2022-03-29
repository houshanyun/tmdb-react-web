import { useEffect, useState, useContext } from "react"
import { NOW_PLAYING } from "../constant/API"
import { imgBaseUrl } from "../constant/API"
import MovieItem from "../components/MovieItem"
//import { data } from "../App"

const NowPlaying = () => {
    ///const getMovies = useContext(data)
    const [nowPlaying, setNowPlaying] = useState([])
    function getMovies(url, setData) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(!Boolean(data.results)) {
                    console.log(data);
                    setData(data)
                } else {
                    console.log(data.results);
                    setData(data.results)
                }})
            .catch(err => console.error(err) )
    }
    useEffect(() => {
        getMovies(NOW_PLAYING, setNowPlaying)
    }, [])
    return <main>
        <ul className="hotMovie">
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
    </main>
}

export default NowPlaying;
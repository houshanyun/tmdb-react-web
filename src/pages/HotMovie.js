
import { HOT_MOVIES } from "../constant/API";
import { IMAGE_BASE_URL } from "../constant/API"
import MovieItem from "../global/MovieItem"
import LoadMovies from "../global/LoadMovies"
import Title from "../global/Title"
import { itemNames } from "../constant/STRING"
import { useEffect, useState } from "react";

const HotMovie = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] =useState(1)
    useEffect(() => {
        fetch(HOT_MOVIES(page))
            .then(res => {
                if (!res.ok) return res.status.toString()
                return res.json()
            })
            .then(data => {
                setMovies(prev => [...prev, ...data.results])
            })
            .catch(error => console.error(error.massage))
    }, [page])
    useEffect(() => {
        console.log('updated!!!')
    }, [movies])

    if (movies.length === 0) return <div>loading...</div>
    return <>
        <Title home={itemNames[1]}/>
        <ul className="hot-movie">
            {
                movies.map(movieData => {
                    return <MovieItem
                        {...movieData}
                        key={movieData.id}
                        src={`${IMAGE_BASE_URL}w300${movieData.poster_path}`}
                    />
                })
            }
        </ul>
        <LoadMovies setPage={setPage}/>
    </>
}

export default HotMovie;
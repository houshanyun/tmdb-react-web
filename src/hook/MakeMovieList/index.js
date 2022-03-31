import { useEffect, useState } from "react"

export function useGetMovies(api) {
        const [Movies, setMovies] = useState([])
        useEffect(() => {
            fetch(api)
            .then(res => res.json())
            .then(data => {
                if(!Boolean(data.results)) {
                    setMovies(data)
                } else {
                    setMovies(data.results)
                }})
            .catch(err => console.log(err))
        }, [api])
        console.log(Movies);
        return Movies;
    }

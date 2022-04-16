import { useEffect, useState } from "react"

export function useGetMovies(api) {
        const [Movies, setMovies] = useState([])
        useEffect(() => {
            fetch(api)
            .then(res => res.json())
            .then(data => {
                if(!data.results) {
                    setMovies(data)
                } else {
                    setMovies(data.results)
                }})
            .catch(err => console.error(err))
        }, [api])
        return Movies;
    }

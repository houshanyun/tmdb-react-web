import { apiWeekBaseUrl, imgBaseUrl } from "./constant/API"
import { useEffect, useState } from "react"
import MovieItem from "./components/MovieItem"
function App() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(apiWeekBaseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setMovies(data.results)
            })
    }, [])
    return (
        <div className="App">
            <nav>

            </nav>
            <div className="test">
                <form>
                    <input type="search" className='movieSearch' id="search"/>
                    <label htmlFor="search" className="searchBtn">電影搜尋</label>
                </form>
            </div>
            <main>
                <ul className="weekHotMovie">
                    {
                        movies.map(item => {
                            return <>
                                <MovieItem
                                    key={item.id.toString()}
                                    src={`${imgBaseUrl}300${item.poster_path}`}
                                    date={item.release_date}
                                    title={item.title}
                                    overview={item.overview}
                                />
                            </>
                        })
                    }
                </ul>
            </main>
        </div>
    );
}

export default App;

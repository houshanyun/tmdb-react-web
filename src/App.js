//import { createContext } from "react"
import { Routes, Route, Link, Outlet } from "react-router-dom"
import HotMovie from "./pages/HotMovie"
import Search from "./components/Search"
import UpComing from "./pages/UpComing"
import NowPlaying from "./pages/NowPlaying"
import Home from "./pages/Home"
import { useEffect, useState } from "react";
import { TW } from "./constant/API";

//export const data = createContext()

const App = () => {
    const [video, setVideo] = useState([])
    function getVideo(id) {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}${TW}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setVideo(data)
            })
    }

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
    return (
        <div className="App">
            <nav>
                <ul className="navItem">
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/HotMovie">熱門電影</Link></li>
                    <li><Link to="/NowPlaying">現正熱映</Link></li>
                    <li><Link to="/UpComing">即將上映</Link></li>
                </ul>
                <Outlet />
            </nav>
            <div className="test">
                <Search />
            </div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/HotMovie" element={<HotMovie />} />
                    <Route path="/NowPlaying" element={<NowPlaying />} />
                    <Route path="/UpComing" element={<UpComing />} />
                </Routes>
                {/* <data.Provider value={getMovies}>
                    <HotMovie />
                    <TopRated />
                    <UpComing />
                </data.Provider> */}
        </div>
    )
}

export default App;

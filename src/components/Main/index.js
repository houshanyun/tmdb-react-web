
import { Routes, Route } from "react-router-dom"
import HotMovie from "../../pages/HotMovie"
import UpComing from "../../pages/UpComing"
import NowPlaying from "../../pages/NowPlaying"
import Home from "../../pages/Home"
import "./index.scss"



const Main = () => {

    return <main>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/HotMovie" element={<HotMovie />} />
                <Route path="/NowPlaying" element={<NowPlaying />} />
                <Route path="/UpComing" element={<UpComing />} />
            </Routes>
    </main>
}

export default Main;
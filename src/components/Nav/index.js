import { Link, Outlet } from "react-router-dom"
import "./index.scss"

const Nav = () => {
    return <nav>
        <div className="hamburger"></div>
        <ul className="nav-items">
            <li className="nav-item"><Link to="/">熱門趨勢</Link></li>
            <li className="nav-item"><Link to="/HotMovie">流行電影</Link></li>
            <li className="nav-item"><Link to="/NowPlaying">現正熱映</Link></li>
            <li className="nav-item"><Link to="/UpComing">即將上映</Link></li>
        </ul>
        {/* <Search /> */}
        <Outlet />
    </nav>
}

export default Nav;
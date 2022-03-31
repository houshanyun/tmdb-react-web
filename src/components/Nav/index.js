import { Link, Outlet } from "react-router-dom"
import Search from "../Search";
import "./index.scss"

const Nav = () => {
    return <nav className="bg-1">
        <div className="hamburger"></div>
        <ul className="navItem">
            <li className="pt-3 pb-3"><Link to="/">熱門趨勢</Link></li>
            <li className="pt-3 pb-3"><Link to="/HotMovie">流行電影</Link></li>
            <li className="pt-3 pb-3"><Link to="/NowPlaying">現正熱映</Link></li>
            <li className="pt-3 pb-3"><Link to="/UpComing">即將上映</Link></li>
        </ul>
        <Search />
        <Outlet />
    </nav>
}

export default Nav;
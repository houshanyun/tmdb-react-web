import { Link, Outlet } from "react-router-dom"

const Nav = () => {
    return <nav>
        <ul className="navItem">
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/HotMovie">熱門電影</Link></li>
            <li><Link to="/NowPlaying">現正熱映</Link></li>
            <li><Link to="/UpComing">即將上映</Link></li>
        </ul>
        <Outlet />
    </nav>
}

export default Nav;
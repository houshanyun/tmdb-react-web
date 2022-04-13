import { useReducer } from 'react'
import { Link, Outlet } from "react-router-dom"
import { itemNames } from '../../constant/STRING'
import "./index.scss"

function reducer(state, active) {
    switch (active.type) {
        case '熱門趨勢':
            return {click: true, show: 0}
        case '流行電影':
            return {click: true, show: 1}
        case '現正熱映':
            return {click: true, show: 2}
        case '即將上映':
            return {click: true, show: 3}
        default:
            return state
    }
}

const Nav = () => {
    const [state, dispatch] = useReducer(reducer, {click: false, show: 0})
    function handleClickNav(e) {
        dispatch({type: e.target.innerText})
    }
    return <nav>
        <div className="hamburger"></div>
        <ul className="nav-items" onClick={handleClickNav}>
            <li className={
                state.click && state.show === 0
                ? 'nav-item active'
                : 'nav-item'
                } ><Link to="/">熱門趨勢</Link></li>
            <li className={
                state.click && state.show === 1
                ? 'nav-item active'
                : 'nav-item'
                }><Link to="/HotMovie">流行電影</Link></li>
            <li className={
                state.click && state.show === 2
                ? 'nav-item active'
                : 'nav-item'
                }><Link to="/NowPlaying">現正熱映</Link></li>
            <li className={
                state.click && state.show === 3
                ? 'nav-item active'
                : 'nav-item'
                }><Link to="/UpComing">即將上映</Link></li>
        </ul>
        <Outlet />
        <div className="nav-tabs">
            <span>{itemNames[state.show]}</span>
            <span>&or;</span>
            <span>&or;</span>
            <span>&or;</span>
        </div>
    </nav>
}

export default Nav;
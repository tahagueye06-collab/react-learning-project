import { NavLink } from "react-router";
export function Navbar() {

    return <nav> <h1> Movie Discovery</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/watchlist">MyWatchlist</NavLink>

    </nav>
}
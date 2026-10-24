import { NavLink } from "react-router";

export function Navbar() {
    return (
        <nav className="navbar">
            <h1>Movie Discovery</h1>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/watchlist">MyWatchlist</NavLink>
            </div>
        </nav>
    );
}
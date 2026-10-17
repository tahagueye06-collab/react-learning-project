import { useState } from "react";

const movies = [
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        image: "/instellar.jpg"
    },
    {
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        image: "/inception.jpg"

    },
    {
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        image: "/the-dark-knight.jpg"
    }
];

export function MovieList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [watchlist, setWatchlist] = useState<(typeof movies)[number][]>([]);

    function addToWatchlist(movie: (typeof movies)[number]) {
        setWatchlist(current =>
            current.some(item => item.title === movie.title) ? current : [...current, movie]
        );
    }

    function removeFromWatchlist(title: string) {
        setWatchlist(current => current.filter(movie => movie.title !== title));
    }

    return (
        <section className="movies-section">
            <h2 className="movies-title">Popular Movies</h2>

            <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            <div className="movies-grid">
                {movies
                    .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(movie => (
                    <article key={movie.title} className="movie-card">
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>Genre: {movie.genre}</p>
                        <p>Year: {movie.year}</p>
                        <button type="button" onClick={() => addToWatchlist(movie)}
                            disabled={watchlist.some(item => item.title === movie.title)}>
                            {watchlist.some(item => item.title === movie.title) ? "Added ❤️" : "Add to Watchlist ❤️"}
                        </button>
                    </article>
                ))}
            </div>

            <h2 className="movies-title">My Watchlist ❤️</h2>
            {watchlist.length === 0 ? (
                <p className="watchlist-empty">No movies added yet.</p>
            ) : (
                <div className="movies-grid">
                    {watchlist.map(movie => (
                        <article key={movie.title} className="movie-card">
                            <img src={movie.image} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>Genre: {movie.genre}</p>
                            <p>Year: {movie.year}</p>
                            <button type="button" onClick={() => removeFromWatchlist(movie.title)}>
                                Remove from Watchlist
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}
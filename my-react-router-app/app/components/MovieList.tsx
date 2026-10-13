

const movies =["Interstellar","Inception","The Dark Knight"];


export function MovieList(){
  return  <section className={"movies-section"}>
      <h2 className={"movies-title"}> Popular Movies</h2>
     <div className="movies-grid">
         {movies.map(movie => <h3 key={movie} className="movie-card">{movie}</h3>)}
     </div>
      <article>
      </article>
  </section>
}
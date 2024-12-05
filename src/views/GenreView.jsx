import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GenreView.css";

function GenreView() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { genre_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      setMovies(response.data.results);
    })();
  }, []);

  function loadMovie(id) {
    navigate(`/movies/${id}`);
  }

  function goToNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function goToPreviousPage() {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  }

  return (
    <div className="genre-view">
      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => loadMovie(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
}

export default GenreView;
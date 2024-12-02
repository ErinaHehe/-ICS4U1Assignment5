import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../components/Genres.jsx";
import "./HomeView.css";

function HomeView() {
  const [movies, setMovies] = useState([]);
  const genres = [
    {
      genre: "Action",
      id: 28,
    },
    {
      genre: "Adventure",
      id: 12,
    },
    {
      genre: "Animation",
      id: 16,
    },
    {
      genre: "Comedy",
      id: 35,
    },
    {
      genre: "Crime",
      id: 80,
    },
    {
      genre: "Documentary",
      id: 99,
    },
    {
      genre: "Drama",
      id: 18,
    },
    {
      genre: "Family",
      id: 10751,
    },
    {
      genre: "Fantasy",
      id: 14,
    },
    {
      genre: "History",
      id: 36,
    },
  ]

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      const threeMovies = [];
      shuffle(response.data.results);
      threeMovies.push(response.data.results.pop());
      threeMovies.push(response.data.results.pop());
      threeMovies.push(response.data.results.pop());
      setMovies(threeMovies);
    })();
  }, []);


  return (
    <div className="hero">
      <div className="overlay"></div>
      <header>
        <div className="buttons">
          <Link to={`/register`} className="button">Sign Up</Link>
          <Link to={`/login`} className="button">Sign In</Link>
        </div>
      </header>
      <div className="hero-content">
        <h1>Infinite movies, TV shows, and more</h1>
        <p>Starts at $999.99. No Refunds.</p>
      </div>
      <Genres genresList={genres} />
    </div>
  )
}
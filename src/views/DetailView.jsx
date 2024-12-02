import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailMovieView.css"

function DetailMovieView() {

  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async function getMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
      );
      setMovie(response.data);
    })();
  }, []);

}

export default DetailMovieView;
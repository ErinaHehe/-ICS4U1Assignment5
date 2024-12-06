import { Outlet, useNavigate } from "react-router-dom";
import "./MoviesView.css";

function MoviesView() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Hello, User!</h1>
        <button onClick={() => logout()} className="logout-button">Logout</button>
      </div>
      <div className="genre-sidebar">
        <h3>Genres</h3>
        <ul id="with_genres" className="with_genres[]">
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesView;
import { Outlet, useNavigate } from "react-router-dom";
import "./MoviesView.css";
import GenreView from "./GenreView";
import DetailView from "./DetailView";

function MoviesView() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Welcome, User!</h1>
        <button onClick={() => logout()} className="logout-button">Logout</button>
      </div>
      <Outlet />
      <GenreView />
      <DetailView />
    </div>
  );
}

export default MoviesView;
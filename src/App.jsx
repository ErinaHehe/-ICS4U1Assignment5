import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/components/HomeView.jsx";
import DetailView from "../src/components/DetailView.jsx";
// import GenreView from "../src/components/GenreView.jsx";
import LoginView from "../src/components/LoginView.jsx";
import MoviesView from "../src/components/MoviesView.jsx";
import RegisterView from "../src/components/RegisterView.jsx";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/movies" element={<MoviesView />} />
          <Route path=":id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

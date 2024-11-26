import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/components/HomeView";
import DetailView from "../scr/components/DetailView";
import GenreView from "../scr/components/GenreView";
import LoginView from "../scr/components/LoginView";
import MoviesView from "../scr/components/MoviesView";
import RegisterView from "../scr/components/RegisterView";
import './App.css'

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

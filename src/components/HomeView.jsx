import { Link } from "react-router-dom";
import "./HomeView.css";

function HomeView() {
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
        </div>
    )
}
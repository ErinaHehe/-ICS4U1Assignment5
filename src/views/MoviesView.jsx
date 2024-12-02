import { Outlet, useNaviagte } from "react-router"
import "./MoviesView.css";

function MoviesView() {
    const navigate = useNavigate();

    function logout() {
        navigate("/");
    }

    return (
        <div>
            <h1>Movie smth</h1>
            <button onClick={() => logout()} className="logout-button">Logout</button>
            <Outlet />
        </div>
    );
}
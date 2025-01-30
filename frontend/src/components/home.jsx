import { useNavigate } from "react-router-dom";
import "../css/home.css"
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Header/>
            <div className="home-content">
                <h1>Welcome to Resume Builder</h1>
                <p>Create a professional resume effortlessly with our easy-to-use builder.</p>
                <button onClick={() => navigate("/templates")}>Create Your Resume</button>
            </div>
        </div>
    );
};

export default Home;

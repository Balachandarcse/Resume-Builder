import { useNavigate } from "react-router-dom";
import "../css/welcome.css"
const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>Welcome to Resume Builder</h1>
                <p>Create professional resumes effortlessly with our easy-to-use builder.</p>
                <button onClick={() => navigate("/signup")}>Get Started</button>
            </div>
        </div>
    );
};

export default Welcome;

import Navbar from "./Navbar.jsx";
import { useNavigate } from "react-router-dom";
import mordern from "../assets/mordernResume.png"
import classic from "../assets/classicalResume.png"
import creative from "../assets/creativeResume.png"
import "../css/template.css"

const templates = [
    { id: 1, name: "Modern Resume", image: mordern },
    { id: 2, name: "Classic Resume", image: classic },
    { id: 3, name: "Creative Resume", image: creative }
];

const Templates = () => {
    const navigate = useNavigate();

    const handleSelectTemplate = (templateId) => {
        navigate(`/create-resume/${templateId}`);
    };

    return (
        <div className="templates-container">
            <Navbar />
            <div className="templates-content">
                <h1 >Select a Resume Template</h1>
                <div className="templates-grid">
                    {templates.map((template) => (
                        <div key={template.id} className="template-card" onClick={() => handleSelectTemplate(template.id)}>
                            <img src={template.image} alt={template.name} />
                            <p>{template.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Templates;

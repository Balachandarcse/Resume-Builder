import { useLocation } from "react-router-dom";
import { useRef } from "react";
import "../css/resume.css"
import Navbar from "./Navbar";


const PreviewResume = () => {
    const location = useLocation();
    const { formData, templateId } = location.state || {};
    const resumeRef = useRef();

    if (!formData) {
        return <h2>No data available. Please fill out the form first.</h2>;
    }

    return (
        <div className="preview-bg"> 
        <Navbar/>
        <div className="preview-container">
            <h2>Resume Preview</h2>
            <div className="resume-preview" ref={resumeRef}>
                <div className="resume-content">
                    <h1>{formData.name}</h1>
                    <p><strong>Email:</strong> {formData.email}  <strong>Phone:</strong> {formData.phone}</p>
                    <h2>Summery:</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus quam similique autem officia perspiciatis neque ullam nobis exercitationem atque?{formData.summary}</p>
                    <h2>Education:</h2>
                    <p> {formData.education}</p>
                    <h2>Experience:</h2>
                    <p> {formData.experience}</p>
                    <h2>Skills</h2>
                    <p>{formData.skills}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PreviewResume;


import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import mordern from "../assets/mordernResume.png"
import classic from "../assets/classicalResume.png"
import creative from "../assets/creativeResume.png"


const PreviewResume = () => {
    const location = useLocation();
    const { formData, templateId } = location.state || {};
    const resumeRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        documentTitle: "Resume",
    });

    if (!formData) {
        return <h2>No data available. Please fill out the form first.</h2>;
    }

    return (
        <div className="preview-container">
            <h2>Resume Preview</h2>
            <div className="resume-preview" ref={resumeRef}>
                <img src={classic} alt="Selected Template" className="resume-template" />
                <div className="resume-content">
                    <h1>{formData.name}</h1>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Education:</strong> {formData.education}</p>
                    <p><strong>Experience:</strong> {formData.experience}</p>
                    <p><strong>Skills:</strong> {formData.skills}</p>
                </div>
            </div>
            <button onClick={handlePrint}>Download as PDF</button>
        </div>
    );
};

export default PreviewResume;


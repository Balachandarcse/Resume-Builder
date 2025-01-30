import { useLocation } from "react-router-dom";
import "../css/resume.css";
import Header from "./Header";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PreviewResume = () => {
    const location = useLocation();
    const formData = location.state || {};

    if (!formData || Object.keys(formData).length === 0) {
        return <h2>No data available. Please fill out the form first.</h2>;
    }
    const downloadPDF = () => {
        const resumeContainer = document.getElementById("resume-container");
        html2canvas(resumeContainer, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("resume.pdf");
        });
    };

    return (
        <div className="preview-bg">
            <Header />
            <div className="resume-al">
            <div id="resume-container" className="resume-container">
                <div className="resume-header">
                    <div className="resume-name">{formData.name}</div>
                    <div className="resume-subtitle">
                        Buyside and Sellside M&A, Equity and Debt Financing
                    </div>
                    <div className="resume-contact">
                        +91{formData.phone} • {formData.email} • linkedin.com/{formData.name}
                    </div>
                </div>

                <div className="resume-section resume-summary">
                    <div className="resume-section-title">Summary</div>
                    <div className="resume-section-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                </div>

                <div className="resume-section resume-experience">
                    <div className="resume-section-title">Experience</div>
                    {formData.experience?.map((obj, index) => (
                        <div key={index} className="resume-job">
                            <div className="resume-job-title">{obj.jobTitle}</div>
                            <div className="resume-job-position">{obj.company}</div>
                            <ul className="resume-job-list">
                                <li className="resume-job-item">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                </li>
                                <li className="resume-job-item">Duration: {obj.duration}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="resume-section resume-education">
                    <div className="resume-section-title">Education</div>
                    {formData.education?.map((obj, index) => (
                        <div key={index} className="resume-section-content">
                            <p>
                                <strong>{obj.degree}</strong>, {obj.institution}, {obj.year}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="resume-section resume-achievements">
                    <div className="resume-section-title">Key Achievements</div>
                    <ul className="resume-achievement-list">
                        <li className="resume-achievement-item">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </li>
                        <li className="resume-achievement-item">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </li>
                        <li className="resume-achievement-item">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </li>
                    </ul>
                </div>

                <div className="resume-section resume-skills">
                    <div className="resume-section-title">Skills</div>
                    {formData.skills?.map((skill, index) => (
                        <div key={index} className="resume-section-content">
                            • {skill}
                        </div>
                    ))}
                </div>
            </div>
            </div>
           <div className="btn-con"> <button className="btn" onClick={downloadPDF}>Download as PDF</button></div>
        </div>
        
    );
};

export default PreviewResume;

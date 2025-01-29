import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/resume.css"

const CreateResume = () => {
    const navigate = useNavigate();
    const { templateId } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        skills: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/preview-resume", { state: { formData, templateId } });
    };

    return (
        <div className="form-container">
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input-field" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="email" className="input-field" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" className="input-field" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" className="input-field" name="education" placeholder="Education" onChange={handleChange} required />
                <textarea className="textarea-field" name="experience"  placeholder="Work Experience" onChange={handleChange} required />
                <input className="input-field" type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} required />
                <button className="primary-button" type="submit">Preview Resume</button>
            </form>
        </div>
    );
};

export default CreateResume;

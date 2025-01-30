import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/resume.css"
import axios from 'axios'
import Navbar from "./Navbar";

const CreateResume = () => {
    const navigate = useNavigate();
    const { templateId } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        summary:"",
        education: "",
        experience: "",
        skills: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{ 
        const res= await axios.post("http://localhost:4001/resume",formData)
        console.log(res.data)
        if(res.data.isvalid){
            alert("resume stored Successfully! from frontend");
            navigate("/preview-resume", { state: { formData, templateId } });
        }
        else{
            alert("resume not stored!")
        }
        
    }catch(err){
        console.log(err);
    }

    };

    return (
        <div className="resume-form">
            <Navbar/>
        <div className="form-container">
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input-field" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="email" className="input-field" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" className="input-field" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" className="input-field" name="education" placeholder="Education" onChange={handleChange} required />
                <textarea className="textarea-field" name="summary"  placeholder="summary" onChange={handleChange} required />
                <textarea className="textarea-field" name="experience"  placeholder="Work Experience" onChange={handleChange} required />
                <input className="input-field" type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} required />
                <button className="primary-button" type="submit">Preview Resume</button>
            </form>
        </div>
        </div>
    );
};

export default CreateResume;

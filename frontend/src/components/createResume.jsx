import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/resume.css"
import axios from 'axios'
import Header from "./Header";


const CreateResume = () => {
    const navigator = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: [{ jobTitle: "", company: "", duration: "" }],
        education: [{ degree: "", institution: "", year: "" }],
        skills: [""]
    });
    const handleChange = (e, index, field, section) => {
        const newData = { ...formData };
        if (section === "experience" || section === "education") {
            newData[section][index][field] = e.target.value;
        } else if (section === "skills") {
            newData.skills[index] = e.target.value;
        } else {
            newData[field] = e.target.value;
        }
        setFormData(newData);
    };

    const addField = (section) => {
        const newData = { ...formData };
        if (section === "experience") {
            newData.experience.push({ jobTitle: "", company: "", duration: "" });
        } else if (section === "education") {
            newData.education.push({ degree: "", institution: "", year: "" });
        } else if (section === "skills") {
            newData.skills.push("");
        }
        setFormData(newData);
    };

    const removeField = (section, index) => {
        const newData = { ...formData };
        newData[section].splice(index, 1);
        setFormData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res= await axios.post("https://resume-builder-dasn.onrender.com/resume",formData)
            console.log(res.data)
            if(res.data.isvalid){
                alert("reusme stored Successfully!");
                navigator('/preview-resume', { state:  formData });
            }
            else{
                alert("resume can't stored!")
            }
            
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="container">
            <Header />
            <div className="form-con">
            <div className="form">
                <h2 className="title">Fill your details</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="input-label">Name:</label>
                        <input type="text" className="input-field" value={formData.name} onChange={(e) => handleChange(e, 0, "name")} required />
                    </div>

                    <div>
                        <label className="input-label">Email:</label>
                        <input type="email" className="input-field" value={formData.email} onChange={(e) => handleChange(e, 0, "email")} required />
                    </div>

                    <div>
                        <label className="input-label">Phone:</label>
                        <input type="text" className="input-field" value={formData.phone} onChange={(e) => handleChange(e, 0, "phone")} required />
                    </div>

                    <h3 className="subtitle">Experience</h3>
                    <div className="experience-section">
                        {formData.experience.map((exp, index) => (
                            <div key={index}>
                                <input className="input-field" type="text" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => handleChange(e, index, "jobTitle", "experience")} required />
                                <input className="input-field" type="text" placeholder="Company" value={exp.company} onChange={(e) => handleChange(e, index, "company", "experience")} required />
                                <input className="input-field" type="text" placeholder="Duration" value={exp.duration} onChange={(e) => handleChange(e, index, "duration", "experience")} required />
                                {index > 0 && <button type="button" className="remove-btn" onClick={() => removeField("experience", index)}>Remove</button>}
                            </div>
                        ))}
                        <div className="add-remove-btns">
                            <button type="button" onClick={() => addField("experience")}>Add Experience</button>
                        </div>
                    </div>

                    <h3 className="subtitle">Education</h3>
                    <div className="education-section">
                        {formData.education.map((edu, index) => (
                            <div key={index}>
                                <input className="input-field" type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, index, "degree", "education")} required />
                                <input className="input-field" type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleChange(e, index, "institution", "education")} required />
                                <input className="input-field" type="text" placeholder="Year" value={edu.year} onChange={(e) => handleChange(e, index, "year", "education")} required />
                                {index > 0 && <button type="button" className="remove-btn" onClick={() => removeField("education", index)}>Remove</button>}
                            </div>
                        ))}
                        <div className="add-remove-btns">
                            <button type="button" onClick={() => addField("education")}>Add Education</button>
                        </div>
                    </div>

                    <h3 className="subtitle">Skills</h3>
                    <div className="skills-section">
                        {formData.skills.map((skill, index) => (
                            <div key={index}>
                                <input className="input-field" type="text" placeholder="Skill" value={skill} onChange={(e) => handleChange(e, index, "skills", "skills")} required />
                                {index > 0 && <button type="button" className="remove-btn" onClick={() => removeField("skills", index)}>Remove</button>}
                            </div>
                        ))}
                        <div className="add-remove-btns">
                            <button type="button" onClick={() => addField("skills")}>Add Skill</button>
                        </div>
                    </div>

                    <div className="form-footer">
                        <button className="submit-btn" type="submit">Generate Resume</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

    );
};

export default CreateResume;

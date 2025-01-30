const mdb = require("mongoose");

const ResumeSchema=new mdb.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    experience: [
        {
            jobTitle: { type: String, required: true },
            company: { type: String, required: true },
            duration: { type: String, required: true }
        }
    ],
    education: [
        {
            degree: { type: String, required: true },
            institution: { type: String, required: true },
            year: { type: String, required: true }
        }
    ],
    skills: [{ type: String, required: true }]
});


const Resume=mdb.model("resume",ResumeSchema)
module.exports = Resume;
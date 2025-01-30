const mdb = require("mongoose");

const ResumeSchema=new mdb.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    summary:{ type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: String, required: true },
})

const Resume=mdb.model("resume",ResumeSchema)
module.exports = Resume;
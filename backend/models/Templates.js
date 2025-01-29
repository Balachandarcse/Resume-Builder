const mdb = require("mongoose");

const TemplateSchema=new mdb.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String }
})

const Templates=mdb.model("template",TemplateSchema)
module.exports = Templates;
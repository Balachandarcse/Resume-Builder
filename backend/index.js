const express=require('express')
const path=require('path')
const mdb=require("mongoose")
const dotenv=require("dotenv")
const Signup=require("./models/UsersSchema")
const Template=require("./models/Templates")
const Resume=require("./models/resume")
const bcrypt=require("bcrypt")
const cors=require("cors")

const app=express()

dotenv.config();
app.use(cors({
    origin:'https://resume-builder-6ofv.vercel.app/'
}));
app.use(express.urlencoded());
app.use(express.json())

mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.post("/signup", async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    var hashedPassword=await bcrypt.hash(password,10);
    try{
        const newCustomer=new Signup({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:hashedPassword
    });
    await newCustomer.save();
    res.status(201).json({message:"SignUp Successful!",isvalid:true});
    console.log("value recived")
}catch(e){
    res.status(401).json({message:"SignUp unSuccessful!",isvalid:false})
    console.log("unSuccessful")

}
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Signup.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found",isvalid:false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password",isvalid:false });
        }
        
        res.status(201).json({ message: "Login successful", user ,isvalid:true});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" ,isvalid:false});
    }
});

app.post("/template",async(req,res)=>{
    var {name ,imageUrl,description}=req.body;
    try{
        const newTemplate = new Template({
            name:name,
            imageUrl:imageUrl,
            description:description 
        });
        await newTemplate.save();
        res.status(201).json(newTemplate);

    }
    catch(err){
        res.status(402).json({message:"template saving unsuccessful "})
    }
})

app.get("/getTemplates", async (req, res) => {
    try {
        const templates = await Template.find();
        res.json(templates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post("/resume",async(req,res)=>{
    var {  name,email ,phone,summary,education,experience,skills}=req.body
    try{
        const newResume=new Resume({
            name:name,
            email:email,
            phone:phone,
            summary:summary,
            education:education,
            experience:experience,
            skills:skills,
        }) 
        await newResume.save();
        res.status(201).json({message:"resume stored Successful!",isvalid:true});

    }
    catch(e){
        res.status(401).json({message:"resume storing unSuccessful!",isvalid:false})
    }
})

app.listen(4001,()=>{
    console.log("server is started");
    
})
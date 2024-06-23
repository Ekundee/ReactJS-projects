const express = require("express");
const session = require("express-session")
const path = require("path");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors")

// routes
const signin_Route = require("./routes/signin_Route.js");
const signUp_Route = require("./routes/signUp_Route.js");
const getUsers_Route = require("./routes/getUsers_Route")

const app = express();
app.use(session({
    secret : "yoo",
    resave : false,
    saveUninitialized : false
}))

app.use(express.static("./client/build"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))


//using routes
app.use(signin_Route);
app.use(signUp_Route);
app.use(getUsers_Route);




app.get("/", (req,res)=>{
    res.sendFile(path. "index.html")
})





const dbConnect =  () => {
    try{
        mongoose.connect("mongodb://localhost:27017/reactLoginSystem",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
            console.log(err);
            console.log("Connected to database")
            app.listen(7070,(e)=>{   
                console.log(e)
                console.log("server is running")
            });
        })
    }catch(err){
        console.log(err)
    }
}

dbConnect()
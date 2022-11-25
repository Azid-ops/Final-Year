const express = require('express');
const mongoose = require("mongoose");
const registerSchoolRouter = require('./Routes/RegisterSchool/registerSchool');
const app = express();
app.use(express.json());
app.use(registerSchoolRouter);
mongoose.connect("mongodb+srv://Mahad:Mahad@cluster0.btoqm.mongodb.net/Fyp").then(connection=>{
    app.listen(5000);
}).catch(err=>{
    console.log(err);
})
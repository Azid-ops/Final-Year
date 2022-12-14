//Importing express
const { warning } = require('@remix-run/router');
const express = require('express');

//Making Routes
const Router = express.Router();

//Importing Mongoose
const mongoose = require('mongoose');

const IP = require('ip');

//Importing School Registration Schema
const registerSchool = require("../../Schemas/RegisterSchool/registerschool");

const registerCollege = require("../../Schemas/RegisterCollege/registercollege");

//Creating Post Route
Router.post("/register/registerSchool", (req,res,next)=> {

    let myIP = IP.address();

    //Getting data from React
    let {
        institutionName,
        institutionEmail,
        institutionLocation,
        role
    } = req.body;

    //Creating obect of registerSchool so that i can save data into school registration database
    let register = new registerSchool({
        institutionName,institutionEmail,institutionLocation,role,warning:0,ip:"",ipExist:false
    });

    let collegeRegister = new registerCollege({
        institutionName,institutionEmail,institutionLocation,role,warning:0,ip:"",ipExist:false
    })

    if(role === "School")
    {
        registerSchool.findOne({institutionEmail}).then(userExist=>{
            if(!userExist)
            {
                register.save().then(result=>{
                    res.status(200).json({
                        message:"Successfully Signed Up"
                    });
                }).catch(err=>{
                    console.log(err);
                });
            }
            else
            {
                if(userExist.ipExist === false)
                {
                    registerSchool.findOneAndUpdate({institutionEmail}).then(answer=>{
                        if(answer.warning > 3)
                        {
                            answer.ipExist = true;
                            answer.ip = myIP;
                            answer.save().then(goto => {
                                console.log(goto);
                            }).catch(err=>{
                                console.log(err);
                            });
                        }
                        else
                        {
                            answer.warning = answer.warning + 1;
                            //Updating Document
                            answer.save().then(result=>{
                                console.log(result);
                            }).catch(err=>{
                                console.log(err);
                            });
                            res.status(201).json({
                                message:"Your IP is active"
                            });
                        }
                    })
                }
                else
                {
                    res.status(401).json({
                        message:"IP has been blocked"
                    });
                }
            }
        })    
    }
    
    else
    {
        registerCollege.findOne({institutionEmail}).then(doesExist=>{
            if(!doesExist)
            {
                collegeRegister.save().then(myRes=>{
                    console.log(myRes);
                }).catch(err=>{
                    console.log(err);
                });
            }
            else
            {
                if(doesExist.ipExist === false)
                {
                    registerCollege.findOneAndUpdate({institutionEmail}).then(final=>{
                        if(final.warning > 3)
                        {
                            final.ipExist = true;
                            final.ip = myIP;
                            final.save().then(gas => {
                                console.log(gas);
                            }).catch(err=>{
                                console.log(err);
                            });
                        }
                        else
                        {
                            final.warning = final.warning + 1;
                            //Updating Document
                            final.save().then(sheet=>{
                                console.log(sheet);
                            }).catch(err=>{
                                console.log(err);
                            });
                            res.status(200).json({
                                message:"Your can access this website"
                            });
                        }
                    })
                }
                else
                {
                    res.status(401).json({
                        message:"IP has been blocked"
                    });
                }
            }
        })
    }
    
});

module.exports = Router;
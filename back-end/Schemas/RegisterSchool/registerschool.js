const express = require("express");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerSchool = new Schema({
    institutionName:{
        type:String,
        required:true
    },
    institutionEmail:{
        type:String,
        required:true
    },
    institutionLocation:{
        type:String,
        required:true
    },
    warning:{
        type:Number,
        required:true
    },
    ip:{
        type:String,
        required:false
    },
    ipExist:{
        type:Boolean,
        required:true
    }
});
module.exports = mongoose.model("registerSchool", registerSchool);

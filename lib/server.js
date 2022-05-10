const VisualControlls= require("./Controlls/VisualControl");

const express = require("express");
const app= express();
const port= 3000;

app.get("./v1/haveCertificate",(req,res)=>{
    return res.json(VisualControlls.show());
});


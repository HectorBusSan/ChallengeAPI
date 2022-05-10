const VisualControlls= require("./Controlls/VisualControl");

const express = require("express");
const app= express();
const port= 3000;

app.get("/",(req,res)=>{
    res.json({mission: "Challenge of Node"});
});

app.listen(port,()=>{
    console.log(`Vamos a realizar un Challenge`);
});

app.get("/v1/students",(req,res)=>{
    const students= VisualControlls.show();
    res.json(students);
    // res.json(students.length);
});
app.get("/v1/haveCertification",(req,res)=>{
    const have= VisualControlls.have();
    res.json(have);
})
app.get("/v1/more500credits",(req,res)=>{
    const credit= VisualControlls.credit();
    res.json(credit);
})
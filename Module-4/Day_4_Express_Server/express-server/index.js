const express = require("express"); // import express

const app = express(); //initilizing express app

const PORT = 3000; // Define port

app.get("/home" , (req,res)=>{

    res.send("This is home page");
});

app.get("/about", (req,res)=>{
    res.send("Welcome to the About page!")
});

app.get("/contactus", (req,res)=>{
    res.send ("Contact us at contact@contact.com")
});

//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
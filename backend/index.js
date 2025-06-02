

const express = require('express')
const app = express();
const cookie = require('cookie-parser')

const cors = require('cors')
// port
require("dotenv").config()

const PORT = process.env.PORT || 5000

// middle ware
app.use(express.json())


app.use(cors(
    {
        origin: "https://log-red-4-1-ui1.onrender.com", // Your frontend URL
  credentials: true,
    } 
));
app.use(cookie());

// routes
const route = require("./routes/Userroute")
app.use(route);


// db connection 
const dbconnection = require('./config/dbconnection')
dbconnection()

// server start
app.listen(PORT , ()=>{
    console.log("server successfully started at port " ,PORT );
    
} )


// dummy request

app.get("/ping" , (req,res)=>{
    res.send("pong")
} )

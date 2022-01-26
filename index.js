const express = require('express');
const mongoose = require('mongoose');
const tasksroutes = require('./routes/tasks');
const connectDB = require('./config/db');
require('dotenv').config();
connectDB();


const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());


//Home page
app.get("/", function (req, res) {
  res.send("Welcome to this Task Manager");
});


// routes
app.use('/api/v1', tasksroutes);



// listen on port 8000 (for localhost) or the port defined for heroku
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
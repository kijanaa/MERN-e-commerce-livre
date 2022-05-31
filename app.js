// import express from "express";
const express = require('express');
const app = express();

const mongoose = require('mongoose')
require('dotenv').config();

//import routes
const userRoutes = require('./routes/user.route')


// DB
mongoose
    .connect(process.env.MONGODB, {})
    .then(() => console.log('Base de données connectée'))
    .catch((err) => console.log("DB error =>", err));

app.use('/api', userRoutes)

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

// console.log(process.env.PORT);
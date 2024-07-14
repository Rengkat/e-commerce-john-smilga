require("dotenv").config();

//express
const express = require("express");
const app = express();
//midlewares

//routes

//errors
const port = process.env.PORT || 5000;

app.listen(() => console.log("Server listening at prt 5000"));

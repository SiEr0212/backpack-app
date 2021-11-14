const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()//reads the dotenv file

//set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

//connect to mongoDB
//installesd "npm i dotenv" to acces env
mongoose.connect(process.env.MDB_CONNECT);

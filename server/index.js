const express = require("express");
const mongoose = require("mongoose");

//set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

//connect to mongoDB


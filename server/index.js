const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config(); //reads the dotenv file

//set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true, //to send the cookies with token = credentials
}));

//connect to mongoDB
//installesd "npm i dotenv" to acces env
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
  }
);

//set uo routes

app.use("/auth", require("./routers/userRouter"));
app.use("/backpacks", require("./routers/customerRouter"));
app.use("/customer", require("./routers/customerRouter"));
app.use("/backpack", require("./routers/backpackRouter"));

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");

const app = express();

/* app.use(Cors()); */
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


const port =  5000; //process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on port ${port} !`));


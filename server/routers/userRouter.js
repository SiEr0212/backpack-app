const router = require("express").Router();
const User = require("../models/userModel");

router.post("/", (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    //validation:
    if (!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
      });

   /*  checks if the email we just entered matches the email of an existing user
     and if thats the case it is saved in the variabel existingUser.
     so if its null no preexisting user */

    const existingUser = User.findOne({ email });


  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;

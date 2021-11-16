const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    //validation:
    if (!email || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    if (password.length < 6)
      return res
        .status(400)
        .json({
          errorMessage: "Please enter a password of at least 6 characters.",
        });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;

const router = require("express").Router();

router.post("/", (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

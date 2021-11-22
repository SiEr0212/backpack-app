const router = require("express").Router();
const Customer = require("../models/customerModel");

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
module.exports = router;

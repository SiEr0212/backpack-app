const router = require("express").Router();
const Backpack = require("../models/backpackModel");
const auth = require("../middleware/auth");

//auth is the middleware I created to check authorization
router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const newBackpack = new Backpack({
      name,
    });

    const savedBackpack = await newCustomer.save();

    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});
module.exports = router;

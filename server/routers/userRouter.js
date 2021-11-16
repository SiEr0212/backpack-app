const router = require("express").Router();

router.post("/", (req, res) => {
  try{
    const {email, password, passwordVerify} = req.body;
  }
  catch(err){
console.log(err)
  }
  
  
});

module.exports = router;

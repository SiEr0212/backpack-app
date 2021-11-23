const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
   const token = req.cookies.token; //installed library with npm i cookie-parser to store the cookie in an json object

   if (!token) return res.status(401).json({errorMesage: "Unauthorized"});

   const verified = jwt.verify(token, process.env.JWT_SECRET);
   
   

  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMesage: "Unauthorized",
    });
  }
}

module.exports = auth;

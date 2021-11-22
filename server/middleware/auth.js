function auth(req, res, next) {
  try {
   const token = req.cookies.token; //installed library with npm i cookie-parser to store the cookie in an json object
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMesage: "Unauthorized",
    });
  }
}

module.exports = auth;

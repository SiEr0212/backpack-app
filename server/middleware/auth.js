function auth(req, res, next) {
  try {
    console.log(req.cookies); //installed library with npm i cookie-parser to store the cookie in an json object
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMesage: "Unauthorized",
    });
  }
}

module.exports = auth;

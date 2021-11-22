function auth(req, res, next) {
  try {
console.log(req.cookies);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMesage: "Unauthorized",
    });
  }
}

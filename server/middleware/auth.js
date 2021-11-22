function auth(req, re, next) {
  try {
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMesage: "Unauthorized",
    });
  }
}

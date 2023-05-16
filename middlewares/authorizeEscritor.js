function authorizeEscritor(req, res, next) {
  if (req.author.roleId >= 2) {
    next();
  } else {
    return res.status(403).json({ error: "Acceso denegado." });
  }
}
module.exports = authorizeEscritor;

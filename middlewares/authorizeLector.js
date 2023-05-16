function authorizeLector(req, res, next) {
  if (req.author.roleId >= 1) {
    next();
  } else {
    return res.status(403).json({ error: "Acceso denegado." });
  }
}
module.exports = authorizeLector;

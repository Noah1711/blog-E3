function authorizeAdmin(req, res, next) {
  if (req.author.roleId === 4) {
    next();
  } else {
    return res.status(403).json({ error: "Acceso denegado." });
  }
}
module.exports = authorizeAdmin;

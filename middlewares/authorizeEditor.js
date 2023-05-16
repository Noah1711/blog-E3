function authorizeEditor(req, res, next) {
  if (req.author.roleId >= 3) {
    next();
  } else {
    return res.status(403).json({ error: "Acceso denegado." });
  }
}
module.exports = authorizeEditor;

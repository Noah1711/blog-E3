const { Article, Author } = require("../models");

async function admin(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  if (req.user.role === "Admin") {
    const listaDeArticulos = await Article.findAll();
    for (let i = 0; i < listaDeArticulos.length; i++) {
      const author = await Author.findByPk(listaDeArticulos[i].authorId);
      listaDeArticulos[i].authorId = author;
    }

    res.render("adminAllArticles", {
      listaDeArticulos,
    });
  } else {
    const listaDeArticulos = await Article.findAll({
      where: { authorId: req.user.id },
    });
    for (let i = 0; i < listaDeArticulos.length; i++) {
      const author = await Author.findByPk(listaDeArticulos[i].authorId);
      listaDeArticulos[i].authorId = author;
    }

    res.render("admin", {
      listaDeArticulos,
    });
  }
}

module.exports = {
  admin,
};

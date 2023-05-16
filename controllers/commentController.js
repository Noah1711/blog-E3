const { Comment, Article } = require("../models");

async function review(req, res) {
  const { inputName: name, content: content } = req.body;
  const articleId = req.params.id;

  await Comment.create({
    fullName: name,
    content: content,
    articleId: articleId,
  });
  return res.redirect(`/article/${articleId}`);
}

async function findComments(req, res) {
  const articleId = req.params.id;

  const article = await Article.findByPk(articleId);

  if (article) {
    const comments = await Comment.findAll({
      where: { articleId: articleId },
    });

    return res.render("notice", { article: article, comments: comments });
  } else {
    return res.redirect("/home");
  }
}

module.exports = {
  review,
  findComments,
};

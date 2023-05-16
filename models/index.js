require("dotenv").config();
const { Sequelize } = require("sequelize");
const articleSeeder = require("../seeders/articleSeeder");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Article = require("./Article");
const Author = require("./Author");
const Comment = require("./Comment");
const Role = require("./Role");

Article.initModel(sequelize);
Author.initModel(sequelize);
Comment.initModel(sequelize);
Role.initModel(sequelize);

Author.hasMany(Article);
Article.belongsTo(Author);

Article.hasMany(Comment);
Comment.belongsTo(Article);

Author.belongsTo(Role);
Role.hasMany(Author);

// sequelize.sync({ force: true });

module.exports = {
  sequelize,
  Article,
  Author,
  Comment,
  Role,
};

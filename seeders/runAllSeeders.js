require("dotenv").config();
const { Author, Article, Comment, Role } = require("../models");

async function runAllSeeders() {
  await require("./roleSeeder")(Role);
  await require("./authorSeeder")(Author);
  await require("./articleSeeder")(Article);
  await require("./commentSeeder")(Comment);
}

runAllSeeders();

const { faker } = require("@faker-js/faker");
const comments = [];

for (let i = 0; i < 20; i++) {
  const comment = {
    content: faker.lorem.paragraph({ min: 1, max: 2 }),
  };
  comments.push(comment);
}
module.exports = async function (Comment) {
  await Comment.bulkCreate(comments);
};

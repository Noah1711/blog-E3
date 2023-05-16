module.exports = async function (Role) {
  await Role.bulkCreate([
    {
      roleName: "lector",
      description: "eergr",
      code: "100",
    },
    {
      roleName: "escritor",
      description: "eergr",
      code: "200",
    },
    {
      roleName: "editor",
      description: "eergr",
      code: "300",
    },
    {
      roleName: "admin",
      description: "eergr",
      code: "400",
    },
  ]);
};

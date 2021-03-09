// const { sequelize } = require(".");

var methods = require("../hooks");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "dummytables",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "First Name",
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Last Name",
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      hooks: methods.hooks,
    }
  );
  return Users;

  // declare classMethod

  // const setFullname = (dummytables) => {
  //   dummytables.full_name = first_name + ` ` + last_name;
  // };

  // Users.beforeCreate(setFullname);
};

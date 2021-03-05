// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("dummytables", {
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
  });
  return Users;
};

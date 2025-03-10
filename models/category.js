const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize();

const Category = sequelize.define("Category", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;

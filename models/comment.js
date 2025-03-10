const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize();

const Comment = sequelize.define("Comment", {
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Comment;

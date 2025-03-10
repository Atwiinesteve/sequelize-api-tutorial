const { Sequelize } = require("sequelize");

const configs = require("../config/config");

// Initialize Sequelize
export const database_connection = new Sequelize(
  configs.configs.development.database, // Database name
  configs.configs.development.username, // Database username
  configs.configs.development.password, // Database password
  {
    host: "localhost", // Database host
    dialect: "postgres", // Database dialect (e.g., "postgres", "mysql", "sqlite", "mssql")
  }
);

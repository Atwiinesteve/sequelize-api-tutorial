const express = require("express");
const { database_connection } = require("./database/db.connect");

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  database_connection
    .authenticate()
    .then(() => {
      console.log(`Database connected successfully..`);
    })
    .catch((error) => {
      console.log(`Error connecting: ${error}`);
    });
  console.log(`Server is running on http://localhost:${PORT}`);
});

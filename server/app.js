const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000;
const dbConnection = "";

const app = express();
app.use(express.json());

app.use("");

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});

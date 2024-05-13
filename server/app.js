const mongoose = require("mongoose");
const express = require("express");
const Route = express.Router();

const PORT = 3000;
const dbConnection = "";
const app = express();
app.use(express.json());

//locations route

//users route

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});

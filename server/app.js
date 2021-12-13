const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./db/conn");


app.use(express.json())
// const User = require('./model/userSchema');
const PORT = process.env.PORT;

app.use(require('./router/auth'));


// app.get("/about", (req, res) => {
//   console.log(" middleware checked");
//   res.send("Hello About World from Mani");
// });

app.get("/contact", (req, res) => {
  res.send("Hello Contact World from Mani");
});

app.get("/signin", (req, res) => {
  res.send("Hello Login World from Mani");
});

app.get("/signup", (req, res) => {
  res.send("Hello Register World from Mani");
});

app.listen(PORT, () => {
  console.log("nodemon started");
});

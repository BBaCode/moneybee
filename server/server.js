const express = require("express");
const cors = require("cors");
const fs = require("fs");

const financeInfoRoute = require("./routes/financeInfoRoute.js");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/finance", financeInfoRoute);

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

function readUsers() {
  const userData = fs.readFileSync("./data/user-information.json");
  const parsedUsers = JSON.parse(userData);
  return parsedUsers;
}

function writeUsers(newVideo) {
  const userDataAsString = JSON.stringify(newVideo);
  fs.writeFileSync("./data/user-information.json", userDataAsString);
}

app.post("/register", (req, res) => {
  const updatedUsers = readUsers();
  const newUser = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  updatedUsers.push(newUser);
  writeUsers(updatedUsers);
  res.status(201).json(newUser);
});

const SERVER_PORT = process.env.PORT || 8000;

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on ${SERVER_PORT}`);
});

const express = require("express");
const cors = require("cors");

const financeInfoRoute = require("./routes/financeInfoRoute.js");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/finance", financeInfoRoute);

const SERVER_PORT = process.env.PORT || 8000;

app.listen(SERVER_PORT, () => {
  console.log(`server is listening on ${SERVER_PORT}`);
});

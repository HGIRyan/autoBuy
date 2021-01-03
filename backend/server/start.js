require("dotenv").config();

const moment = require("moment");
const express = require("express");

const app = express();
// *** TOPLEVEL MIDDLEWARE *** //

app.use(express.json());
// *** CRON SCHEDULE *** //

const { task } = require("../cron/cronTask");
task(app);

// *** ENDPOINTS *** //

const { test } = require("../express-routers");
app.use(test);

app.get("*", (req, res, next) => {
  res.sendStatus(404);
});

// *** IM LISTENING! *** //

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listening on PORT: `, `\x1b[33m${process.env.SERVER_PORT}\x1b[0m`);
  console.log("\x1b[35m%s\x1b[0m", `Started on ${moment().format("LLLL")}`);
});

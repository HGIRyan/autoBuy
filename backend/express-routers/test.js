const { Router } = require("express");
const { logRequestToConsole } = require("../middleware/logRequest");
const { cryptoCoin } = require("../controllers");
const router = Router();

router.get("/test/:param", logRequestToConsole, (req, res) => {
  let { param } = req.params;
  param = param.toLowerCase();
  if (param === "basic") {
    cryptoCoin.basicRequest();
  }

  res.sendStatus(200);
});

module.exports = { test: router };

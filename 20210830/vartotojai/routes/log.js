const express = require("express");
const router = express.Router();
const fs = require("fs");

router.use((req, res, next) => {
  console.log("atejo naujas vartotojas");
  let a = req.socket.remoteAddress;
  let b = req.url;
  let c = new Date().toISOString().slice(0, 10);
  fs.appendFileSync("log.txt", "IP " + a + " URL: " + b + " Date: " + c + "\n");
  next();
});

module.exports = router;

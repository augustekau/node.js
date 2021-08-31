const express = require("express");
//cia  kuriame routinimo objektas, jis gali buti pavadintas belenkaip
const router = express.Router();

router.use((req, res, next) => {
  console.log("Atejo naujas vartotojas:  " + req.url);
  next();
});
//cia eksportuojame routeri
module.exports = router;

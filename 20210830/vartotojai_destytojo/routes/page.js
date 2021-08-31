const express = require("express");
//cia  kuriame routinimo objektas, jis gali buti pavadintas belenkaip
const router = express.Router();

//perkeliame su puslapiu susijusius middleware'us. app pakeiciam i router
router.get("/", (req, res, next) => {
  res.send("<h1>Pagrindinis puslapis</h1>");
});
//cia eksportuojame routeri
module.exports = router;

const express = require("express");
//cia  kuriame routinimo objektas, jis gali buti pavadintas belenkaip
const router = express.Router();
const path = require("path");

//perkeliame su puslapiu susijusius middleware'us. app pakeiciam i router
router.get("/", (req, res, next) => {
  // res.send("<h1>Pagrindinis puslapis</h1>");
  res.render("index");
});

router.use("/", (req, res, next) => {
  //Išsiunčiame failą 404.html
  //status - nustato statusą
  // res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  //res.status(404).send("Puslapis nerastas");
  //res.status(404).send("<script>alert('Puslapis nerastas'); history.go(-1);</script>");

  //komentaras user2.hbs faile
  res.status(404).render("404");
});

//cia eksportuojame routeri
module.exports = router;

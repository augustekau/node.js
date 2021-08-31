const express = require("express");
const path = require("path");
//cia  kuriame routinimo objektas, jis gali buti pavadintas belenkaip
const router = express.Router();

//perkeliame su vartotojais susijusius middleware'us. app pakeiciam i router

router.get("/", (req, res, next) => {
  // path.join(__dirname + ".."+"views"+"user.html")
  res.sendFile(path.join(__dirname, "..", "views", "user.html"));
});

router.post("/add", (req, res, next) => {
  let vardas = req.body.vardas;
  let pavarde = req.body.pavarde;
  res.send(
    "<h1>Pridėti vartotoją</h1>" +
      "Vartotojo vardas: " +
      req.body.vardas +
      "<br>Pavarde: " +
      req.body.pavarde
  );
});
router.get("/add", (req, res, next) => {
  res.redirect("/user");
});

//cia eksportuojame routeri
module.exports = router;

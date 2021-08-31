const express = require("express");
const router = express.Router();
const kartotinis = require("../kartotinis");

router.post("/rezultatas", (req, res, next) => {
  res.send(
    "<h1> Rezultatu puslapis  </h1><br> Maziausias bendras kartotinis " +
      kartotinis(req.body.number1, req.body.number2)
  );
});

router.get("/rezultatas", (req, res, next) => {
  res.redirect("/");
});

router.get("/", (req, res, next) => {
  res.send(
    "<h1>Pagrindinis puslapis</h1><br><form action='/rezultatas' method='POST'><input type='number' name='number1'><br><input type='number' name='number2'><button type='submit'>Issiusti</button></form>"
  );
});

module.exports = router;

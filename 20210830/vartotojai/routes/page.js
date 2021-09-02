const express = require("express");
const router = express.Router();
const kartotinis = require("../kartotinis");
const path = require("path");

router.post("/rezultatas", (req, res, next) => {
  // res.send(
  //   "<h1> Rezultatu puslapis  </h1><br> Maziausias bendras kartotinis " +
  //     kartotinis(req.body.number1, req.body.number2)
  // );

  res.render("rezultatai", {
    number1: req.body.number1,
    number2: req.body.number2,
    funkcija: kartotinis(req.body.number1, req.body.number2),
  });
});

router.get("/rezultatas", (req, res, next) => {
  res.redirect("/");
});

router.get("/", (req, res, next) => {
  // res.send(
  //   "<h1>Pagrindinis puslapis</h1><br><form action='/rezultatas' method='POST'><input type='number' name='number1'><br><input type='number' name='number2'><button type='submit'>Issiusti</button></form>"
  // );
  // res.sendFile(path.join(__dirname, "..", "views", "users.html"));
  res.render("users");
});

router.use("/", (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  res.status(404).render("404");
});

module.exports = router;

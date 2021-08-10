const validator = require("validator");

if (validator.isURL("htgtp://delfi.ls")) {
  console.log("url teisingas");
} else {
  console.log("url neteisingas");
}

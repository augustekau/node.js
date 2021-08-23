const forecast = require("./prognoze");

function isveskKaiGausiDuomenis(data) {
  console.log("APP.JS GAVO DUOMENIS");
  console.log(data);
}

//Iškviečiame funckiją forecast su kintamaisiais:
// 1 - miestas
// 2 - funkcija kuri bus įvykdyta tuomet kai API atsiųs duomenis
forecast("klaipeda", isveskKaiGausiDuomenis);

/*
forecast('klaipeda', (data)=>{
    console.log("APP.JS GAVO DUOMENIS");
    console.log(data); 
});
*/
console.log("Sistema baige darba");

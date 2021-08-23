const request = require("postman-request"); //Kintamajame request bus užkrautas modulis postman-request

//Reikalaujame dviejų kintamųjų - vietos ir funkcijos
const forecast = (place, callback) => {
  //URL į kurį kreipsimės
  const url =
    "https://api.meteo.lt/v1/places/" + place + "/forecasts/long-term";

  //Iškviečiama funkcija request, kuriai paduodamas uri, callback funkcija kuri bus iškviečiama
  // tuomet kai gausime atsakymą arba įvyks klaida
  // Funkcija iškviečiama Asinchroniniu būdu

  //Ši funkcija palies asinchroninį kodą ir vykdoma kai baigs pagrindinė f-ja (sistema) darbą
  request({ url: url }, (error, response) => {
    const data = response.body; //Gautą atsakymą (JSON) išsaugome į kintamąjį (String)
    const weather = JSON.parse(data); //Iš string'o (JSON) pagaminame objektą
    //console.log(weather.place.name);
    let fc = [];
    weather.forecastTimestamps.forEach((d) => {
      fc.push({
        time: d.forecastTimeUtc,
        temperature: d.airTemperature,
      });
    });
    callback(fc);
    //return fc;
    //console.log("Gavome duomenis");
  });
};

module.exports = forecast;

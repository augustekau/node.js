function daugyba() {
  for (let x = 1; x <= +10; x++) {
    console.log("2* " + x + "=" + x * 2);
  }
}
daugyba();

console.log("");

console.log("col." + "\t" + "cm." + "\t" + "|" + "\t" + "cm." + "\t" + "col.");

function converter() {
  for (let x = 1; x <= +10; x++) {
    console.log(
      x +
        "\t" +
        (x * 2.54).toFixed(2) +
        "\t" +
        "|" +
        "\t" +
        x +
        "\t" +
        (x / 2.54).toFixed(2)
    );
  }
}
converter();

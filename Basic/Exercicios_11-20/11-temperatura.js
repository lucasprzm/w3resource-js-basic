// 11. Programa criado para converter temperatura de graus Celsius para Fahrenheit ou vice-versa.

function conversaoTemperatura(temperatura, unidade) {
  if (unidade == "F") {
    let conversao = (5 * (temperatura - 32)) / 9;
    console.log(`${temperatura}°F é ${conversao}°C.`);
  } else if (unidade == "C") {
    let conversao = (9 * temperatura + 160) / 5;
    console.log(`${temperatura}°C é ${conversao}°F.`);
  }
}
conversaoTemperatura(45, "F");
conversaoTemperatura(60, "C");

// 56. Programa para separar cada número do resultado de uma divisão.
function divisaoNumeros(x, y) {
  let string = Math.round(x / y).toString();

  console.log(string.split(""));
}
divisaoNumeros(40, 2);
divisaoNumeros(2000, 2);

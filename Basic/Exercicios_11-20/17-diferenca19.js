// 17. Programa para obter a diferença de um número e do número 19, mas caso o número seja maior que 19, o resultado deve ser o triplo da diferença.

function diferenca(numero) {
  if (numero > 19) {
    console.log((numero - 19) * 3);
  } else {
    console.log(19 - numero);
  }
}
diferenca(1);
diferenca(200);

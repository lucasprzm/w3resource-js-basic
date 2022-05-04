// 15. Programa para obter a diferença de um número e do número 13, mas caso o número seja maior que 13, o resultado deve ser o dobro da diferença.

function diferenca(numero) {
  if (numero > 13) {
    console.log((numero - 13) * 2);
  } else {
    console.log(13 - numero);
  }
}
diferenca(1);
diferenca(15);

// 39. Programa para verificar o resultado da soma entre dois números, se a soma for entre 50 e 80, retorna o valor 65, caso não esteja na faixa, imprime o número 80.
function somaRange(x, y) {
  if (x + y >= 50 && x + y <= 80) {
    console.log(65);
  } else {
    console.log(80);
  }
}
somaRange(40, 35);
somaRange(80, 20);

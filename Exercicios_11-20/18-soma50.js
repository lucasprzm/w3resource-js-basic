// 18. Programa que checa 2 valores, se um dos dois for igual a 50 ou se a soma dos dois for 50, retorna true.

function checarValor(valor1, valor2) {
  console.log(valor1 == 50 || valor2 == 50 || valor1 + valor2 == 50);
}
checarValor(20, 30);
checarValor(50, 30);
checarValor(20, 10);

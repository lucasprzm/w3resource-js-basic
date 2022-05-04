// 106. Função para dividir um número por um divisor até que o resultado não seja inteiro mais.
function divisao(numero, divisor) {
  if (divisor != 1) {
    while (numero % divisor == 0) {
      numero = numero / divisor;
    }
  }
  console.log(numero);
}
divisao(-12, 2);
divisao(13, 2);
divisao(13, 1);
divisao(32, 2);
divisao(625, 5);

// 112. Função que verifica quantos zeros a direita existem no resultado de um fatorial de qualquer número.
function fatorial(num) {
  let resultado = 1;
  let zerosDireita = 0;
  for (i = num; i >= 1; i--) {
    resultado *= i;
  }
  while (resultado % 10 == 0) {
    zerosDireita++;
    resultado = resultado / 10;
  }
  console.log(resultado);
  console.log(zerosDireita);
}
fatorial(10);

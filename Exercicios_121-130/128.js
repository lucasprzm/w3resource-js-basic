// 128. Função para arredondar para cima qualquer número dado.
function arredondar(numero) {
  while (numero % 10) {
    numero++;
  }
  console.log(numero);
}
arredondar(201);
arredondar(318);

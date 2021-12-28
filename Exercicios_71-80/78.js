// 78. Função que verifica se não tem os números 1 ou 3 em um determinado array de 2 elementos.
function umTres(array) {
  console.log(array.indexOf(1) == -1 && array.indexOf(3) == -1);
}
umTres([1, 5]);
umTres([2, 3]);
umTres([2, 4]);

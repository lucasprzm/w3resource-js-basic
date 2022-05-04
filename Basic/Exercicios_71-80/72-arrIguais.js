// 72. Programa para verificar se o primeiro e último de um array de 3 elementos são iguais.
function arrIguais(array) {
  console.log(array.length == 3 && array[0] == array[2]);
}
arrIguais([2, 1, 2]);
arrIguais([10, 20, 30]);
arrIguais([10, 20, 30, 40]);

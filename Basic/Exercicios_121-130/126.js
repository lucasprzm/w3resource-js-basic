// 126. Função para verificar qual o maior número par de um array.
function maiorPar(array) {
  let maiorValorPar = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] > maiorValorPar) {
      maiorValorPar = array[i];
    }
  }
  console.log(maiorValorPar);
}
maiorPar([20, 40, 200]);
maiorPar([3000, 2000, 1500]);

// 69. Função para somar 3 números de um array com tamanho fixo.
function somaArray(x, y, z) {
  let array = [x, y, z];
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  console.log(`A soma dos valores do array é ${soma}.`);
}
somaArray(2, 3, 5);
somaArray(8, 9, 10);

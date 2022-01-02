// 91. Função para verificar qual sequência de elementos de um array tem a soma maior.
function somaConsecutiva(array, numConsec) {
  let somaMax = 0;
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < numConsec; j++) {
      soma += array[i + j];
      if (j == numConsec - 1) {
        if (soma > somaMax) {
          somaMax = soma;
          soma = 0;
        } else {
          soma = 0;
        }
      }
    }
  }
  console.log(somaMax);
}
somaConsecutiva([1, 2, 3, 14, 5], 2);
somaConsecutiva([2, 3, 5, 1, 6], 3);
somaConsecutiva([9, 3, 5, 1, 7], 2);

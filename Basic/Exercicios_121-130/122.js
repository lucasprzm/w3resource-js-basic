// 122. Função para checar se um array de números é decrescente ou crescente.
function rangeArray(array) {
  let testeValor = 0;
  for (const elemento of array) {
    if (elemento >= array[0] && elemento <= array[array.length - 1]) {
      testeValor++;
    } else if (elemento <= array[0] && elemento >= array[array.length - 1]) {
      testeValor++;
    }
  }
  console.log(testeValor == array.length);
}
rangeArray([10, 20, 30, 40, 50]);
rangeArray([10, 5, 30]);

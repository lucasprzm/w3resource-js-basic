// 92. Função para verificar qual a maior diferença entre dois elementos em um array.
function diferencaConsecutiva(array) {
  let max = 0;
  let diferenca = 0;
  for (let i = 0; i < array.length; i++) {
    diferenca = array[i] - array[i + 1];
    let difAbs = Math.abs(diferenca);
    if (difAbs > max) {
      max = difAbs;
    }
  }
  console.log(max);
}
diferencaConsecutiva([1, 2, 3, 8, 9]);
diferencaConsecutiva([1, 2, 3, 18, 9]);
diferencaConsecutiva([13, 2, 3, 8, 9]);

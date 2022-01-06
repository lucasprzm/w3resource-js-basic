// 93. Função que verifica um array de números e identifica qual a maior diferença entre os números do array.
function diferencaMaxima(array) {
  array.sort((a, b) => a - b);
  console.log(array[array.length - 1] - array[0]);
}
diferencaMaxima([1, 2, 3, 8, 9]);
diferencaMaxima([1, 2, 3, 18, 9]);
diferencaMaxima([13, 2, 3, 8, 9]);

// 115. Função que verifica se uma matriz é diagonal.
function matrizDiagonal(array) {
  console.log(
    array[0][1] == 0 &&
      array[0][2] == 0 &&
      array[1][0] == 0 &&
      array[1][2] == 0 &&
      array[2][0] == 0 &&
      array[2][1] == 0
  );
}
matrizDiagonal([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
matrizDiagonal([
  [1, 0, 0],
  [0, 2, 0],
  [0, 0, 3],
]);
matrizDiagonal([
  [1, 0, 0],
  [0, 2, 3],
  [0, 0, 3],
]);
matrizDiagonal([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);

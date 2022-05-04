// 121. Função para verificar se uma matriz é triangular inferior.
function matrizTriangularInferior(matriz) {
  for (let linha of matriz) {
    if (linha.length != matriz.length) {
      return console.log(
        "A matriz não é quadrada, portanto não pode ser triangular inferior."
      );
    }
    for (let i = matriz.indexOf(linha) + 1; i < linha.length; i++) {
      if (linha[i] != 0) {
        return console.log(false);
      }
    }
  }
  console.log(true);
}
matrizTriangularInferior([
  [3, 0, 0, 0],
  [2, 4, 0, 0],
  [3, 5, 6, 0],
  [1, 0, 7, 6],
]);

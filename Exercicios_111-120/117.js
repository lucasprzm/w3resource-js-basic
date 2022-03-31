// 117. Função para verificar se uma matriz é identidade.

function matrizIdentidade(matriz) {
  let testeQuadrada = 0;
  let testeIdentidade = 0;
  for (let i = 0; i < matriz.length; i++) {
    const element = matriz[i];
    testeQuadrada += element.length;
  }
  if (testeQuadrada == Math.pow(matriz.length, 2)) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (i == j && matriz[i][j] == 1) {
          testeIdentidade++;
        } else if (i != j && matriz[i][j] != 0) {
          return console.log("A matriz não é identidade!");
        }
      }
    }
    console.log(testeIdentidade == matriz.length);
  } else {
    console.log("Essa matriz não é quadrada!");
  }
}
matrizIdentidade([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
matrizIdentidade([
  [1, 0, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
matrizIdentidade([
  [1, 0],
  [0, 1],
]);
matrizIdentidade([
  [1, 1, 0],
  [0, 1, 0],
  [0, 0, 1],
]);

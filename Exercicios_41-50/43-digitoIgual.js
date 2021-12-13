// 43. Programa que verifica se a o dígito mais próximo da direita do número é igual aos outros, nenhum dos números pode ser negativo.
function unidadeIgual(x, y, z) {
  if (x >= 0 && y >= 0 && z >= 0) {
    if (x % 10 == y % 10 && z % 10 == x % 10) {
      console.log("As unidades de todos os números são iguais!");
    } else if (x % 10 == y % 10 || z % 10 == x % 10 || z % 10 == y % 10) {
      console.log("As unidades de dois números são iguais!");
    } else {
      console.log("A unidade de nenhum dos números é igual!");
    }
  } else {
    console.log("Números negativos não são aceitos.");
  }
}
unidadeIgual(11, 21, 32);
unidadeIgual(12, 23, 42);
unidadeIgual(13, 24, 34);
unidadeIgual(14, 24, 34);
unidadeIgual(15, 26, 37);
unidadeIgual(-1, 11, 21);

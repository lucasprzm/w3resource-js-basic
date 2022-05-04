// 111. Função que verifica qual dos três números de um array é diferente dos outros 2 e imprime esse valor, caso os 3 sejam diferentes imprime uma string informando o usuário.
function tresNumeros([x, y, z]) {
  if (x != y && x != z && y == z) {
    console.log(x);
  } else if (y != x && y != z && x == z) {
    console.log(y);
  } else if (z != x && z != y && x == y) {
    console.log(z);
  } else {
    console.log("Os três números são diferentes.");
  }
}
tresNumeros([1, 2, 2]);
tresNumeros([1, 1, 2]);
tresNumeros([1, 2, 3]);

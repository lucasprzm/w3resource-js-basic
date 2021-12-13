// 41. Programa que verifica se os três números são iguais (retorna o valor 30), se 2 são iguais (retorna o valor 40) e se todos são diferentes (retorna o valor 20).
function tresValores(x, y, z) {
  if (x == y && x == z) {
    console.log(30);
  } else if (x == y || x == z || y == z) {
    console.log(40);
  } else {
    console.log(20);
  }
}
tresValores(10, 10, 10);
tresValores(15, 15, 20);
tresValores(20, 15, 20);
tresValores(20, 25, 25);
tresValores(30, 35, 40);

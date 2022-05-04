// 45. Programa para verificar se um dos dois números são 15 ou se a soma deles é 15 ou se a diferença entre eles é 15.
function quinze(x, y) {
  console.log(x == 15 || y == 15 || x + y == 15 || Math.abs(x - y) == 15);
}
quinze(15, 14);
quinze(14, 15);
quinze(4, 11);
quinze(20, 5);
quinze(5, 20);
quinze(2, 3);

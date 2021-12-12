// 40. Programa que verifica se um dos dois números é 8, se a soma deles é 8 ou se a diferença deles é 8.
function somaOito(x, y) {
  if (x == 8 || y == 8 || x + y == 8 || Math.abs(x - y) == 8) {
    console.log(true);
  } else {
    console.log(false);
  }
}
somaOito(1, 8);
somaOito(3, 5);
somaOito(64, 72);
somaOito(10, 10);

// 44. Programa para verificar se o número é maior que 23 e se é menor que um dos outros dois números.
function maiorQueVinte(x, y, z) {
  console.log(
    (x >= 20 && x < y) ||
      x < z ||
      (y >= 20 && y < x) ||
      y < z ||
      (z >= 20 && z < y) ||
      x > z
  );
}
maiorQueVinte(23, 45, 10);
maiorQueVinte(23, 25, 30);
maiorQueVinte(23, 23, 10);

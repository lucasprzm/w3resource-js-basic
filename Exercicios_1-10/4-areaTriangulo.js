// 4. Programa que calcula a área de um triângulo escaleno.

function areaTriangulo(a, b, c) {
  let p = (a + b + c) / 2;
  let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log(area);
}
areaTriangulo(5, 7, 6);

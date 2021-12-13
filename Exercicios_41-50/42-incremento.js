// 12. Programa para verificar se dentre os 3 valores ocorre alguma relação de aumento dos valores.
function incremento(x, y, z) {
  if (y > x && z > y) {
    console.log("Valor aumentando de x a z!");
  } else if (z > y) {
    console.log("Valor aumentou de y a z!");
  } else {
    console.log("Valor não aumentou!");
  }
}
incremento(10, 15, 20);
incremento(20, 15, 30);
incremento(40, 50, 60);
incremento(90, 80, 70);

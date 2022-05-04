// 89. Função que verifica se a variável z é resultado de alguma operação matemática básica entre x e y.
function operador(x, y, z) {
  console.log(x + y == z || x - y == z || x * y == z || x / y == z);
}
operador(10, 25, 35);
operador(5, 5, 25);
operador(10, 15, 200);
operador(100, 25, 4);
operador(10, 5, 5);

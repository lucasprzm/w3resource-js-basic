// 20. Programa que retorna true se um dos valores for positivo e outro negativo, false se os dois forem negativos ou se os dois forem positivos.

function positivoNegativo(valor1, valor2) {
  if ((valor1 < 0 && valor2 > 0) || (valor1 > 0 && valor2 < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positivoNegativo(-2, 3));
console.log(positivoNegativo(2, -3));
console.log(positivoNegativo(-2, -3));
console.log(positivoNegativo(2, 3));

// 36. Programa para verificar se o último dígito de um número é igual aos outros dois números.
function unidadeIgual(x, y, z) {
  let stringX = x.toString();
  let stringY = y.toString();
  let stringZ = z.toString();
  console.log(
    stringX.charAt(stringX.length - 1) == stringY.charAt(stringY.length - 1) &&
      stringZ.charAt(stringZ.length - 1) == stringX.charAt(stringX.length - 1)
  );
}
unidadeIgual(120, 10, 20);
unidadeIgual(2000, 100, 10);
unidadeIgual(25, 35, 45);
unidadeIgual(21, 22, 31);
unidadeIgual(45, 46, 47);

// 28. Programa para verificar se um dos dois números está entre 50 e 99.

function range(numeroUm, numeroDois) {
  console.log(
    (numeroUm >= 50 && numeroUm <= 99) || (numeroDois >= 50 && numeroDois <= 99)
  );
}
range(30, 120);
range(55, 150);
range(10, 88);

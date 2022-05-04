// 29. Programa que verifica se um até 3 números estão entre 50 e 99.

function range(a, b, c) {
  console.log(
    (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)
  );
}
range(30, 120, 150);
range(55, 150, 60);
range(10, 88, 99);
range(10, 30, 99);

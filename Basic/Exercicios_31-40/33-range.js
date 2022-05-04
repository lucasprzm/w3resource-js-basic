// 33. Programa para verificar se dois números estão dentro de um range de 40 a 60 ou entre 70 e 100.

function range(x, y) {
  console.log(
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
      (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  );
}
range(45, 55);
range(78, 90);
range(44, 75);
range(72, 45);
range(10, 65);

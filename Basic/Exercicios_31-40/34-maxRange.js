// 34. Programa para verificar qual o maior número entre dois números na faixa entre 40 e 60.
function maxRange(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    console.log(`O maior número é ${Math.max(x, y)}.`);
  } else {
    console.log(
      "Um dos números ou os dois números estão fora da faixa entre 40 e 60."
    );
  }
}
maxRange(50, 55);
maxRange(39, 55);
maxRange(59, 41);
maxRange(55, 39);

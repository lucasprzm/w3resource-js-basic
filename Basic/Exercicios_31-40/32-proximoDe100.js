// 32. Programa que determina qual dos dois valores possui uma diferença menor para o número 100.

function pertoDe100(x, y) {
  if (Math.abs(100 - x) < Math.abs(100 - y)) {
    console.log(`O valor de X está mais próximo de 100 do que Y`);
  } else if (Math.abs(100 - y) < Math.abs(100 - x)) {
    console.log(`O valor de Y está mais próximo de 100 do que X`);
  } else if (Math.abs(100 - y) == Math.abs(100 - x)) {
    console.log(`A diferença de Y e X para 100 é igual.`);
  }
}
pertoDe100(80, 130);
pertoDe100(60, 120);
pertoDe100(20, 180);
pertoDe100(-50, 300);

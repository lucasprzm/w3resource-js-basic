// 82. Função para determinar a soma de um número sem carregar uma dezena.
function somaDiferente(x, y) {
  let soma = 0,
    z = 1;
  while (x > 0 && y > 0) {
    soma += z * ((x + y) % 10);
    console.log(`Resultados: ${soma}`);
    x = Math.floor(x / 10);
    console.log(`x: ${x}`);
    y = Math.floor(y / 10);
    console.log(`y: ${y}`);
    z *= 10;
    console.log(`x: ${x}`);
  }
  console.log(soma);
}
somaDiferente(1299, 1911);

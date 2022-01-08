// 96. Função para somar a diferença entre dois elementos de um array.
function somaDaDiferenca(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    let diferenca = Math.abs(array[i + 1] - array[i]);
    if (Number.isInteger(diferenca)) {
      soma += diferenca;
    }
  }
  console.log(soma);
}
somaDaDiferenca([1, 2, 3, 2, -5]);
somaDaDiferenca([3, 5, 3, 5, 3, 5, 3, 5, 3]);

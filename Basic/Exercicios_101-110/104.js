// 104. Função que verifica qual diferença entre dois elemento de um array se aproxima mais de um inteiro aleatório fornecido.
function diferencaValores(array, numero) {
  let menorDiferenca = Infinity;
  let diferencaArray = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      let diferenca = Math.abs(array[i] - array[j]);
      let diferencaNumero = Math.abs(numero - diferenca);
      if (diferencaNumero < menorDiferenca) {
        menorDiferenca = diferencaNumero;
        diferencaArray = diferenca;
      }
    }
  }
  console.log(diferencaArray);
}
diferencaValores([12, 10, 33, 34], 10);
diferencaValores([12, 10, 33, 34], 24);
diferencaValores([12, 10, 33, 44], 40);
diferencaValores([120, 360, 580, 970, 100, 220, 330], 489);

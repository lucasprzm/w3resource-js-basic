// 95. Função que troca um número presente em um array por outro diferente.
function trocaDeNumero(array, numero, numeroSubstituto) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == numero) {
      array[i] = numeroSubstituto;
    }
  }
  console.log(array);
}
trocaDeNumero([1, 2, 3, 2, 2, 8, 1, 9], 2, 5);
trocaDeNumero([3, 4, 5, 6, 4, 4, 3, 5, 6], 3, 5);

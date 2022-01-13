//108. Função que soma o produto dos elementos de mesmo índice de um array, para arrays de mesmo tamanho.
function produtoDeVetores(array1, array2) {
  let resultado = 0;
  if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
      resultado += array1[i] * array2[i];
    }
  } else {
    console.log(
      "Os vetores não são do mesmo tamanho, portanto, não podem ser multiplicados!"
    );
  }
  console.log(resultado);
}
produtoDeVetores([1, 2, 3], [1, 2, 3]);
produtoDeVetores([5, 74, 6], [8, 3, 5]);

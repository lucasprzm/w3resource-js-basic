// 90. Função para ordenar números em ordem decrescente e mostrar a posição do número na lista decrescente.
function colocacaoDoElemento(array, posicao) {
  array.sort((a, b) => b - a);
  console.log(array[posicao - 1]);
}
colocacaoDoElemento([1, 3, 5, 6, 9], 1);
colocacaoDoElemento([50, 36, 80, 90, 45], 3);

// 70. Função para rotacionar um array, tirando um item do início para o final.
function rotacaoArray(x, y, z) {
  let array = [x, y, z];
  let primeiroElemento = array.shift();
  array.push(primeiroElemento);
  console.log(array);
}
rotacaoArray(10, 20, 30);
rotacaoArray(5, 6, 7);

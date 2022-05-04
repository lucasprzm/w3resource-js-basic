// 80. Função que remove o primeiro e último elemento de um array e inverte a posição deles.
function primeiroUltimo(array) {
  let ultimo = array.pop();
  let primeiro = array.shift();
  array.unshift(ultimo);
  array.push(primeiro);
  console.log(array);
}
primeiroUltimo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
primeiroUltimo([1, 2, 3, 4]);

// 76. Programa que retira o primeiro e último elemento de um array e retorna um novo array com esses elementos.
function primeiroUltimo(array) {
  if (array.length == 1) {
    console.log(array);
  } else {
    let novoArray = [];
    novoArray.push(array[0], array[array.length - 1]);
    console.log(novoArray);
  }
}
primeiroUltimo([3]);
primeiroUltimo([3, 4]);
primeiroUltimo([3, 4, 5]);
primeiroUltimo([3, 4, 5, 6]);

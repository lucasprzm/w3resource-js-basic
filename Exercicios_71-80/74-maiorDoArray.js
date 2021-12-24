// 74. Programa para classificar o maior valor no último elemento do array e transformar todos os elementos do array no maior número.
function maior(array) {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    array[i] = array[array.length - 1];
  }
  console.log(array);
}
maior([60, 50, 40]);
maior([100, 20, 70]);
maior([60, 80, 10]);

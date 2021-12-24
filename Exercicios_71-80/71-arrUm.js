// 71. Programa para verificar se o número é o primeiro ou último de um array.
function checkUm(array) {
  console.log(array);
  console.log(
    array.length >= 1 && (array[0] == 1 || array[array.length - 1] == 1)
  );
}
checkUm([1, 2, 3]);
checkUm([22, 3, 1]);
checkUm([2, 1, 6]);

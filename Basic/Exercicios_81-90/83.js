// 83. Função que ordena o array de forma que a string mais longa fique no primeiro elemento, retornando a string maior.
function stringLonga(array) {
  array.sort((a, b) => b.length - a.length);
  console.log(array[0]);
}
stringLonga(["a", "aa", "aaa", "aaaaa", "aaaa", "aaa"]);
stringLonga(["ddd", "dddddd", "d", "dddddd", "kkkkkkkkkk"]);

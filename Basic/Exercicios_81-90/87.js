// 87. Função que compara se dois arrays de tamanho igual são similares ou não,
// os dois serão similares se dois elementos ao serem trocados fazem com que os dois arrays sejam iguais.
function compararArrays(array1, array2) {
  let cont = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      cont++;
    }
  }
  console.log(cont <= 2);
}
compararArrays([10, 20, 30], [10, 20, 30]);
compararArrays([10, 20, 30], [30, 10, 20]);
compararArrays([10, 20, 30, 40], [10, 30, 20, 40]);
compararArrays([30, 40, 50, 60, 70], [30, 70, 40, 50, 60]);
compararArrays([1, 2, 3], [3, 2, 1]);

// 95. Função para verificar qual número é o mais repetido no array criado.
function ocorrenciaRepetida(array) {
  let numero = 0;
  let ocorrencias = 0;
  let ocorrenciaMaior = 0;
  array.forEach((element) => {
    for (let j = 0; j < array.length; j++) {
      if (element == array[j]) {
        ocorrencias++;
      }
      if (j == array.length - 1 && ocorrencias > ocorrenciaMaior) {
        numero = element;
        ocorrenciaMaior = ocorrencias;
        ocorrencias = 0;
      } else if (j == array.length - 1) {
        ocorrencias = 0;
      }
    }
  });

  console.log(numero);
}
ocorrenciaRepetida([1, 2, 3, 2, 2, 8, 1, 9]);
ocorrenciaRepetida([3, 4, 5, 7, 4, 5, 4, 2, 3, 4, 6, 7]);

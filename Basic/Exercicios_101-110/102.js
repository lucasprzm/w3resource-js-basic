// 102. Função para verificar quantos elementos são maiores que o próximo elemento no array.
function elementoMaior(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      contador++;
    }
  }
  console.log(contador);
}
elementoMaior([0, 3, 2, 5, 9]);
elementoMaior([1, 5, 4, 3]);
elementoMaior([10, 30, 20, -10]);
elementoMaior([6, 5, 4, 3, 2, 1]);

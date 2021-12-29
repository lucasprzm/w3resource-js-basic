// 85. Função para dividir um array em duas partes, o primeiro elemento vai para o primeiro array,
// o segundo vai para o segundo array, o terceiro para o primeiro array, o quarto para o segundo array e assim sucessivamente.
// Em seguida, os elementos dos dois novos arrays são somados e um novo array com dois elementos,
// cada elemento é a soma de cada um dos arrays criados no início.
function dividindoArray(array) {
  let arrayUm = array.filter((elemento) => {
    return array.indexOf(elemento) % 2 == 0;
  });
  let arrayDois = array.filter((elemento) => {
    return array.indexOf(elemento) % 2 != 0;
  });
  let somaArrayUm = arrayUm.reduce((a, b) => {
    return a + b;
  });
  let somaArrayDois = arrayDois.reduce((a, b) => {
    return a + b;
  });
  let arraySoma = [somaArrayUm, somaArrayDois];
  console.log(arraySoma);
}
dividindoArray([1, 2, 3, 4, 5, 6]);

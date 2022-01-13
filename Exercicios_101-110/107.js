// 107. Função para verificar quantos divisores os elementos de um array possuem entre si.
function divisorArray(array) {
  let divisoesSemResto = 0;
  let resposta = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      if (
        (array[j] >= array[i] && array[j] % array[i] == 0) ||
        (array[i] > array[j] && array[i] % array[j] == 0)
      ) {
        divisoesSemResto++;
        resposta += "(" + array[i] + "," + array[j] + ") ";
      }
    }
  }
  console.log(`${divisoesSemResto} - ${resposta}`);
}
divisorArray([1, 2, 3]);
divisorArray([6, 4, 2]);
divisorArray([2, 4, 6]);
divisorArray([2, 4, 16]);
divisorArray([16, 4, 2]);
divisorArray([3, 15, 18, 6, 2, 8, 24]);

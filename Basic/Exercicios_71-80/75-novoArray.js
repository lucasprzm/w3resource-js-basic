// 75. Função que retira o elemento do meio de dois arrays diferentes de tamanho 3 e forma
function novoArray(arrayUm, arrayDois) {
  arrayTres = [];
  if (arrayUm.length == 3 && arrayDois.length == 3) {
    arrayTres.push(arrayUm[1], arrayDois[1]);
    console.log(arrayTres);
  } else {
    console.log("O array um e dois devem ter somente 3 elementos.");
  }
}
novoArray([1, 2, 3], [3, 5, 7]);
novoArray([10, 30, 50, 60], [5, 2, 3]);

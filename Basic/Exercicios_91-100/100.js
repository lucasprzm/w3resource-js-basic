//100. Função para verificar se dois arrays de números diferentes possum algum elemento em comum.
function elementoIgual(array1, array2) {
  let resultado = false;
  array1.forEach((element) => {
    for (let i = 0; i < array2.length; i++) {
      if ((element = array2[i])) {
        resultado = true;
        break;
      }
    }
  });
  console.log(resultado);
}
elementoIgual([1, 2, 3], [3, 4, 5]);
elementoIgual([10, 20, 5], [12, 5, 21]);
elementoIgual([1, 2, 3], [4, 5, 6]);

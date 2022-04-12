// 125. Função que mostra qual string de um array de strings é a mais longa.

function stringMaisLongaArray(array) {
  let lengthMaiorString = 0;
  let maiorString = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= lengthMaiorString) {
      lengthMaiorString = array[i].length;
      maiorString = array[i];
    }
  }
  console.log(maiorString);
}
stringMaisLongaArray(["ab", "a", "abcd"]);

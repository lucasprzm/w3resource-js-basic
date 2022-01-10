// 99. Função para verificar se uma string é igual a outra mesmo com os caracteres organizados de forma diferente.
function comparandoStrings(stringUm, stringDois) {
  if (stringUm.length == stringDois.length) {
    let splitUm = stringUm.split("");
    splitUm.sort();
    let splitDois = stringDois.split("");
    splitDois.sort();
    console.log(splitUm.join() == splitDois.join());
  } else {
    console.log(
      "As duas strings são de tamanhos diferentes, portanto não podem ser arranjadas de forma igual."
    );
  }
}
comparandoStrings("xyz", "zxy");
comparandoStrings("lucas", "csalu");

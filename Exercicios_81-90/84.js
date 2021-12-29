// 84. Função que retorna uma nova string com as letras trocadas, cada letra será trocada pela próxima letra do alfabeto.
function trocaLetras(string) {
  let novaString = "";
  let novaLetra = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) < 122) {
      novaLetra = String.fromCharCode(string.charCodeAt(i) + 1);
    } else if (string.charCodeAt(i) == 122) {
      novaLetra = String.fromCharCode(string.charCodeAt(i) - 25);
    }
    novaString += novaLetra;
  }
  console.log(novaString);
}
trocaLetras("zebra");
trocaLetras("lucas");

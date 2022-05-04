// 134. Função para mudar as letras do alfabeto para o oposto dela no alfabeto.
function mudarLetras(string = "") {
  let novaString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      novaString += String.fromCharCode(219 - string.charCodeAt(i));
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      novaString += String.fromCharCode(155 - string.charCodeAt(i));
    }
  }
  console.log(novaString);
}
mudarLetras("abcxyz");
mudarLetras("python");
mudarLetras("lucas");
mudarLetras("LUCAS");

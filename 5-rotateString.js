// 5. Programa que retira a última letra de uma string e adiciona no início.

function rotateString(string) {
  let letraRemovida = string.substring(string.length - 1);
  //console.log(letraRemovida);
  let stringSemUltimaLetra = string.substring(0, string.length - 1);
  //console.log(stringSemUltimaLetra);
  let novaString = letraRemovida + stringSemUltimaLetra;
  console.log(novaString);
}
rotateString("w3resource");

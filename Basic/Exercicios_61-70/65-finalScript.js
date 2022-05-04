// 65. Programa para verificar se no final da String tem a palavra Script.
function finalString(string) {
  console.log(
    string.length >= 6 && string.substring(string.length - 6) == "Script"
  );
  // JavaScript
  // 0123456789
}
finalString("JavaScript");
finalString("lucaScript");

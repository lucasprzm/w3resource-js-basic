// 30. Programa para verificar se existe a palavra Script na 5ª posição da string, retornando a string sem a palavra Script.

function stringScript(string) {
  if (string.substring(4, 10) == "Script") {
    console.log(string.substring(0, 4) + string.substring(10, string.length));
  } else {
    console.log(string);
  }
}
stringScript("JavaScriptSonian");
stringScript("LucaScripts Matos");
stringScript("Lucas");

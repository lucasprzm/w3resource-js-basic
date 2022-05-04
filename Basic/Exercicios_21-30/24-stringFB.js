// 24. Programa para manipular string, adicionando o primeiro caractere da string no início e no final.

function stringFB(string) {
  console.log(string.substring(0, 1) + string + string.substring(0, 1));
}
stringFB("lucas");
stringFB("fabricio");
